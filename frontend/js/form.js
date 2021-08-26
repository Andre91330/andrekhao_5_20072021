// clear
clear.onclick = () =>{
    localStorage.clear();
    document.location.reload();
};


// genre



// basket debut
//const confirmCommande = document.querySelector("#order"); 
const data = JSON.parse(localStorage.getItem("contact"));

const confirmCommande = document.querySelector("#order");    

confirmCommande.addEventListener("click", (event) =>{
    event.preventDefault();
    document.location.reload();
};

const yourgenre = document.querySelectorAll("input[name = 'genre']"); // recuperer les donnees du formulaire
    for (i = 0; i < yourgenre.length; i++) {
        if (yourgenre[i].checked === true) {
            genre = yourgenre[i].value;
        }
    };


// input

const data = {
    contact: {                              // a modifier 'string'
        firstName: prenom.value,
        lastName: nomClient.value,
        address: rue.value,
        city: ville.value,
        email: mail.value
        },   
    }

localStorage.setItem("contact", JSON.stringify(data));  // stocker
});



// checkinput
const buildContactData=() =>{
    //        check sur les input
        const checkForm =() => {
            const checkFirstName = checkValid("")
            const checkLastName = checkValid("")
            const checkAddress = checkValid("")
            const checkCity = checkValid("")
            const checkEmail= checkEmail("")
        
            if(!checkFirstName) return 'firstName';
            if(!checkLastName) return 'lastName';
            if(!checkAddress) return 'address';
            if(!checkCity) return 'city';
            if(!checkEmail) return 'email';      
        }
    //      si tout est valid
        return {
