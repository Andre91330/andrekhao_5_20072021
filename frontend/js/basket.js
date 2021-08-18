const displayBasket = (basket) => {
    document.getElementById("productsNumber").innerText = basket.nbProducts;  
    document.getElementById("totalPrice").innerText = basket.priceTotal; 

let productsElt = '<ul>';
    for (let i = basket.products.length; i--;) {   
        productsElt += `<li>${basket.products}</li>`;
    }
    productsElt += `</ul>`; 
    document.querySelector("#basketProducts").innerHTML = JSON.stringify(basket.products);
    console.log(basket.products);

function displayTotalPrice(totalPrice) {
    return `${(totalPrice/100).toFixed(2)} €`;
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
};

const guest = {
    genre: genre,
    nom: nom.value,
    prenom: prenom.value,
    mail: mail.value
};

// const codePostal = document.querySelector("#codepostal");
//  if (codePostal.length == 5){     
//  }
//};

localStorage.setItem("guest", JSON.stringify(guest));  // stocker
});

clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();
};