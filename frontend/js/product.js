(async function(){
    const articleId = getArticleId()
    const article = await getArticle(articleId)
    hydrateArticle(article)             // on change le contenu de l'article deja existant et non la recrée
})()

function getArticleId() {
    return new URL(location.href).searchParams.get("id")
}


function getArticle(articleId) {                //affichage du produit (objet) sélectionné par id
    return fetch(`http://localhost:3000/api/furniture/${articleId}`) // requete vers le lien et reponse
    .then(function(httpResponse) {              // promise 1
        return httpResponse.json()              // type des données de la réponse
    })
    .then(function(articles) {                  // promise 2 grace au retour du 1
        return articles              
    })
    .catch(function(error) {                    // gestion d'erreur                
        alert(error)
    })
}

function displayPrice(price) {
    return `${price/100} €`;
}

function hydrateArticle(article) {
    document.getElementById("imageUrl").setAttribute("src", article.imageUrl) // setAttribute ->img
    document.getElementById("description-text").textContent= article.description
    document.getElementById("name").textContent= article.name
    document.getElementById("price").textContent= displayPrice(article.price) 
    

    for (let i = article.varnish.length; i--;) {                // pour afficher toutes les options
        const varnish = article.varnish[i];
        const option = document.createElement('option');
        option.setAttribute('value', varnish);
        option.innerText = varnish;
        document.querySelector('#varnish').appendChild(option);
    }     
} 

const varnishChoice = document.querySelector("#itemcustumise");
   
varnishChoice.addEventListener("click", (event) =>{
    event.preventDefault();
    
const yourVarnish = document.querySelectorAll("#varnish"); // recuperer les donnees du formulaire
    
    for (i = 0; i < varnish.length; i++) {
        if (varnish[i].localName == "select"){
            yourVarnish = varnish[i].value;
        }
    }
    console.log(yourVarnish);

});

// selection du bouton confirmer le produit dans le dom
//const confirmerChoix = document.querySelector("#itemcustumise");
// console.log(confirmerChoix);  

//confirmerChoix.addEventListener("click",(event) =>{     // addEventListener - écouter le bouton et confirmer le panier
//    event.preventDefault();

//const lesVernis = document.querySelector("#varnish");   // selection de l'id du formulaire des vernis   

//console.log(lesVernis);

//const tonVernis = tonVernis.value;                       // selection du choix client




//-----------------local storage-------
// stocker la recupération des valeurs du formulaire 
//let custumiseItem = {
//   produitChoisi: article.value,
//   nomProduit: article.nomProduit,
//   tonProduit: tonVernis.value,
//   prix: article.prix/100
//   });
      


// localStorage.setItem("referenceProduit", document.querySelector("#furniture").value);
// localStorage.setItem("nomProduit", document.querySelector("name").value);
// localStorage.setItem("prixProduit", document.querySelector("price").value);
// localStorage.setItem("vernisproduit", tonVernis.value);


// localStorage.setItem(clé, valeur)      enregister une valeur dans le storage
// localStorage.getItem(clé)              récupère la valeur de la clé
// localStorage.clear()                   efface le storage

// varnishchoice.onclick =() =>{
//  localStorage.setItem("vernischoisi", choice.value);
// }

function valider(){
    espaceMessage.immerHTML = "Merci du choix de finition";                // message de validation
}


function refuser(){
    alert("Veuillez choisir votre verni");                                 // message de non validation
}
