document.querySelector("form").addEventListener("submit" , e => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if(email.length == 0 || password.length == 0) return alert("stop")

    const options = {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        } ,
        body : JSON.stringify({ email , password })
    }

    fetch( "https://lit-island-18380.herokuapp.com/connexion" , options )
            .then(reponse => reponse.json())
            .then(({token}) => {
                
                localStorage.setItem("token" , token)
            })
            .catch((ex) => {
                console.log("il y a une erreur" , ex);
            })
})