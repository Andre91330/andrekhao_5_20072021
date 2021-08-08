// localStorage.setItem("clé", "valeur")
// localStorage.getItem("clé")
// localStoragr.clear();

const enregistrerFormulaire = document.querySelector("button");    
console.log(enregistrerFormulaire);

enregistrerFormulaire.addEventListener("click", () =>{

const genre = document.querySelectorAll("input[name = 'genre']"); // recuperer les donnees du formulaire

for (i = 0; i < genre.length; i++) {
    if (genre[i].checked === true) {
        leGenre = genre[i].value;
    }
}

localStorage.setItem("genre", leGenre);                         // stocker le saisie dans le local storage
localStorage.setItem("nom", nom.value);
localStorage.setItem("prenom", prenom.value);
localStorage.setItem("mail", mail.value);

console.log(document.querySelector("nom"));                     // récupérer et afficher les donées sur la page Web
});