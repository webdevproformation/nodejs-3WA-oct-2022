const Router = require("express");
const { userModel } = require("./model-user");


const router = Router();

router.post("/addUser" , async (req, rep) => {
    let newUser = req.body ;
    newUser = new userModel(newUser)
    newUser = await newUser.save();
    rep.json(newUser); 
})

module.exports = router

