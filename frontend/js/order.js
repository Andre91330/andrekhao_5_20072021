const order = JSON.parse(localStorage.getItem("order"));

    document.getElementById("orderNumber").innerText = order.orderId; 
    document.getElementById("indentLastName").innerText= order.contact.lastName;
    document.getElementById("indentFirstName").innerText= order.contact.firstName;
    document.getElementById("indentAddress").innerText= order.contact.address;
    document.getElementById("indentCity").innerText= order.contact.city;
    document.getElementById("indentEmail").innerText= order.contact.email;

 //   document.getElementById("indentProductsNumber").innerText = order.nbProducts;  
 //   document.getElementById("indentTotalPrice").innerText = displayPrice(order.priceTotal)


 
/*  function displayIndentItems(order) {
    for (let i = order.products.length; i--;) {    
        const itemsIndent = order.products[i].name;        
        let trElt = document.createElement("tr"); 
        trElt.innerText = `${itemsIndent}, ${order.products[i].varnish} :`;
        productsEltName.appendChild(trElt);
        console.log(itemsIndent);
    }
};
*/


/*  const getProductsIndentFromLocalStorage = () => {              
    const productsIndent;
    if(localStorage.getItem("order")) {
        productsIndent = {
            nbProducts : 0,
            priceTotal: 0,
            contact: contact,
            products: [],
        };
    }
    return productsIndent;
*/

