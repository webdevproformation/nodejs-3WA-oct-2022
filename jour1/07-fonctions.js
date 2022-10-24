/**
https://formation.webdevpro.net/nodejs
login : nodejs
password : nodejs

=> chapitre Test unitaire
https://formation.webdevpro.net/nodejs/10-test-unit.html

section 6 source lib.js // db.js 

 */

// lib.js
// tester des chiffres 
exports.valeurAbsolu = (chiffre) => {
    if(chiffre > 0) return chiffre ;
    if(chiffre < 0) return -chiffre ;
    return 0
  }
  
  // tester des chaines de caractères
  exports.bonjour = (prenom) => {
    return `Bonjour ${prenom}`;
  }
  
  // tester des tableaux 
  exports.jour = () => {
    return ["lundi", "mardi", "mercredi", "jeudi"];
  }
  
  exports.getArticle = (id) => {
    return {id : id , titre : "Article 1" , contenu : "lorem ipsum"}
  }
  
  exports.creationProfilUtilisateur = (email , password) => {
    if(!email || !password ){
      throw new Error("identifiants manquants");
    }
    return {
        email , 
        password , 
        status : false , 
        dt_creation : Date.now() 
      };
  }
  
  // mock function
  
  const db = require("./db")
  
  // la fonction réduction appel une ressource externe db.getUser()
  exports.reduction = ( obj ) => {
    
    const client = db.getUser( obj.id ) 
  
    if(client.points >= 10){
      obj.prix *= 0.9 ;
    }
  }
  