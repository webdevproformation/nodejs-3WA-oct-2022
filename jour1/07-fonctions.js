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
  
  // const db = require("./db")
  
  // la fonction réduction appel une ressource externe db.getUser()
  exports.reduction = ( obj ) => {
    
    const client = db.getUser( obj.id ) 
  
    if(client.points >= 10){
      obj.prix *= 0.9 ;
    }
  }
  

exports.exo4 = (max) => {
    return [1,2,3,4].filter((item) => item >= max )
}

exports.getArticles = (id) => {
    const data =  [
        {id : 1 , titre : "Article 1" , contenu : "lorem ipsum"},
        {id : 2 , titre : "Article 2" , contenu : "lorem ipsum"},
        {id : 3 , titre : "Article 3" , contenu : "lorem ipsum"},
    ]
    let resultat = data.filter( article  => article.id === id) ;
    return resultat.length === 1 ? resultat[0] : {} ;
}

exports.connexion = function(login , password){
    if(!login || !password  ) throw new Error("erreur 401");
    if(login != "azerty" || password != "123456") throw new Error("erreur 404");
    return `Welcome ${login}`; 
}