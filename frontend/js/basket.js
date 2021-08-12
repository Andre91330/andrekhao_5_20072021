// if(produitchoisi == null)
//{
//    produitchoisi.style.display ="none";
//    infoguest.style.display ="none";
//    panier.textContent = "Vous n'avez pas encore choisi d'article ?"
//}

// localStorage.setItem("clé", "valeur")
// localStorage.getItem("clé")
// localStoragr.clear();

const displayBasket = (basket) => {
    document.getElementById("totalPrice").innerText = basket.price_total;   // setAttribute -> img
const productsElt = document.querySelector("#products");

    for (let i = basket.productsElt.length; i--;) {
        const product = basket.products[i];
        const divElt = document.createElement('div');
        productsElt.innerText = JSON.stringify(product);
        productsElt.appendChild(divElt);
    }
};

(async() => {
    const basket = JSON.parse(locaal.getItem("baskt"));
    displayBasket(basket);
})();
// ---formulaire-------
const guestLocal = JSON.parse(localStorage.getItem("guest"));

const enregistrerFormulaire = document.querySelector("#enregistrer");    
console.log(enregistrerFormulaire);

if(guestLocal != null)
{
    formulaire.style.display ="none";
    thk.textContent = `Merci, ${guestLocal.prenom}.`;   // ok
}
enregistrerFormulaire.addEventListener("click", (event) =>{
    event.preventDefault();
    document.location.reload();

const yourgenre = document.querySelectorAll("input[name = 'genre']"); // recuperer les donnees du formulaire
    for (i = 0; i < yourgenre.length; i++) {
        if (yourgenre[i].checked === true) {
            genre = yourgenre[i].value;
        }
    }

const guest = {
    genre: genre,
    nom: nom.value,
    prenom: prenom.value,
    mail: mail.value
}

localStorage.setItem("guest",JSON.stringify(guest));  // stocker
    
clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();
}

});
