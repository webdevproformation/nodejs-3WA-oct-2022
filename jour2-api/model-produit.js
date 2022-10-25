const { Schema , model } = require("mongoose");

// schema de notre table (collection produit)
const produit = new Schema({
    nom : {type : String , minlength :5, maxlength : 200 , required : true}, 
    prix : {type : Number , min : 0 , required : true},
    dt_creation : { type : Date , default : Date.now() } ,
    isPublished  : {type : Boolean , default : false}
});

exports.produitModel = model("produits" , produit); 