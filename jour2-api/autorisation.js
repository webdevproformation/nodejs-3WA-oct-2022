const jwt = require("jsonwebtoken");
// créer un middleware express 
// associer l'authentification dans la méthode post 
const auth = (req, rep , next) => {
    const token = req.header("x-auth-token")
    if(!token) return rep.status(401).json({message : "Accès refusé absence de token"});
    try{
        const decoded = jwt.verify(token, process.env.JWT);
        req.user = decoded ;
        next()
    }catch(ex){
        rep.status(400).send("Token reçu invalid"); 
    }
}
module.exports = auth ;

// rdv demain 9h30 bonne soirée !!!!