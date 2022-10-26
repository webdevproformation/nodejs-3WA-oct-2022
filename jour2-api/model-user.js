const { Schema , model } = require("mongoose");
const jwt = require("jsonwebtoken")
require("dotenv").config();

const user = new Schema({
    pseudo : { type : String , minlength : 5 , maxlength : 200 , required : true },
    email : { type : String , minlength : 5 , maxlength : 200 , required : true },
    password  : { type : String , minlength : 5 , maxlength : 200 , required : true }
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