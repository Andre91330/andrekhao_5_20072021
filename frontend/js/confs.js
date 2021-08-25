// formate le prix

function displayPrice(price) {    
    return `${(price/100).toFixed(2)} €`;
}

//function hydrateArticle(article) {
//    document.getElementById("pictureProd").setAttribute("src", article.imageUrl) // setAttribute ->img
//    document.getElementById("description-text").textContent= article.description
//    document.getElementById("nameItem").textContent= article.name
//    document.getElementById("price").textContent= displayPrice(article.price)    
//
//    for (let i = article.varnish.length; i--;) {                // pour afficher toutes les options
//        const varnish = article.varnish[i];
//       const option = document.createElement("option");
//        option.setAttribute("value", varnish);
//        option.innerText = varnish;
//        document.querySelector("#varnish").appendChild(option);
//    }
//}
