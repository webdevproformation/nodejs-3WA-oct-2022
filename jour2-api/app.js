
const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.NODE_ENV ? process.env.URL_DB_PROD : process.env.URL_DB_DEV ;

// l'url d'accès à la base de données contient des informations sensibles 
// le mieux est de les stocker dans des variables d'environnement 
// ... => stocker cette valeur dans une variable d'environnement

mongoose.connect( url  , { useNewUrlParser : true} )
        .then( () => console.log("connexion à Atlas MongoDB réussie") )
        .catch(ex => console.log(ex))
