const order = JSON.parse(localStorage.getItem("order"));
    document.getElementById("orderNumber").innerText = order.orderId; 
    document.getElementById("indentLastName").innerText= order.contact.lastName;
    document.getElementById("indentFirstName").innerText= order.contact.firstName;
    document.getElementById("indentAddress").innerText= order.contact.address;
    document.getElementById("indentCity").innerText= order.contact.city;
    document.getElementById("indentEmail").innerText= order.contact.email;

    document.getElementById("indentProductsNumber").innerText = order.products.length;  

const productsIndentEltName = document.querySelector(".finalIndentItem");               // affichage des produits finlisés
    for (let i = order.products.length; i--;) {       
        const productIndentName = order.products[i].name        
        let trElt = document.createElement("tr"); 
        trElt.innerText = `${productIndentName}`;
        productsIndentEltName.appendChild(trElt);
    console.log(productIndentName);
    }

const productsIndentEltPrice = document.querySelector(".unitIndentPrice");
    for (let i = order.products.length; i--;) {       
        const productIndentPrice = order.products[i].price        
        let trElt = document.createElement("tr"); 
        trElt.innerText = displayPrice(productIndentPrice);
        productsIndentEltPrice.appendChild(trElt);
        console.log(productIndentPrice);
    }

function displayPrice(price) {        
    return `${(price/100).toFixed(2)} €`;
}



/* const getTotalPriceFromLocalStorage = () => {                                       // basket nb produit, total prix
    

   
    document.getElementById("indentTotalPrice").innerText = displayPrice(order.priceTotal);

/*    const getBasketFromLocalStorage = () => {                                       // basket nb produit, total prix
        let basket;
        if(localStorage.getItem("basket")) {
            basket = JSON.parse(localStorage.getItem("basket"));
        } else {
            basket = {
                nbProducts : 0,
                priceTotal: 0,
                products: [],
            };
        }
        return basket;
    };
*/
