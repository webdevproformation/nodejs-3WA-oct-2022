const express = require("express");

const path = require("path");

module.exports = function(app){

    // paramètrage de pug 
    app.set("views" , path.join(__dirname , "views"))
    app.set("view engine" , "pug");
    app.set("view cache" , process.env.NODE_ENV === "production");
    // fichier css / js / image .. public
    app.set(express.static(path.join(__dirname , "public")))

    // fin des paramètrages de pug 

    app.get("/" , (req, rep) => {
        rep.render("index")
    })

}