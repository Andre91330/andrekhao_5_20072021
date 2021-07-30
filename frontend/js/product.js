(async function() {                     // recupere id d'entree dans l'url - puis fetch l'article
    const articleId = getArticle()
    const article = getArticle(articleId)  // fecht
    hydrateArticle(article)                // hydrate car on change le contenu
})()

function getArticleId() {
    return new URL(location.href).searchParams.get("id")
}

function getArticle(articleId) {
}

function hydrateArticle(article) {
}






