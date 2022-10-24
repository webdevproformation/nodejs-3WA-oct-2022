// les tests unitaires tester une fonction SANS ses dépendances 

// fonctions qui dépendent d'une autre fonction 

// axios ??? 
// npm i axios

const axios = require("axios");

const getUsers = () => { // tester la fonction getUsers MAIS SANS ses dépendances ?? 
// jest dispose de fonction de simultation 
// la fonction va être simulée 
    // jsonplaceholder
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then( users => users.data );
   
}

/* async function getU(){
    const r = await getUsers()
    console.log(r)
} 
getU() */

exports.getUsers = getUsers;
