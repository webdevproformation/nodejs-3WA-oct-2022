const verif = localStorage.getItem("token");

if(verif == null) window.location.href = "/connexion";

// initialiser la date de création à aujourd'hui
document.querySelector("#dt_creation").valueAsDate = new Date()

document.querySelector("form").addEventListener("submit" , e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const values = [...formData.entries()];
    if( values[0][1].length == 0 || values[1][1].length == 0 || values[2][1].length == 0  ) return alert("stop");
    let publie = false ;
    if(values[3]) publie = true;
    const produit = {
        nom : values[0][1],
        prix : parseInt(values[1][1]) ,
        dt_creation : (new Date(values[2][1])).toISOString(),
        isPublished : publie 
    };
    
    const options = {
        method : "POST",
        headers : {
            "Content-type" : "application/json",
            "x-auth-token" : localStorage.getItem("token")
        } ,
        body : JSON.stringify(produit)
    }

    fetch( "https://lit-island-18380.herokuapp.com/new" , options )
            .then(reponse => reponse.json())
            .then((data) => {
               document.querySelector(".message").innerHTML = `<div class="alert alert-success my-3">nouveau produit ajouté en Base de Données</div>`;
               console.log(data);
               const ligne = `
                <tr>
                    <td>${data._id}</td>
                    <td>${data.nom}</td>
                    <td>${data.prix.toFixed(2)} € HT</td>
                    <td>${new Date(data.dt_creation).getDate() + "/" +  (new Date(data.dt_creation).getMonth() + 1) + "/" + new Date(data.dt_creation).getFullYear()}</td>
                    <td>${data.isPublished == true ? "publié" : "non publié"}</td>
                    <td>
                        <a href="/update/${data._id}" class="btn btn-sm btn-warning me-2">update</a>
                        <a href="/delete/${data._id}" class="btn btn-sm btn-danger">delete </a>
                    </td>
                </tr>
               `;
               e.target.reset(); // vider le formulaire 

               document.querySelector("tbody").insertAdjacentHTML("beforeend" , ligne)
               setTimeout(() => {
                document.querySelector(".message").innerHTML = "";
               }, 2000)
            })
            .catch((ex) => {
                console.log("il y a une erreur" , ex);
            });

});

document.querySelectorAll(".suppr").forEach( btn => {
    btn.addEventListener("click" , e => {
        e.preventDefault();
        const id = e.target.href.split("/").at(-1);
        const option = {
            method : "DELETE",
            headers : {
                "x-auth-token" : localStorage.getItem("token")
            }
        }

        fetch(`https://lit-island-18380.herokuapp.com/produit/${id}` , option )
            .then( reponse => reponse.json() )
            .then( () => {
                // sélectionner la balise tr parent du bouton cliqué => supprimer la ligne du tableau
                e.target.closest("tr").remove();
            } ) 
                
    })
})

/* document.querySelectorAll(".update").forEach( btn => {
    btn.addEventListener("click" , e => {
        e.preventDefault();

        const id = e.target.href.split("/").at(-1);
        console.log(id);

    })
}) */

// bon appétit rdv 14h00 !!!!