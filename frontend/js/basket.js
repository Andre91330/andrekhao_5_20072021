// localStorage.setItem("clé", "valeur")
// localStorage.getItem("clé")
// localStoragr.clear();
const itemlocal = JSON.parse(localStorage.getItem("guest"));

const enregistrerFormulaire = document.querySelector("#enregistrer");    
console.log(enregistrerFormulaire);

if(itemlocal != null)
{
    formulaire.style.display ="none";
    thk.textContent = `Merci, ${itemlocal.prenom}.`;   // ok
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
