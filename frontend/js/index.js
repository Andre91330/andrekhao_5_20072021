// fonction permettant de se lancer seul
(async function() {                                                                 // async pour attendre les reponse des promises
    const articles = await getArticles()    // constantes + et attente des reponses
    for (article of articles) {             // boucle pour crée chaque produits
        displayArticle(article)             // affichage des produits
    }
})()

// fonction de requete et réponse
function getArticles() {
    return fetch("http://localhost:3000/api/furniture")                             // requete vers le lien et reponse
        .then(function(httpResponse) {                                              // promise 1
            return httpResponse.json()                                              // type des données de la réponse
        })
        .then(function(articles) {                                                  // promise 2 grace au retour du 1
            return articles              
        })
        .catch(function(error) {                                                    // gestion d'erreur                
            alert(error)
        })
}

// fonction d'affichage des articles
function displayArticle(article) {
    const templateItem = document.getElementById("templateArticle")
    const cloneItem = document.importNode(templateItem.content, true)
    
    cloneItem.getElementById("picture").setAttribute("src", article.imageUrl),     // setAttribute ->img
    cloneItem.getElementById("nameItem").textContent= article.name,
    cloneItem.getElementById("price").textContent= displayPrice(article.price),
    cloneItem.getElementById("productLink").href += `?id=${article._id}`,          // recuperation/id
    
    document.getElementById("furniture").appendChild(cloneItem)                    // creation d'un enfant
}

function displayPrice(price) {                                                     // format d'affichage du prix
    return `${(price/100).toFixed(2)} €`;
}