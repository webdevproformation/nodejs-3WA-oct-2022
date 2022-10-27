const express = require("express");

const path = require("path");
const axios = require("axios");

module.exports = function(app){

    // paramètrage de pug 
    app.set("views" , path.join(__dirname , "views"))
    app.set("view engine" , "pug");
    app.set("view cache" , process.env.NODE_ENV === "production");
    // fichier css / js / image .. public
   // console.log(path.join(__dirname , "public"))
    app.use(express.static( path.join(__dirname , "public")))
    // fin des paramètrages de pug 

    app.get("/" , (req, rep) => {
        rep.render("index")
    })
    app.get("/creer-user" , (req, rep) => {
        rep.render("creer-user")
    })
    app.get("/connexion" , (req, rep) => {
        rep.render("connexion")
    })

    app.get("/deconnexion" , (req, rep) => {
        rep.render("deconnexion")
    })

    app.get("/admin" , (req , rep) => {
        axios.get("https://lit-island-18380.herokuapp.com/data")
            .then(({data}) => {
                rep.render("admin" , { catalogue : data })
            })
    })


    // créer une autre page créer de profil utilisateur
    // page vous avez un formulaire 
    // 3 champs 
    // pseudo
    // email
    // password 
    // vérifier que tous les champs sont bien remplis 
    // requête ajax vers l'api que l'on créé via un fetch()
    // https://lit-island-18380.herokuapp.com/addUser
    // go


}