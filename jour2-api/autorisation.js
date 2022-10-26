const jwt = require("jsonwebtoken");
// créer un middleware express 
// associer l'authentification dans la méthode post 
const auth = (req, rep , next) => {
    const token = req.header("x-auth-token")
    if(!token) return rep.status(401).json({message : "Accès refusé absence de token"});
    try{
        const decoded = jwt.verify(token, process.env.JWT);
        req.user = decoded ;
        next();
    }catch(ex){
        rep.status(400).send("Token reçu invalid"); 
    }
}
module.exports = auth ;


// créer une nouvelle route dans le fichier route-user.js 
// connexion 
// post 
// email + password =>
// recherché si l'utilisateur existe bien ???
// retourner le message ok 
// sinon retourner le message => ko 

// rdv 11h15 @ toute suite !!!