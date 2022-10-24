
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

const { isPair } = require("../05-doc");

it("verif fonction isPair" , () => {

    // dans nos traitements il faut réaliser AUTANT s'ASSERTION que de return dans notre fonction 
    // minimum 2 tests pour pouvoir la vérifier correctement
    expect(isPair(1)).toBe("Impair");
    expect(isPair(2)).toBe("Pair");

});
