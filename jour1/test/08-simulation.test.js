const axios = require("axios");
const { getUsers , addUser , getArticles , recherche } = require("../08-simulation");
jest.mock("axios"); // simuler 
// utilise plus la librairie qui est dans node_modules
// jest => permettre de simuler les fonctionnalités de axios
it("recupérer des utilisateurs" , () => {
    const users = [
        {id : 1 , nom : "Alain"},
        {id : 2 , nom : "Benoit"}
    ];
    axios.get.mockResolvedValue({data : users});
    return getUsers().then(data => {
        //console.log(data);
        expect(data).toEqual(users)
    } 
    );
})

// créer fonction dans le fichier 08-simulation qui réalise un post via axios 
// postman ??
// simuler un client http 
// https://www.postman.com/
// POST dans le body {nom : "nouveau"}
// serveur répondre {id : 11 , nom : "nouveau"}

// dans le fichier de test réaliser une simulation de la méthode post de axios pour récupérer une réponse 

it("simuler la méthode post de axios" , () => {
    const reponseSimulee = { message : "ok"}
    axios.post.mockResolvedValue({ data : reponseSimulee })

    addUser({nom : "Alain"}).then( reponse => {
        console.log(reponse);
        expect(reponse).toEqual(reponseSimulee)
    }  )
})

it("test une fonction avec une dépendance en callback", () => {

    const simulatioCallBack = jest.fn() // créer une fonction vide
    // définir son nom 
    const valeur = [{id:3}]
    simulatioCallBack.mockReturnValue(valeur); // ce quelle retourne 

    expect(getArticles( 3 , simulatioCallBack )).toEqual(valeur);
});

// cas pratique 
// créer une fonction qui contient 2 paramètres
// string // callback
// terme que va rechercher 
// une du des fonctions que l'on créé précédemment => getUsers
// la fonction permet de filtrer parmis les résultats l'utilisateur avec le nom recherché

// réaliser une fonction de test qui va permettre de tester la fonction de recherche et qui simule le callback de cette fonction

it("tester la fonction recherche avec une mock function" , () => {

    const getDataSimuluation = jest.fn();
    const users = [
        {id : 1 , name : "Alain"},
        {id : 2 , name : "Benoit"},
    ];
    getDataSimuluation.mockReturnValue(Promise.resolve(users));

    expect(recherche("Alain" , getDataSimuluation)).toEqual(users[0]);
})



