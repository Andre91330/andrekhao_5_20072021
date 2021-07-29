monStokage = localStorage;

fetch("http://localhost:3000/api/furniture")
    .then(function(httpResponse) {
        if (httpResponse.ok) {
            return httpResponse.json();
        }
    })
    .then(function(articles) {
        console.log(articles);
    })

    .catch(function(error) {
     alert(error)
    });



