const axios = require("axios");
const { getUsers } = require("../08-simulation");
jest.mock("axios"); // simuler 
// utilise plus la librairie qui est dans node_modules
// jest => permettre de simuler les fonctionnalités de axios
it("recupérer des utilisateurs" , () => {
    const users = [
        {id : 1 , nom : "Alain"},
        {id : 2 , nom : "Benoit"}
    ];
    axios.get.mockResolvedValue({data : users});
    return getUsers().then(data => {
        console.log(data);
        expect(data).toEqual(users)
    } 
    );
})


