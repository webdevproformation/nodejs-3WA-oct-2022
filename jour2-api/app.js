const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.NODE_ENV == "prod" ? process.env.URL_DB_PROD : process.env.URL_DB_DEV ;

const PORT = process.env.NODE_ENV == "prod" ? process.env.PORT : 3210 ; // déploiement hébergeur heroku
mongoose.connect( url  , { useNewUrlParser : true} )
        .then( () => console.log("connexion à Atlas MongoDB réussie") )
        .catch(ex => console.log(ex))

const app = express();
// middleware
app.use(express.json()); // mettre cette ligne AVANT l'appel de toutes les routes
app.use("/" , require("./route.js"));
app.use("/" , require("./route-user.js"));

const server = app.listen(PORT , () => console.log(`le serveur express écoute sur le port ${PORT}`))

module.exports = server ; // pour pouvoir réaliser des tests d'intégation 

// créer un fichier route.js 
// appeler comme middleware 
// contenir une méthode get => retourner l'objet suivant { id : 1 , message : "success" }