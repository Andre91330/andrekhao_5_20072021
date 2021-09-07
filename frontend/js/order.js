const order = JSON.parse(localStorage.getItem("order"));
    document.getElementById("orderNumber").innerText = order.orderId; 
    document.getElementById("indentLastName").innerText= order.contact.lastName;
    document.getElementById("indentFirstName").innerText= order.contact.firstName;
    document.getElementById("indentAddress").innerText= order.contact.address;
    document.getElementById("indentCity").innerText= order.contact.city;
    document.getElementById("indentEmail").innerText= order.contact.email;

    document.getElementById("indentProductsNumber").innerText = order.products.length;     

const productsIndentEltName = document.querySelector(".finalIndentItem");               // affichage des produits
    for (let i = order.products.length; i--;) {       
        const productIndentName = order.products[i].name        
        let trElt = document.createElement("tr"); 
        trElt.innerText = `${productIndentName}`;
        productsIndentEltName.appendChild(trElt);
    console.log(productIndentName);
    }

const productsIndentEltPrice = document.querySelector(".unitIndentPrice");             // affichage du prix unitaire
    for (let i = order.products.length; i--;) {       
        const productIndentPrice = order.products[i].price        
        let trElt = document.createElement("tr"); 
        trElt.innerText = displayPrice(productIndentPrice);
        productsIndentEltPrice.appendChild(trElt);
        console.log(productIndentPrice);
    }

/*       MONTANT A REGLER
const productTotalPrice = document.querySelector("#indentTotalPrice");                 // montant a régler
    for (let i = order.products.length; i--;) {       
        let indentTotalPrice += (order.products[i].price);
        productTotalPrice.innerText = displayPrice(indentTotalPrice);
        console.log(indentTotalPrice);
    }
*/

function displayPrice(price) {        
    return `${(price/100).toFixed(2)} €`;
}