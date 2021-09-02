
/* contactIndent = `
    <section id="guestIndent">
        <div>
            <h2>Adresse de livraison : </h2>
            <p id="lastNameIndent">Nom : <span>${lastName}</span></p>
            <p id="firstNameIndent">Prénom : <span>${firstName}</span></p>
            <p id="addressIndent">Adresse : <span>${address}</span></p>
            <p id="cityeIndent">Ville : <span>${city}</span></p>
            <p id="emailIndent">e-mail : <span>${email}</span></p>
        </div> 
    </section>
`;


function displaybasketItemsIndent(order) {
        for (let i = order.products.length; i--;) {    
            const itemsIndent = order.products[i].name        
            let trElt = document.createElement("tr"); 
            trElt.innerText = `${itemsIndent}, ${order.products[i].varnish} :`;
            productsEltName.appendChild(trElt);
            console.log(itemsIndent);
        }
}

const displayBasket = (order) => {
    document.getElementById("productsNumberIndent").innerText = order.nbProducts;  
    document.getElementById("totalPriceIndent").innerText = displayPrice(order.priceTotal); 
}
//    document.getElementById("lastName").textContent= contact.lastName
//    document.getElementById("firstNAme").textContent= contact.firstName
//    document.getElementById("addresse").textContent= contact.address
//    document.getElementById("city").textContent= contact.city    
//    document.getElementById("email").textContent= contact.email 
//} 

//afficher tous les articles commandés
////basketProductsIndent = `
//}
*/
