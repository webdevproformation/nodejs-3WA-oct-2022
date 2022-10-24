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

const addUser = (user) => {
    return axios.post("https://jsonplaceholder.typicode.com/users" , user)
           .then(reponse => reponse.data)
}

/* async function postUser(){
    const r = await addUser({nom : "Alain"})
    console.log(r)
}

postUser() */

exports.addUser = addUser;

function getArticles( id , callback ){ // la fonction à tester
    const articles = callback()
    return articles.filter((article) => { return article.id === id })
}

function getAll(){
    return [
        {id : 1 , prix : 10 },
        {id : 2 , prix : 11}
    ]
}

const r = getArticles( 1 , getAll )


exports.getArticles = getArticles ;

const recherche = (nomUserRecherche , callback) => {
    return callback().then(reponse => reponse.filter(user => user.name === nomUserRecherche))
}


//recherche( "Leanne Graham" ,  getUsers).then(resultat => console.log(resultat) )

exports.recherche = recherche ;  



