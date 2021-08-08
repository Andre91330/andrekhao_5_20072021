// localStorage.setItem("clé", "valeur")
// localStorage.getItem("clé")
// localStoragr.clear();

let enregistrerFormulaire = document.querySelector("button");    
console.log(enregistrerFormulaire);

enregistrerFormulaire.addEventListener("click", () =>{
// recuperer les donnees du formulaire
    let genre = document.querySelectorAll("input[name = 'genre']");

for (i = 0; i < genre.length; i++) {
    if (genre[i].checked === true) {
        leGenre = genre[i].value;
    }
}

// stocker le saisie dans le local storage

localStorage.setItem("genre", leGenre);
localStorage.setItem("nom", nom.value);
localStorage.setItem("prenom", prenom.value);
localStorage.setItem("mail", mail.value);

// récupérer et afficher les donées sur la page Web

console.log(document.querySelector("nom"));

});