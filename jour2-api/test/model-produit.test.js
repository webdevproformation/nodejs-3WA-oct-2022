// jest et supertest 
// npm i jest supertest --save-dev

// effectuer un test d'integration 
// tester la fonctionnalité MAIS en + ses dépendances 
// faire la requête AJAX vers notre base de données 

const request = require("supertest");
const { produitModel } = require("../model-produit");

let server ; // récupérer le serveur express que l'on a créé dans le fichier app.js 

describe( "/data" , () => {

    // préparation de notre test 
    // récupérer le serveur express 
    beforeEach(() => {
        server = require("../app"); 
    });

    afterEach( async () => {
        await produitModel.deleteMany({}) ; // vider la table produit après chaque test
        server.close();
    });

    // test 
    describe("GET" , () => {
        it("GET" , async () => {
            // utiliser le serveur pour faire l'appel
            // simule une requête réalisée à notre serveur express
            const req = await request(server).get("/data")
            //console.log(req.body[0]);
            expect(req.status).toBe(200);
            if(req.body[0]){
                expect(req.body[0]).toHaveProperty("_id");
                expect(req.body[0]).toHaveProperty("nom");
                expect(req.body[0]).toHaveProperty("prix");
                expect(req.body[0]).toHaveProperty("isPublished");
                expect(req.body[0]).toHaveProperty("dt_creation");
            }
        })

        it("GET 2" , async () => {
            // ajouter des produits directement dans le test 
            await produitModel.collection.insertMany([
                { nom : "Article 1" , prix : 1 , dt_publication : new Date() , isPublished : true  },
                { nom : "Article 2" , prix : 2 , dt_publication : new Date() , isPublished : true  }
            ])
            // utiliser le serveur pour faire l'appel
            // simule une requête réalisée à notre serveur express
            const req = await request(server).get("/data")
            //console.log(req.body[0]);
            expect(req.status).toBe(200);
            expect(req.body.length).toBe(2);
            expect(req.body[0]).toHaveProperty("nom" , "Article 1");
            expect(req.body[1]).toHaveProperty("nom" , "Article 2");
        })

        it("GET :id" , async () => {
            const dt = new Date() ;
            const produit = new produitModel({
                "nom" : "Produit 1",
                "prix" : 1,
                "dt_creation" : dt,
                "isPublished" : false
            });
            await produit.save();
            // appeler la méthode que l'on a crée dans le fichier route.js 
            const req = await request(server).get(`/${produit._id}`);
            // effectuer les assertions 
            expect(req.status).toBe(200);
            expect(req.body).toHaveProperty("nom" , "Produit 1");
            expect(req.body).toHaveProperty("prix" , 1);
            expect(req.body).toHaveProperty("isPublished" , false);
            expect(req.body).toHaveProperty("dt_creation" , dt );
        } )
    })
} )

// cas créer une nouvelle route dans le model produit qui permet de récupérer 1 seul produit en fonction de l'id mentionné dans l'url
// créer le test d'intégration pour vérifier que le produit existe bien en base de données

// Cas pratique 
// ajouter une nouvelle méthode dans le fichier model-user.js
// permet de récupérer la liste complète de tous les users sous forme de tableau contenant des objets user 

// réaliser le test d'intégration pour vérifier que le serveur retourne des données conformes 
// avec un status 200 


