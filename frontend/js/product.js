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

// selection du bouton confirmer le produit dans le dom
const confirmerChoix = document.querySelector("#varnish");
console.log(confirmerChoix);   // ok

// Memoriser le choix
const tonVernis = confirmerChoix.value;
 

for (i = 0; i< choice.length ; i++) {
   if (choice[i].checked === true) {
       tonVernis = choice[i].value;
    }    
};
console.log(tonVernis); 

// addEventListener - écouter le bouton et confirmer le panier
//confirmerChoix.addEventListener("click",(event) =>{
//    event.preventDefault();
//});

      
// ------- récupération des valeurs du formulaire
//let custumiseItem = {
//   produitChoisi: article.value,
//   nomProduit: article.nomProduit,
//   tonProduit: tonVernis.value,
//   prix: article.prix/100
//};

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

//-----------------local storage-------
// stocker la recupération des valeurs du formulaire 