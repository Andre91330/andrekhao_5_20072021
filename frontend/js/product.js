(async function(){
    const articleId = getArticleId()
    const article = await getArticle(articleId)
    console.log
    hydrateArticle(article)             // on change le contenu de l'article deja existant et non la recrée
})()

function getArticleId() {
    return new URL(location.href).searchParams.get("id")
}

function getArticle(articleId) {
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

function displayPrice(price) {
    return `${price/100} €`;
}




//--------gestion du panier
// recuperation des donnée selectionné et envoi au panier

// selection de l'id du formulaire      
const varnish = document.querySelector("#varnishchoice");
console.log(varnish);

// selection  du bouton  dans  le dom
//      const envoyerPanier = document.querySelector("#envoyer");

// addEventListener - écouter le bouton et envoyer le panier
//      envoyerPanier.addEventListener("click",(event) =>{
//      event.preventDefault(); 

    // mettre le choix de l'utilisateur dans une variable
//      const choixFormulaire = idForm.value;
// console.log(choixFormulaire);
   
// ------- récupération des valeurs du formulaires
//         let optionsProduit = {
//         nomProduit: idProduitSelectionner.nomProduit,
//         id_ProduitSelectionner: idProduitSelectionner._id,
//         option_produit: choixFormulaire,
//         prix: idProduitSelectionner.prix,
//      };
    // console.log(optionsProduits);
//  });


function valider(){
    espaceMessage.immerHTML = "Merci du choix de finition";                // message de validation
}

function refuser(){
    alert("Veuillez choisir votre verni");                                 // message de non validation
}

//-----------------local storage-------
// stocker la recupération des valeurs du formulaire 