// clear
//   clear.onclick = () =>{
//        localStorage.clear();
//        document.location.reload();
//    };


// genre



// basket debut
//const confirmCommande = document.querySelector("#order"); 
//   const data = JSON.parse(localStorage.getItem("contact"));

//    const confirmCommande = document.querySelector("#order");    

//    confirmCommande.addEventListener("click", (event) =>{
//        event.preventDefault();
//        document.location.reload();
//  };


//    const data = {
//        contact: {                              // a modifier 'string'
//            firstName: prenom.value,
//            lastName: nomClient.value,
//            address: rue.value,
//            city: ville.value,
//            email: mail.value
//            },   
//        }

//    localStorage.setItem("contact", JSON.stringify(data));  // stocker
//    });



    // checkinput
//   
//            const checkForm =() => {
//                const checkFirstName = checkValid("")
//                const checkLastName = checkValid("")
//                const checkAddress = checkValid("")
//                const checkCity = checkValid("")
//                const checkEmail= checkEmail("")
            
 //               if(!checkFirstName) return 'firstName';
 //               if(!checkLastName) return 'lastName';
 //               if(!checkAddress) return 'address';
 //              if(!checkCity) return 'city';
 //               if(!checkEmail) return 'email';      
 //           }
        //      si tout est valid
 //           return {
 //               const guestValid = document.querySelector('#guest');
 //               guestValid.addEventListener('click', sendGuestToLocalStorage);
 //               var checkValid = true;
 //                   for(let input of document.querySelectorAll(".coordonnees input")){
 //                   checkValid &= input.reportValidity();
 //                       if(!checkValid) {
 //                           break;
 //                       } 
 //                   }  
//       }

//    constructor(newGuest){
//        if(!this.validNewGuest(newGuest)) throw "argument 'objet' de la classe n'est pas valide";
//        object.assign(this, newGuest);
//    };

//    validNewGuest(newGuest){
//        if(!(typeof newGuest === 'object') || newGuest === null);
//            return false;
//    };

// const buildContactData = () =>{
 //   class contact {
 //       firstName = '';
 //       lastName = '';
 //       address = '';
 //       city = '';
 //       email = '';
 //   }


// localStorage.setItem("lastName". lastName.value);
// localStorage.setItem("firstName", firstName.value);
// localStorage.setItem("address", address.value);
// localStorage.setItem("city", city.value);
// localStorage.setItem("email", email.value);
// merci.textContent = `Merci  ${localStorage.getItem("prenom")}, vos coordonnées ont bien été prises en compte.`;


//  /_\return {
//    lastName: document.querySelector("#nomClient").value,
//    firstName: document.querySelector("#prenom").value,
//    address: document.querySelector("#adresse").value,
//    city: document.querySelector("#ville").value,
//    email: document.querySelector("#mail").value,
//};

//       postContact();
//            {
//            return {
//                lastName : this.lastName,
//                firstName : this.firstName,
//                address : this.address,
//                city : this.city,
//            email : this.email
//            }       