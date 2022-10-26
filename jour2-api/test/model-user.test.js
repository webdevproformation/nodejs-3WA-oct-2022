const request = require("supertest");
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
             expect(req.status).toEqual(400);
        })
    })

})

// rdv 15h30 => bon café @ toute suite !!!