// bonne pratique pour bien s'organiser
// le fichier 04-lib.test.js va tester les fonctionnalités stockées dans le fichier 04-lib.js

const { calcul , division } = require("../04-lib.js"); // importer des fonctions de notre lib

test("verification fonction calcul" , () => {
    const a = calcul( 1 , 2 ); // exécuter la fonction
    expect(a).toBe(3); // vérifier quelle retourne bien resultat attendu 
});

it( "exo 1 verif fonction division", () => {
    const a = division( 1 , 1 );
    expect(a).toBe(1);
} );

// bon café rdv 11h15 !! @ toute suite !!!

// cas pratique 
// ajouter une fonction dans le fichier 04-lib.js 
// division deux paramètres a et b retourne le resultat de la division de a / b 
// tester cette fonction division dans le fichier 04-lib.test.js 