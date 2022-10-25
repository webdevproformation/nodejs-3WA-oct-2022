const Router = require("express");
const {produitModel} = require("./model-produit")

const router = Router();

router.get("/" , (req, rep) => {
    rep.json({id : 1 , message : "success"});
})

router.get("/data" , async (req,rep) => {
    const produits = await  produitModel.find(); 
    rep.json(produits); 
});

router.post("/new" , async (req,rep) => {
    let nouveauProduit = req.body ;
    nouveauProduit = new produitModel(nouveauProduit);
    nouveauProduit = await nouveauProduit.save();
    rep.json(nouveauProduit); 
})


// créer la méthode POST via express qui permet de ajouter un nouveau projet dans la collection produits (stockée sur MongoDB Atlas )

module.exports = router