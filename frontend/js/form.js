// verifications
const displayNameToUpperCase = (nomClient) =>{
     let nameToUpperCase = null;
    try{
        nameToUpperCase = nomClient.toUpperCase(); 
    } catch (error) {
        console.error(error);
    } finally {
        return nameToUpperCase;
    }
}


const veriyString = (nomClient) => {    
    if (!nomClient) return false;
    const nameToUpperCase = displayNameToUpperCase(nomClient);
    return nameToUpperCase;  
}


const displayCodePostal = (codePostal) => {
    if (!codePostal) return false;
    valideCodePostal = displayCodePostal(codePostal);
    return valideCodePostal;
}


// creation d'un objetclient
class Client {
    constructor(nom, prenom, adresse, adresse2, codePostal, ville, email) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.adresse2 = adresse2;
        this.codePostal = codePostal;
        this.ville = ville;
        this.email = mail;
    }
}

