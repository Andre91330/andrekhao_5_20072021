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
    
    for (let i = article.varnish.length; i--;) {
        const varnish = article.vanish[i];
        const option = document.createElement('option');
        option.setAttribute('value', varnish);
        option.innerText = varnish;
        document.querySelector("#varnish").appendChild(option);
    }
}


function valider(){
    espaceMessage.immerHTML = "Merci du choix de finition";                // message de validation
}

function refuser(){
    alert("Veuillez choisir votre verni");                                 // message de non validation
}
