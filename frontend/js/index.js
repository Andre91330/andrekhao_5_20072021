// manipulation du DOM

furniture()
// code de base des le chargement
function furniture() {
    const articles = getArticles()
    displayArticles(articles)
}

//promesse
function getArticles(){
    fetch("http://localhost:3000/api/furniture")
        .then(function(httpBodyResponse){
            return httpBodyResponse.json()      //transform en json
        })
        .then(function(articles){
            console.log(articles)               //verifie que ca fonctionne bien
        })
}

function displayArticles() {
    return ""
}