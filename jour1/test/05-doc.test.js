
it("différence entre toBe() et toEqual()" , () => {

    const a = {nom : "Alain" , age : 22}
    // erreur car ces deux objets n'ont pas la même adresse mémoire 
    // expect(a).toBe({nom : "Alain" , age : 22})
    // toBe() vérifier égalité une variable primitive String / Number / Boolean

    expect(a).toEqual({nom : "Alain" , age : 22}); 
    // toEqual() vérifier égalité une variable complexe Objet , tableau 
});

// https://jestjs.io/docs/using-matchers

// Boolean
/* .isTruthy()
.isFalsy()
.not.isTruthy()
.not.isFalsy() */

// Nombre 
/* .toBeGreaterThan()
.toBeGreater()
.toBeLessThan()
.toBeLess()
.toBe()
.toEqual() */ // qui sont équivalent pour les primitives

// chiffres à virgule 
//.toBeCloseTo()

const { isPair , fizzBuzz , getTel } = require("../05-doc");

it("verif fonction isPair" , () => {

    // dans nos traitements il faut réaliser AUTANT s'ASSERTION que de return dans notre fonction 
    // minimum 2 tests pour pouvoir la vérifier correctement
    expect(isPair(1)).toBe("Impair");
    expect(isPair(2)).toBe("Pair");

});

// créer dans le fichier 05-doc.js
// fonction fizzBuzz  paramètre max
// contient une boucle 1 => max
// si le chiffre est un multiple de 3 => fonction retourne Fizz
// si le chiffre est un multiple de 5 => fonction retourne Buzz
// sinon => fonction retourne le chiffre 

/* fizzBuzz(1) // 1
fizzBuzz(2) // 2
fizzBuzz(3) // Fizz
fizzBuzz(4) // 4
fizzBuzz(5) // Buzz
fizzBuzz(6) // Fizz */
// ....

// pouvez vous créer un test unaire qui permet de tester que la fonction retourne correctement les valeurs jusqu'à 10 

it("tester la fonction fizzBuzz" , () => {
  [1,2,4,7,8].forEach(chiffre => expect(fizzBuzz(chiffre)).toBe(chiffre));
  [3,6,9].forEach(chiffre => expect(fizzBuzz(chiffre)).toBe("Fizz"));
  [5,10].forEach(chiffre => expect(fizzBuzz(chiffre)).toBe("Buzz"));
});

it("verifier que le numéro de téléphone respecte le format fr" , () => {
    expect(getTel()).toMatch(/^0[1-9] \d{2} \d{2} \d{2} \d{2}$/);
});

// rdv 14h00 bon appétit  !!!


