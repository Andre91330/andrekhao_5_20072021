const getArticleId =  function () {
   return new URL(location.href).searchParams.get("id")     
}

const getArticle = function (articleId) {                //affichage du produit (objet) sélectionné par id
    return fetch(`http://localhost:3000/api/furniture/${articleId}`) // requete vers le lien et reponse
    .then(function(httpResponse) {                      // promise 1
        return httpResponse.json()                      // type des données de la réponse
    })
    .then(function(articles) {                          // promise 2 grace au retour du 1
        return articles              
    })
    .catch(function(error) {                            // gestion d'erreur                
        alert(error)
    })
}

function displayPrice(price) {
    return `${(price/100).toFixed(2)} €`;
}

function hydrateArticle(article) {
    document.getElementById("pictureProd").setAttribute("src", article.imageUrl) // setAttribute ->img
    document.getElementById("description-text").textContent= article.description
    document.getElementById("nameItem").textContent= article.name
    document.getElementById("price").textContent= displayPrice(article.price)    

    for (let i = article.varnish.length; i--;) {                                // pour afficher toutes les options
        const varnish = article.varnish[i];
        const option = document.createElement("option");
        option.setAttribute("value", varnish);
        option.innerText = varnish;
        document.querySelector("#varnish").appendChild(option);
    }
}

const getBasketFromLocalStorage = () => {                                       // basket nb produit, total prix
    let basket;
    if(localStorage.getItem("basket")) {
        basket = JSON.parse(localStorage.getItem("basket"));
    } else {
        basket = {
            nbProducts : 0,
            priceTotal: 0,
            products: [],
        };
    }
    return basket;
};

const setBasketInLocalStorage = (article, basket) => {                          // mis en LS des produits + finition
    article.varnish = document.querySelector("#varnish").value;
    basket.nbProducts ++ ;
    basket.priceTotal += article.price;
    basket.products.push(article);
    localStorage.setItem("basket", JSON.stringify(basket));
}

(async function () {
    const articleId = getArticleId();                                          // affichage du produit
    const article = await getArticle(articleId);
    hydrateArticle(article); 

    const handleAddToBasket = () => {                                           // report du produit fini au panier
        const basket = getBasketFromLocalStorage();
        setBasketInLocalStorage(article, basket);
        location.replace("../home/basket.html");  // 
    };

    const addToBasket = document.querySelector("#sendBasket");                  // declancheur d'evenement
    addToBasket.addEventListener("click",handleAddToBasket);
})();

