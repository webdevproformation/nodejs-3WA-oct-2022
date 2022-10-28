const { Schema , model } = require("mongoose");
const Joi = require("joi");

// schema de notre table (collection produit)
const produit = new Schema({
    nom : {type : String , minlength :5, maxlength : 200 , required : true}, 
    prix : {type : Number , min : 0 , required : true},
    dt_creation : { type : Date , default : Date.now() } ,
    isPublished  : {type : Boolean , default : false},
    like : { type : Number , min : 0 , default : 0 }
});

// 11 vérifications sur les données envoyés par le client (via PostMan)
const produitValide = Joi.object({
    nom : Joi.string().min(5).max(200).required(),
    prix : Joi.number().greater(0).required(),
    dt_creation : Joi.date().required(),
    isPublished : Joi.boolean().required(),
    like : Joi.number()
})

exports.produitValide = produitValide ;

exports.produitModel = model("produits" , produit); 