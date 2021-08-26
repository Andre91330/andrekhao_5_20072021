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

clearBasket.onclick = () =>{
    localStorage.clear();
    document.location.reload();
};

// ---formulaire-------
const guest = json.stringify(localStorage.setItem("guest"));

const validGuest = document.querySelector('#guest');
    validGuest.addEventListener('click',guest);


const buildContactData=() =>{
//        check sur les input
    var checkValid = true;
    for(let input of document.querySelectorAll(".coordonnees input")){
        checkValid &= input.reportValidity();
        if(!checkValid) {
            break;
        }
    };

//      si tout est valid
    return {
        firstName: document.querySelector("#nomClient").value,
        lastName: document.querySelector("#prenom").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#ville").value,
        email: document.querySelector("#mail").value,
    };
};

const buildProductsData = (basket) => {
    const ids = [];
    for (let i = basket.products.length; i--;) {
        ids.push(basket.products[i]._id);
    }
    return ids;
}

const buildObjetsForOrder = (basket) => {
    const contact = buildContactData();
    const products = buildProductsData(basket);
    return {
        contact: contact,
        products: products,
    };   
};

// a modifier
(() => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    displayBasket(basket);
  
    const data = buildObjetsForOrder(basket);

    const sendOrder = () => {
        console.log(data);
        fetch("http://localhost:3000/api/furniture/order", {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function (httpResponse) {
            return httpResponse.json();
        }).then(function (order) {
            localStorage.setItem('order',JSON.stringify(order));
            localStorage.removeItem('basket');
            location.replace('/home/order.html');
            return order;
        }).catch(function (error) {
            alert(error);
        });
    };

    const btn = document.querySelector('#sendOrder');
    btn.addEventListener('click', sendOrder);
})();