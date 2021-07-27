(async function() {
    const articles = await getArticles()
    for (article of articles) {
        displayArticle(article)
    }
})()

function getArticles() {
    return fetch("http://localhost:3000/api/furniture")
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(articles) {
            return articles              
        })
        .catch(function(error) {
            alert(error)
        })
}

function displayArticle(article) {
    const templateItem = document.getElementById("templateArticle")
    const cloneItem = document.importNode(templateItem.content, true)
    
    cloneItem.getElementById("imageUrl").textContent = article.imageUrl
    cloneItem.getElementById("name").textContent = article.name
    cloneItem.getElementById("price").textContent = article.price

    document.getElementById("furniture").appendChild(cloneItem)
}