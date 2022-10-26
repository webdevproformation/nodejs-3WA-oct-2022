const request = require("supertest");
const { Types } = require("mongoose");
const { userModel } = require("../model-user");
let server ;

describe("tester getAllUser" , () => {
    beforeEach(() => {
         server = require("../app");
    });
    afterEach( () => {
        server.close()
    });
    describe("GET" , () => {
        it("All User" , async () => {
             const req = await request(server).get("/getAll");
            // server.close()
            // console.log(req.status , req.body);
             expect(req.status).toEqual(200);
        })

        it( "Get user id invalid" , async () => {
            const req = await request(server).get("/user/1");
            expect(req.status).toEqual(400);
        } )

        it( "Get user id valid mais user n'existe pas" , async () => {
            const id = Types.ObjectId()
            const req = await request(server).get(`/user/${id}`);
            expect(req.status).toEqual(404);
        } );

        it("GET user qui existe bien" , async () => {
            const newUser = new userModel({
                pseudo : "userTest",
                email : "a@yahoo.fr",
                password : "123456"
            })
            const user = await newUser.save()
            const req = await request(server).get(`/user/${user._id}`);
            expect(req.status).toEqual(200);
            expect(req.body).toHaveProperty("pseudo" , newUser.pseudo);
            expect(req.body).toHaveProperty("email" , newUser.email);
            expect(req.body).toHaveProperty("password" , newUser.password);
        })
    })

})

// rdv 15h30 => bon café @ toute suite !!!