// fonction 
function getVarnishs() {                         
    const varnish = getVarnishs()           // constantes 
    for (varnish of varnishs) {             // boucle pour crée chaque produits
        displayArticle(varnish)             // affichage des produits
    }
}

// fonction de requete et réponse
function getVarnishs() {
    fetch(`http://localhost:3000/api/furniture/${varnishId}`) // requete vers le lien et reponse
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

function displayArticle(varnish){
    const templateVarnish = document.getElementById("templateVarnish")
    const cloneVarnish = document.importNode(templateVarnish.content, true)
    
    cloneVarnish.getElementById("varnish").textContent= article.varnish
    
    document.getElementById("color").appendChild(cloneVarnish)         // creation d'un enfant
}