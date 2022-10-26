const express = require("express");
const PORT = process.env.NODE_ENV == "production" ? process.env.PORT : 3211
const app = express();

require("./route")(app); // appeler le fichier route qui retourne une fonction que l'on exécute en lui passant l'application 

app.listen(PORT , () => console.log(`le serveur express écoute sur le port ${PORT}`))
