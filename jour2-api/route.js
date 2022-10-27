const Router = require("express");
const {produitModel , produitValide} = require("./model-produit");
const {Types} = require("mongoose")
const auth = require("./autorisation")

const router = Router();

router.get("/" , (req, rep) => {
    rep.json({id : 1 , message : "success"});
})

router.get("/data" , async (req,rep) => {
    const produits = await  produitModel.find(); 
    rep.json(produits); 
});

router.post("/new" , auth , async (req,rep) => {
    let nouveauProduit = req.body ;
    // avant d'insérer les données dans la collection produit
    // effectuer des vérifications 
    const { value , error } = produitValide.validate(nouveauProduit , {abortEarly : false})
    // si des valeurs transmises dans le client ne sont pas conforme => STOP 
    if(error) {
        let message = [];
        error.details.forEach((erreur) => {
            message.push(erreur.message)
        })
        return rep.status(400).json(message);
    }
    // sinon => effectue l'INSERTION dans la collection produit 
    nouveauProduit = new produitModel(nouveauProduit);
    nouveauProduit = await nouveauProduit.save();
    rep.json(nouveauProduit); 
});


router.get("/produit/:id" , async (req, rep) => {
    const id = req.params.id ;
    if(!Types.ObjectId.isValid(id)) return rep.status(400).send("id du produit invalid");
    // vérifier que l'id est correct 
    const produitRecherche = await produitModel.findOne({ _id : id});

    if(!produitRecherche) return rep.status(404).send(`le produit ayant l'id ${id} n'existe pas`);

    rep.json(produitRecherche);
})

router.delete("/produit/:id" , auth , async(req , rep) => {

    const id = req.params.id ;

    if(!Types.ObjectId.isValid(id)) return rep.status(400).json({msg : "id invalid"})

    let produitASupprimer = await produitModel.findByIdAndRemove(id);

    if(produitASupprimer == null)  return rep.status(404).json({msg : "produit introuvable"})

    // produitASupprimer = produitASupprimer.deleteOne()

    rep.json({msg : "ok" , produit : produitASupprimer});

} )

// cas pratique :
// créer les tests d'intégration pour tester la création de produit 
// envoie pas de token => erreur 401
// envoie un token mais erroné erreur 400
// envoie un token valide et produit valide => réponse 200 du serveur 

// créer la méthode POST via express qui permet de ajouter un nouveau projet dans la collection produits (stockée sur MongoDB Atlas )

module.exports = router

// cas pratique :
// créer un nouveau fichier de model-user.js 
// schema => 
/**
 pseudo : chaine de caractère min 5 lettres maximum 200 lettres
 email  : chaine de caractère min 5 lettres maximum 200 lettres
 password : chaine de caractère min 5 lettres maximum 200 lettres
 puis créer le model 

créer un autre fichier de route route-user.js 
post (http://localhost:3210/addUser) 
{
    pseudo : "Alain",
    email : "alain@yahoo.fr",
    password : "123456"
}
=> ajouter un nouvel enregistrement dans la table user => stockée dans la base MongoDB Atlas
 */