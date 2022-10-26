const Router = require("express");
const { userModel } = require("./model-user");
const { Types } = require("mongoose");


const router = Router();

router.post("/addUser" , async (req, rep) => {
    let newUser = req.body ;
    newUser = new userModel(newUser)
    newUser = await newUser.save();
    rep.json(newUser); 
})

router.get("/getAll" , async (req, rep) => {
    const users = await userModel.find();
    rep.json(users);
})

router.get("/user/:id" , async (req, rep) => {
    const id = req.params.id ;

    // si id n'est correct => 400 bad Request
    if(!Types.ObjectId.isValid(id)) return rep.status(400).send("id incorrect");

    const userRecherche = await userModel.findById(id);

    // si id est valide mais que l'utilisateur n'existe pas  => 404
    if(userRecherche == null) return rep.status(404).send("utilisateur n'existe pas")

    rep.json(userRecherche);
})

router.post("/connexion" , async (req, rep) => {
    const {email , password } = req.body;
    const userRecherche = await userModel.findOne({email , password})

    if(userRecherche == null) return rep.status(404).send("identifiants invalids ko");

    rep.json({msg : "ok"});
})

// cas pratique :
// au lieu d'avoir un ok => 
// le serveur me retourne un jsonwebtoken en + message ok 
// genérer ce token et le retourner à l'utilisateur 

module.exports = router

