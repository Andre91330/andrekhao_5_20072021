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
    document.getElementById("nameitem").textContent= article.name
    document.getElementById("price").textContent= displayPrice(article.price) 
    

    for (let i = article.varnish.length; i--;) {                // pour afficher toutes les options
        const varnish = article.varnish[i];
        const option = document.createElement('option');
        option.setAttribute('value', varnish);
        option.innerText = varnish;
        document.querySelector('#varnish').appendChild(option);
    }     
} 

//localStorage.setItem("Article", document.querySelector("#nameitem").value);
// localStorage.setItem("Prix", price.value);
//localStorage.setItem("refProduit", document.querySelector("#furniture").value);

//console.log(document.querySelector("#nameitem").value;

//------Finition
const varnishChoice = document.querySelector("#itemcustumise");

varnishChoice.addEventListener("click", (event) =>{
    event.preventDefault();
    
const yourVarnish = document.querySelectorAll("option"); // recuperer le vernis choisi

    for (i = 0; i < yourVarnish.length; i++) {
        if (yourVarnish[i].selected === true){
            option = yourVarnish[i].value;
        }
    }

//console.log(yourVarnish);     //  ok
 
localStorage.setItem("Finition", option);   // ok   stocker le vernis dans le local storage

});




//-----------------local storage-------
// stocker la recupération des valeurs du formulaire 

 //let custumiseItem = {
//   produitChoisi: article.value,
//   nomProduit: article.nomProduit,
//   tonProduit: tonVernis.value,
//   prix: article.prix/100
//   });     

// localStorage.setItem(clé, valeur)      enregister une valeur dans le storage
// localStorage.getItem(clé)              récupère la valeur de la clé
// localStorage.clear()                   efface le storage



// function valider(){
//     espaceMessage.immerHTML = "Merci du choix de finition";                // message de validation
// }

// function refuser(){
//    alert("Veuillez choisir votre verni");                                 // message de non validation
// }
