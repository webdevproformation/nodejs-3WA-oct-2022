// le site jest.io => https://jestjs.io/
// https://jestjs.io/docs/getting-started

// Assertion =>
// expect().toBe()
//         Matcher

// égalité
// toBe()
// toEqual()


function isPair(chiffre){
    if(chiffre % 2 == 0){
        return "Pair" ;
    } else {
        return "Impair";
    }
}

exports.isPair = isPair ;