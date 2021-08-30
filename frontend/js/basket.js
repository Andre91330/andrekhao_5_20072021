const displayBasket = (basket) => {
    document.getElementById("productsNumber").innerText = basket.nbProducts;  
    document.getElementById("totalPrice").innerText = displayPrice(basket.priceTotal); 

    const productsEltName = document.querySelector(".finalItem");
        for (let i = basket.products.length; i--;) {       
            const productName = basket.products[i].name        
            let trElt = document.createElement("tr"); 
            trElt.innerText = `${productName}, ${basket.products[i].varnish} :`;
            productsEltName.appendChild(trElt);
            console.log(productName);
        }

    const productsEltPrice = document.querySelector(".unitPrice");
        for (let i = basket.products.length; i--;) {       
            const productPrice = basket.products[i].price        
            let trElt = document.createElement("tr"); 
            trElt.innerText = displayPrice(productPrice);
            productsEltPrice.appendChild(trElt);
            console.log(productPrice);
        }
    
    function displayPrice(price) {        
        return `${(price/100).toFixed(2)} €`;
        } 
};

clearBasket.onclick = () =>{
    localStorage.clear();
    document.location.reload();
};

// ---formulaire-------

const buildContactData = () =>{                       // creation du data client

    const sendGuestValidToLocalStorage = () => {    
    
        const displayLastNameToUpperCase = (lastName) => {
            let lastNameToUpperCase = null;
            try {
                lastNameToUpperCase = lastName.toUpperCase ();
            } catch (error) {
                console.error(error);
            } finally {
                return lastNameToUpperCase;
            }
        }

        const displayFirstNameToCapitalize = (firstName) => {
            let firstNameToCapitalize = null;
            try {
                firstNameToCapitalize = firstName.toCapitalize ();
            } catch (error) {
                console.error(error);
            } finally {
                return firstNameToCapitalize;
            }
        }
    };

    return {
        lastName: document.querySelector("#nomClient").value,
        firstName: document.querySelector("#prenom").value,
        address: document.querySelector("#adresse").value,
        city: document.querySelector("#ville").value,
        email: document.querySelector("#mail").value,
    };
                    
    localStorage.setItem('contact',JSON.stringify(sendGuestValidToLocalStorage));
          
    const guestValid = document.querySelector('#guest');
    guestValid.addEventListener('click', sendGuestValidToLocalStorage);
    };


const buildProductsData = (basket) => {
    const ids = [];
    for (let i = basket.products.length; i--;) {
        ids.push(basket.products[i]._id);
    }
    return ids;
}
// const buildObjetsForOrder = (basket) => basket.products.map(product => product_id);

const buildObjectsForOrder = (basket) => {
    const contact = buildContactData();
    const products = buildProductsData(basket);
    return {
        contact: contact,
        products: products,
    };   
};

// a modifier
(() => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    displayBasket(basket);
  
    const data = buildObjectsForOrder(basket);

    const sendOrder = () => {
//       console.log(data);
        fetch("http://localhost:3000/api/furniture/order", {
            method: "post",
            body: JSON.stringify(data)
        })
            .then(function (httpResponse) {
                return httpResponse.json();
        })
            .then(function (order) {
            localStorage.setItem('order', JSON.stringify(order));
            localStorage.removeItem('basket');
            location.replace('/home/order.html');
                return order;
        })
            .catch(function (error) {
                alert(error);
        });
    };

    const btn = document.querySelector('#sendOrder');
    btn.addEventListener('click', sendOrder);
})();