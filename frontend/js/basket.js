// localStorage.setItem("clé", "valeur")
// localStorage.getItem("clé")
// localStoragr.clear();

if(localStorage.getItem("prenom") != null)
    merci.textContent = `Merci, pour votre enregistrement ${localStorage.getItem("prenom")}.`;


enregistrer.onclick = () =>{
    localStorage.setItem("nom", nom.value);
    localStorage.setItem("prenom", prenom.value);
    localStorage.setItem("mail", mail.value);
    document.location.reload();
}

