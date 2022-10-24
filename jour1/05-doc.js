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

function fizzBuzz(max){
    let resultat = max ;
    if(max % 3 == 0){
        resultat = "Fizz";
    }else if(max % 5 == 0 ) {
        resultat = "Buzz" ;
    }
    return resultat ;
}

function getTel(){
    return "06 01 02 01 01";
}


exports.isPair = isPair ;
exports.fizzBuzz = fizzBuzz ;
exports.getTel = getTel ;