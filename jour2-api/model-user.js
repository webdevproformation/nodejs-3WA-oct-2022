const { Schema , model } = require("mongoose");

const user = new Schema({
    pseudo : { type : String , minlength : 5 , maxlength : 200 , required : true },
    email : { type : String , minlength : 5 , maxlength : 200 , required : true },
    password  : { type : String , minlength : 5 , maxlength : 200 , required : true }
});


exports.userModel = model("users" , user);