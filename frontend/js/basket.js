const displayBasket = (basket) => {
    document.getElementById("productsNumber").innerText = basket.nbProducts;  
    document.getElementById("totalPrice").innerText = `${(basket.priceTotal/100).toFixed(2)} €`; 

const productsEltName = document.querySelector(".finalItem");
    for (let i = basket.products.length; i--;) {       
        const productName = basket.products[i].name        
        let trElt = document.createElement("tr"); 
        trElt.innerText = `${basket.products[i].name}, ${basket.products[i].varnish} :`;
        productsEltName.appendChild(trElt);
        console.log(basket.products[i].name);
    }

const productsEltPrice = document.querySelector(".unitPrice");
    for (let i = basket.products.length; i--;) {       
        const productPrice = basket.products[i].price        
        let trElt = document.createElement("tr"); 
        trElt.innerText = `${((basket.products[i].price)/100).toFixed(2)} €`;
        productsEltPrice.appendChild(trElt);
        console.log(basket.products[i].price);
    }
    
function displayPrice(price) {        
    return `${(price/100).toFixed(2)} €`;
    } 
};

(async() => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    displayBasket(basket);
})();

// ---formulaire-------
const guestLocal = JSON.parse(localStorage.getItem("guest"));

const enregistrerFormulaire = document.querySelector("#enregistrer");    
console.log(enregistrerFormulaire);

enregistrerFormulaire.addEventListener("click", (event) =>{
    event.preventDefault();
    document.location.reload();

const yourgenre = document.querySelectorAll("input[name = 'genre']"); // recuperer les donnees du formulaire
    for (i = 0; i < yourgenre.length; i++) {
        if (yourgenre[i].checked === true) {
            genre = yourgenre[i].value;
    }
};

//const cPostal
//    document.querySelector("#codePostal").addEventListener('input, function () {
//    if (cPostal.length == 5){ 
 //  "on enregitre en ls"    
 //   }
//};

const guest = {
    genre: genre,
    nom: nomClient.value,
    prenom: prenom.value,
    mail: mail.value,
    adresse: rue.value,
    adresseSuite: rueSuite.value,
    cp: codePostal.value,
    ville: ville.value
}

localStorage.setItem("guest", JSON.stringify(guest));  // stocker
});


clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();
};

