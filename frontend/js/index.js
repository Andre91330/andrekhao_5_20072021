console.log("Largeur de l'écran : " +  window.innerWidth + 'px');
console.log("Chemin du fichier : " + document.documentURI);

// Selectionner par son id
console.log(document.getElementById("Tablebasse"));

// pour garder dans une variables
let tablebasse = document.getElementById('Tablebasse');

// Modifier le contenu du "texte" de id
console.log(tablebasse.innertText);
// Recupere le Html avec
console.log(tablebasse.innerHTML);

// modifier le contenu textuel
tablebasse.innerText = 'Console';
// avec le html
tablebasse.innerHTML = '<em>Console</em>';

//Selectionner par Class


