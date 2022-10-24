// regex => expression régulière 

// chercher dans une string une pattern 

const patternA = /[0-9]{2,4}/; // contient des chiffres 2 ou 4 l'un à côté de l'autre 
const patternN = new RegExp(); 

// [] plage de caractère 
// [0-9] plage de caractère 
// [a-z] plage de caractère 
// [A-Z] plage de caractère 
// [0-9a-zA-Z] plage de caractère 
// [0-9a-zA-Z;,] plage de caractère 
// multiplicateur
// []{min,maximum}

const phrase = "bonj01our" ;

console.log(patternA.test(phrase))

const patternC = /[0-9]/;
const patternCPrime = /\d/;

// regex101 : https://regex101.com/

const patternD = /[a-z]/;
const patternE = /[A-Z]/;

const patternF = /[a-zA-Z0-9!:]/;
const patternFPrime = /./; // n'importe quelle caractère 

// racourci pour les multiplicateurs 
const patternG = /[a-z]{1,}/;
const patternGPrime = /[a-z]+/;

const patternH = /[a-z]{0,}/;
const patternHPrime = /[a-z]*/;

const patternI = /[a-z]{0,1}/;
const patternIPrime = /[a-z]?/;

// JsonWebToken

// verifier que une chaine de caractère est un email correct 
// lettre chiffre sur minimum 1 caractère
// @
// extension lettre chiffre sur minimum 1 caractère
// .
// extension fr com org gouv entre 2 et 4 caractères 

// a@yahoo.h

const patternEmail = /^[0-9a-z]+@[0-9a-z]+\.[a-z]{2,4}$/ ;

const email1 = "a@yahoo.h"; 
console.log(patternEmail.test(email1) , "ici");
console.log(patternEmail.test("a@yahoo.fr") , "la");

// créer une fonction qui retourne la valeur suivante  dans le fichier 05-doc.js
// "01 01 01 01 01"
// créer un test dans le fichier 05-doc.test.js 
// tester que la  fonction retourne un pattern de numéro de téléphone français correct 


