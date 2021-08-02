// fonction permettant de se lancer seul
(async function() {                         // async pour attendre les reponse des promises
    const articles = await getArticles()    // constantes + et attente des reponses
    for (article of articles) {             // boucle pour crée chaque produits
        displayArticle(article)             // affichage des produits
    }
})()

// fonction de requete et réponse
function getArticles() {
    return fetch("http://localhost:3000/api/furniture") // requete vers le lien et reponse
        .then(function(httpResponse) {              // promise 1
            return httpResponse.json()              // type des données de la réponse
        })
        .then(function(articles) {                  // promise 2 grace au retour du 1
            return articles              
        })
        .catch(function(error) {                    // renvoi d'erreur                
            alert(error)
        })
}

// fonction d'affichage des articles
function displayArticle(article) {
    const templateItem = document.getElementById("templateArticle")
    const cloneItem = document.importNode(templateItem.content, true)
    
    cloneItem.getElementById("imageUrl").setAttribute("src", article.imageUrl) // setAttribute ->img
    cloneItem.getElementById("name").textContent= article.name
    cloneItem.getElementById("price").textContent= article.price
  

    document.getElementById("furniture").appendChild(cloneItem)         // creation d'un enfant
}


//  let price = 'article.price';
// function number() {
//   return Number.parseFloat(${price}).toFixed(2);
// }
//   console.log(`Prix : + number + €`);  // expected output: "xx.xx €"/






