
// basket debut
//const confirmCommande = document.querySelector("#order"); 
//   const data = JSON.parse(localStorage.getItem("contact"));

//    const confirmCommande = document.querySelector("#order");    

//    confirmCommande.addEventListener("click", (event) =>{
//        event.preventDefault();
//        document.location.reload();
//  };


    // checkinput
//   
//           
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
     

//        const displayFirstNameToCapitalize = (firstName) => {
//            let firstNameToCapitalize = null;
//            try {
//                firstNameToCapitalize = firstName.toCapitalize ();
//            } catch (error) {
//                console.error(error);
//            } finally {
//                return firstNameToCapitalize;
//            }
//        }
//        console.log(firstName);

    
const guestDetails = document.querySelector("#guest"); 
    guestDetails.addEventListener("submit", function(){
    var validDetails = true;
        for(let input of document.querySelectorAll(".contactDetails input")){
            valid &= input.reportValidity();
            if(!validDetails){
                break;
            }
        }
       if(validDetails){ 
        alert("Merci, vos coordonnées ont bien été prises en compte.");
        }
        localStorage.setItem("contactDetails", JSON.stringify(contactDetails));
        console.log(contactDetails);
    });

 
    return {
        lastName: document.querySelector("#lastName").value,
        firstName: document.querySelector("#firstName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }

    const contact = {
        lastName: lastName.value,
        firstName: firstName.value,
        address: address.value,
        city: city.value,
        email: email.value
    } 
    localStorage.setItem("contact", JSON.stringify(contact));
    document.location.reload();

    return {
        lastName: document.querySelector("#lastName").value,
        firstName: document.querySelector("#firstName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }
