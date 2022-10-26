const { Types } = require("mongoose");
const { userModel } = require("../model-user") ;
const auth = require("../autorisation");


describe("tester le middle auth" , () => {

    it( "remplir une requete avec la prop user avec un payload valid" , () => {
        const user = { 
                _id : Types.ObjectId().toHexString() , 
                pseudo : "aaaaaaa", 
                email : "a@yahoo.fr" 
        } ;
        const token = new userModel(user).genererJWT();

        const req = {
            header : jest.fn().mockReturnValue(token)
        }
        const rep = {} ;
        const next = jest.fn() ;
        auth(req , rep , next);
        expect(req.user).toHaveProperty("_id");
        expect(req.user).toHaveProperty("email");
        expect(req.user).toHaveProperty("pseudo");
    })

})