const axios = require("axios");
const { getUsers , addUser } = require("../08-simulation");
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


