const { Schema , model } = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken")
require("dotenv").config();

const user = new Schema({
    pseudo : { type : String , minlength : 5 , maxlength : 200 , required : true },
    email : { type : String , minlength : 5 , maxlength : 200 , required : true },
    password  : { type : String , minlength : 5 , maxlength : 200 , required : true }
});

const userJoiSchema = Joi.object({
    pseudo : Joi.string().min(5).max(200).required(),
    email : Joi.string().email({ tlds: { allow: false } }).required(),
    password :Joi.string().min(5).max(200).required()
});

// ajouter sur notre schéma un nouvelle méthode qui va permettre de générer un jwt pour l'utilisateur concerné

// attention il faut utiliser function(){ } et non une () => {}
// this 
user.methods.genererJWT = function(){
    const payload = {
        _id : this._id ,
        email : this.email ,
        pseudo : this.pseudo
    };
    const token = jwt.sign(payload , process.env.JWT);
    return token ; 
}


exports.userModel = model("users" , user);
exports.userJoiSchema = userJoiSchema ;