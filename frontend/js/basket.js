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

const guestDetails = document.querySelector("#guest"); 
    guestDetails.addEventListener("submit", function(){
    var validDetails = true;
        for(let input of document.querySelectorAll(".contactDetails input")){
            valid &= input.reportValidity();
            if(!validDetails){
                break;
            }
        }
       if(validDetails){ 
        alert("Merci, vos coordonnées ont bien été prises en compte.");
        }
        localStorage.setItem("contactDetails", JSON.stringify(contactDetails));
        console.log(contactDetails);
    });

const buildContactData = () => {
    class contact {
        lastName = '';
        firstName = '';
        address = '';
        city = '';
        email = '';
    }
        contact() ;
        {
            return {
                lastName : this.lastName,
                firstName : this.firstName,
                address : this.address,
                city : this.city,
                email : this.email
            localStorage.setItem("contact", JSON.stringify(contact));   
            }
        }
           
};



//    const sendContactToLocalStorage = () => {   

//    localStorage.setItem("guestDetails", JSON.stringify(sendContactToLocalStorage));
//    contactValid.addEventListener('onclick', sendContactToLocalStorage);
//    document.location.reload();

 



// formulaire
// const buildContactData = () =>{ 
//    const guestValid = document.querySelector('#guest');
//    guestValid.addEventListener('submit', sendContactValidToLocalStorage);
//    localStorage.setItem('contactDetails',JSON.stringify(sendContactValidToLocalStorage));
//    };


//const buildProductsData = (basket) => {
//    const ids = [];
//    for (let i = basket.products.length; i--;) {
//        ids.push(basket.products[i]._id);
//    }
//    return ids;
//};


// const buildContactData = () =>{  

//const buildProductsData = (basket) => {
//    const ids = [];
//    for (let i = basket.products.length; i--;) {
//        ids.push(basket.products[i]._id);
//    }
//    return ids;
//}