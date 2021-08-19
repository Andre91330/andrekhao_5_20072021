const displayBasket = (basket) => {
    document.getElementById("productsNumber").innerText = basket.nbProducts;  
    document.getElementById("totalPrice").innerText = basket.priceTotal; 

    let productsEltName = '<th>';
        for (let i = basket.products.length; i--;) {   
            productsEltName += `<td>${basket.products[i].name}, ${basket.products[i].varnish}</td>`;          
            console.log(basket.products[i].name);
        }
        productsEltName += '</th>'; 
        document.querySelector("#finalItem").innerHTML = productsEltName;
        console.log(basket.products);

    let productsEltPrice = '<th>';
        for (let i = basket.products.length; i--;) {   
            productsEltPrice += `<td>${basket.products[i].price}</td>`;
            console.log(basket.products[i].price);
        }
        productsEltPrice += '</th>'; 
        document.querySelector("#unitPrice").innerHTML = productsEltPrice;
        console.log(basket.products); 
        
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
//const guestHome = JSON.parse(localStorage.getItem("home"));

const enregistrerFormulaire = document.querySelector("#enregistrer");    
console.log(enregistrerFormulaire);

//if(guestLocal != null)      a modifier
//{
//    formulaire.style.display ="none";
//    thk.textContent = `Merci, ${guestLocal.prenom}.`;   // ok
//}

enregistrerFormulaire.addEventListener("click", (event) =>{
    event.preventDefault();
    document.location.reload();

const yourgenre = document.querySelectorAll("input[name = 'genre']"); // recuperer les donnees du formulaire
    for (i = 0; i < yourgenre.length; i++) {
        if (yourgenre[i].checked === true) {
            genre = yourgenre[i].value;
    }
};

const guest = {
    genre: genre,
    nom: nom.value,
    prenom: prenom.value,
    mail: mail.value
};

//const home = {
//    rue: rue.value,
//    complementrue: complement.value,
//    cp: cp,
//    ville: ville
//};

// const codePostal
// document.querySelector("#codepostal").addEventListener('input, function () {
//  if (codePostal.length == 5){ 
//   "on enregitre en ls"    
//}
//}) 


localStorage.setItem("guest", JSON.stringify(guest));  // stocker
//localStorage.setItem("home", JSON.stringify(home));
});


clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();
};