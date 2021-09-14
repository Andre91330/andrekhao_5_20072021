const displayBasket = (basket) => {                                // affichage des totaux du panier cumul
    document.getElementById("productsNumber").innerText = basket.nbProducts;  
    document.getElementById("totalPrice").innerText = displayPrice(basket.priceTotal); 

    function displayPrice(price) {        
        return `${(price/100).toFixed(2)} €`;
    }
 
    const productsEltName = document.querySelector(".finalItem");   // affichage des produits choisis et personnalisés
        for (let i = basket.products.length; i--;) {       
            const productName = basket.products[i].name        
            let trElt = document.createElement("tr"); 
            trElt.innerText = `${productName} -  ${basket.products[i].varnish} :`;
            productsEltName.appendChild(trElt);
    console.log(productName);
        }

    const productsEltPrice = document.querySelector(".unitPrice");   // affichage des tarif
        for (let i = basket.products.length; i--;) {       
            const productPrice = basket.products[i].price        
            let trElt = document.createElement("tr"); 
            trElt.innerText = displayPrice(productPrice);
            productsEltPrice.appendChild(trElt);
    console.log(productPrice);
        }        
};

clearBasket.onclick = () => {                                      // suppression du panier
    localStorage.clear();
    document.location.reload();
};

// --- controle du formulaire avant envoi en LS
const checkInputName = (input) => {                                // verifie <1 lettre et pas de chiffre
    if (input.length <=1 || input.match(/[0-9]/g)){               
        alert("Nom ou Prénom mal saisi."); 
        return false;       
    }
    return true;   
};

const checkInputEmail = (input) => {                               // verifie le format mail
    if (input.length <=1 || !input.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {           
        alert("Veuillez vérifier votre adresse E-mail.");
        return false;
    }
    return true;
};

const checkInputAddress = (input) => {                             // verifie <1 lettre
    if (input.length <=2) {
        alert("Veuillez vérifier votre adresse.");
        return false;
    }
    return true;
};

const checkInputCity = (input) => {                                // verifie CP >5 chiffres
    if (!input.match(/^([0-9]{5}) (.*)$/g)){               
        alert("Veuillez corriger votre Code postal.");
        return false;
    }
    return true;
};

 //--- creation du data client
const getValueFromInput = (input) =>    
    document.querySelector(`#${input}`).value;

const buildContactData = () => {                                   // creation des variables contact selon le format du fetch post
    const lastName = getValueFromInput("lastName");
    const firstName = getValueFromInput("firstName");
    const email = getValueFromInput("email");
    const address = getValueFromInput("address");
    const city = getValueFromInput("city");
  

    if (
        !checkInputName(lastName) ||                               // controle que chaque variable avant envoi du formulaire 
        !checkInputName(firstName) ||
        !checkInputAddress(address) ||
        !checkInputCity(city) ||
        !checkInputEmail(email) 
    ) {
        return false;                        
    }
    alert("Merci pour votre commande");
    return {                                           
        lastName: lastName,
        firstName: firstName,
        email: email,
        address: address,
        city: city
        
    };
};

 //--- creation du data objet
const buildProductsData = (basket) => {                             // creation des artilces
    const ids = [];
    for (let i = basket.products.length; i--;) {
            ids.push(basket.products[i]._id);
    }
        return ids;
}; 

const buildObjectsForOrder = (basket) => {                          // format du fetch post
    const contact = buildContactData();
    const products = buildProductsData(basket);  
    return {
        contact: contact,
        products: products,
    }   
};

const displayEmptyBasket = () => {                                  // en cas de panier vide
    document.querySelector(".pageBasket").innerHTML = '<br/><div>Votre panier contient aucun article.</div><br/>';
}

(() => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    if (basket && basket.products.length){
        displayBasket(basket);
    }else{
        displayEmptyBasket();
    } 

    const sendOrder = () => {
        const data = buildObjectsForOrder(basket);
    console.log(data);
        if(!!data.contact){                                         // gestion des erreurs ; si contact =  true,  on execute le fectch.
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
            alert('Votre formulaire est mal rempli');      
        }
    };
    const btn = document.querySelector('#sendOrder');
    btn.addEventListener('click', sendOrder);
})();