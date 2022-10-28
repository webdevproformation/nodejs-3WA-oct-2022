const verif = localStorage.getItem("token");
if(verif == null) window.location.href = "/connexion";

document.querySelector("form").addEventListener("submit" , e => {
    e.preventDefault();
    const id = document.querySelector("#id").value;
    const nom = document.querySelector("#nom").value;
    const prix = document.querySelector("#prix").value;
    const dt_creation = document.querySelector("#dt_creation").value;

    if( id.length == 0 || nom.length == 0 || prix.length == 0 || dt_creation.length == 0 ) return alert("stop");
    const formData = new FormData(e.target);
    const values = [ ...formData.entries() ];
    let publie = false ;
    if(values[4]) publie = true ;
    
    const produitMisAjour = {
        nom  :nom ,
        dt_creation : new Date(dt_creation).toISOString() ,
        isPublished : publie,
        prix : parseInt(prix)
    };

    const option = {
        method : "PUT",
        headers : {
            "Content-type" : "application/json",
            "x-auth-token" : localStorage.getItem("token")
        },
        body : JSON.stringify(produitMisAjour)
    };

    fetch( `https://lit-island-18380.herokuapp.com/produit/${id}` ,  option)
        .then(reponse => reponse.json())
        .then(console.log)

});