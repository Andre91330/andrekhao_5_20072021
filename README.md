# andrekhao_5_20072021
projet OrinoSweetHome

Création d'un MVP pour montrer le fonctionnement d'une application de commande en ligne.
Réalisation du front-end, en collaboration avec Jeanne qui s'occupait de la partie back-end.

Contraintes :
    - technologies à utiliser : HTML, CSS, JS
    - API : http://localhost:3000/api/furniture
    
Lancement du MVP : 
    - Node et npm doivent être installés localement sur votre machine.
    - Front-end :
        Cloner le repository à partir du projet sur VSCode.
        Ouvrir le fichier index.HTML ou lance le serveur via l'extension Go Live de VSCode.
    - Back-end :  https://github.com/OpenClassrooms-Student-Center/JWDP5.git 
        Cloner le repository à partir du projet, executez npm install. 
        Vous pouvez ensuite exécuter le serveur avec node server. 
        Le serveur doit s'exéuter sur localhost avec le port par défaut 3000. 
        Si le serveur s'exécute sur un autre port pour une raison quelconque, ceci sera affiché sur la console lorsque le serveur démarre, par exemple "Listening on port 3001".
        


------------------------------------------------

Page "d'accueil" :
    Affichage de tous les produits en lignes
        (Visuel, Nom et Prix).

Page "produits" :
    Affichge du produit sélectionné afin de choisir sa finition
        (Visuel, Nom, Prix, Description et choix du verni).
    
Page "panier" :
    Récapitulatif des produits choisis
        - Produit unitaire : nom et prix ;
        - totaux : articles et montant ;
    Formulaire de récupération des coordonnées client
        - Contrôle des saisies avant validation du panier.

Page de "confirmation de commande" :
        - Remercier le client ;
        - Identifiant de la commande ;
        - Récapitulatifs des articles 
            (Détails, cumul et Montant à régler).