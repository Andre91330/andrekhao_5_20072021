const displayBasket = (basket) => {
    document.getElementById("productsNumber").innerText = basket.nbProducts;  
    document.getElementById("totalPrice").innerText = displayPrice(basket.priceTotal); 

    function displayPrice(price) {        
        return `${(price/100).toFixed(2)} €`;
    }
 
    const productsEltName = document.querySelector(".finalItem");
        for (let i = basket.products.length; i--;) {       
            const productName = basket.products[i].name        
            let trElt = document.createElement("tr"); 
            trElt.innerText = `${productName} -  ${basket.products[i].varnish} :`;
            productsEltName.appendChild(trElt);
    console.log(productName);
        }

    const productsEltPrice = document.querySelector(".unitPrice");
        for (let i = basket.products.length; i--;) {       
            const productPrice = basket.products[i].price        
            let trElt = document.createElement("tr"); 
            trElt.innerText = displayPrice(productPrice);
            productsEltPrice.appendChild(trElt);
    console.log(productPrice);
        }        
};

clearBasket.onclick = () => {
    localStorage.clear();
    document.location.reload();
};

// --- controle du formulaire-------
const checkInputName = (input) => {
    if (input.length <=1 || input.match(/[0-9]/g)) {    // verifie <1 lettre et pas de chiffre
        alert("Nom ou Prénom mal saisi"); 
        return false;       
    }
    return true;   
}

const checkInputAddress = (input) => {
    if (input.length <=1) {                             // verifie <1 lettre
        return false;
    }
    return true;
}

const checkInputEmail = (input) => {
    if (input.length <=1 || !input.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {           // verifie format mail
        alert("Mail erronné");
        return false;
    }
    return true;
}

 //--- creation du data client ---
 const getValueFromInput = (input) =>
    document.querySelector(`#${input}`).value;

const buildContactData = () => {                        // creation des variables contact
    const lastName = getValueFromInput("lastName");
    const firstName = getValueFromInput("firstName");
    const address = getValueFromInput("address");
    const city = getValueFromInput("city");
    const email = getValueFromInput("email");

    if (
        !checkInputName(lastName) ||                    // je verifie pour chaque variable qu'il ne retourne pas false 
        !checkInputName(firstName) ||
        !checkInputAddress(address) ||
        !checkInputAddress(city) ||
        !checkInputEmail(email) 
    ) {
        return false;                                   // si false
    }
    return {                                            // true
        lastName: lastName,
        firstName: firstName,
        address: address,
        city: city,
        email: email
    };
};

//--- const buildProductsData = (basket) => basket.products.map(product => product_id);

const buildProductsData = (basket) => {
    const ids = [];
    for (let i = basket.products.length; i--;) {
        ids.push(basket.products[i]._id);
    }
    return ids;
};

const buildObjectsForOrder = (basket) => {
    const contact = buildContactData();
    const products = buildProductsData(basket);
    return {
        contact: contact,
        products: products,
    }   
};

// a modifier
(() => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    displayBasket(basket);

    const sendOrder = () => {
        const data = buildObjectsForOrder(basket);
    console.log(data);
        if(!!data.contact){                                         // si contact =  true,  on execute le fectch, sinon on gere les erreurs
            fetch("http://localhost:3000/api/furniture/order", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data),              
            })
            .then(function (httpResponse) {
                return httpResponse.json();
            })
            .then(function (order) {
        console.log(order);
            localStorage.setItem('order', JSON.stringify(order));
            localStorage.removeItem('basket');
            location.replace('/home/order.html');
                return order;
            })
            .catch(function (error) {
                alert(error);
            });   
        } else {
            alert('Votre formulaire est mal rempli');       /// a corriger
        }
    };
    const btn = document.querySelector('#sendOrder');
    btn.addEventListener('click', sendOrder);
})();