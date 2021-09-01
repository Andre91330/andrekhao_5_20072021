const displayBasket = (basket) => {
    document.getElementById("productsNumber").innerText = basket.nbProducts;  
    document.getElementById("totalPrice").innerText = displayPrice(basket.priceTotal); 

    const productsEltName = document.querySelector(".finalItem");
        for (let i = basket.products.length; i--;) {       
            const productName = basket.products[i].name        
            let trElt = document.createElement("tr"); 
            trElt.innerText = `${productName}, ${basket.products[i].varnish} :`;
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
    
    function displayPrice(price) {        
        return `${(price/100).toFixed(2)} €`;
        } 
};

clearBasket.onclick = () => {
    localStorage.clear();
    document.location.reload();
};

// ---formulaire-------


 // creation du data client
const buildContactData = () => {   
    const guestInput = document.querySelector('#guest');
    guestInput.onclick = () => { 

        var validInputs = true;
        for(let input of document.querySelectorAll("contactDetails input")){
            validInputs &= input.reportValidity();
            if(!validInputs){
                break;
            }
        };

//       if(validInputs){
//        alert ("Merci, vos coordonnées ont bien été prises en compte.");
//        }     

        const contact = {
            lastName: lastName.value,
            firstName: firstName.value,
            address: address.value,
            city: city.value,
            email: email.value
        } 

    localStorage.setItem("contact", JSON.stringify(contact));
    document.location.reload();

        return {
            lastName: document.querySelector("#lastName").value,
            firstName: document.querySelector("#firstName").value,
            address: document.querySelector("#address").value,
            city: document.querySelector("#city").value,
            email: document.querySelector("#email").value
        }
    }        
}

//const buildProductsData = (basket) => basket.products.map(product => product_id);
const buildProductsData = (basket) => {
    const ids = [];
    for (let i = basket.products.length; i--;) {
        ids.push(basket.products[i]._id);
    }
    return ids;
};

const buildObjectsForOrder = (basket) => {
    const contact = buildContactData();
console.log(contact);
    const products = buildProductsData(basket);
console.log(products);
    return {
        contact: contact,
        products: products,
    };   
};

// a modifier
(() => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    displayBasket(basket);
  
    const data = buildObjectsForOrder(basket);

    const sendOrder = () => {
       console.log(data);
        fetch("http://localhost:3000/api/furniture/order", {
            method: "post",
            body: JSON.stringify(data)
        })
            .then(function (httpResponse) {
                return httpResponse.json();
        })
            .then(function (order) {
            localStorage.setItem('order', JSON.stringify(order));
            localStorage.removeItem('basket');
            location.replace('/home/order.html');
                return order;
        })
            .catch(function (error) {
                alert(error);
        });
    };

    const btn = document.querySelector('#sendOrder');
    btn.addEventListener('click', sendOrder);
})();