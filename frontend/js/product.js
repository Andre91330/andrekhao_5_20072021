(async function(){
    const articleId = getArticleId()
    console.log(articleId)
    const article = await getArticle(articleId)
    console.log(article)
    hydrateArticle(article)             // on change le contenu du l'article deja existant et non la recrée
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
    document.getElementById("price").textContent= article.price    
}

const espaceMessage = document.getElementById("message");      // element de message
const bouton = document.getElementById("bouton");               // element bouton
const varnishInput = document.getElementById("varnish");             // champs de choix

let varnish;
let varnishsTableau = [];

    for (let varnishTableau of varnishsTableau) {
    console.log(varnishTableau);
    }

    // fonction 
    function getVarnishs() {                         
        const varnish = getVarnishs()           // constantes 
        for (varnish of varnishs) {             // boucle pour crée chaque produits
        displayArticle(varnish)             // affichage des produits
        }
    }

    // fonction de requete et réponse
    function getVarnishs(varnish) {
        fetch(`http://localhost:3000/api/furniture/${varnish}`) // requete vers le lien et reponse
            .then(function(httpResponse) {              // promise 1
                return httpResponse.json()              // type des données de la réponse
            })
            .then(function(varnishs) {                  // promise 2 grace au retour du 1
            return varnishs              
            })
            .catch(function(error) {                    // gestion d'erreur                
                alert(error)
            })
    }

    function displayArticle(){
        const templateVarnish = document.getElementById("templateVarnish")
        const cloneVarnish = document.importNode(templateVarnish.content, true)
    
        cloneVarnish.getElementById("varnish").textContent= article.varnish
    
        document.getElementById("color").appendChild(cloneVarnish)         // creation d'un enfant
    }

function valider(){
    espaceMessage.immerHTML = "Merci du choix de finition";                // message de validation
}

function refuser(){
    alert("Veuillez choisir votre verni");                                 // message de non validation
}
