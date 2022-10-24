// PHP => PHPUnit

// Javascript > plusieurs librairies disponibles pour réaliser 

// test unitaire 


// la plus ancienne lib => jasmine
// https://jasmine.github.io/

// mocha  + plugin qui viennent d'ajouter en plus de lib 
// chai + sinon
// https://mochajs.org/


// => celle que l'on va apprendre ensemble
// jest https://jestjs.io/

// donner un certain nombre d'outil pour pouvoir rapidement et facilement écrire des tests

/*
- une librairie de fonctions de test : 
	- fonctions de création de scenarios
	- fonctions d'assertion : vérifier une valeur 
    Vérifier que une variable à bien une valeur attendue
	- fonctions de simulation : mock function
	- fonctions de set up / teardown : mettre en place un environnement

- test runner => outil en ligne de commande pour lancer les tests

Cypress // Puppeteer ( en + de tous les outils précédents + chromimum par défaut sans fenêtre )
headless browser 

- headless browser => pour les tests e2e 
	- pour simuler les interactions avec un navigateur

créer un nouveau dossier nodejs (dans le bureau de votre ordinateur)
créer un sous dossier jour1 dans le dossier nodejs

comment créer un fichier package.json

cd jour1
npm init --yes

quels sont les deux types de dépendances

dépendance du projet => si non installé => ça marche pas
dépendance de développement => fonctionnalité en + qui aider le développeur à travailler pendant la phase de développement 
mais ces dépendances ne doivent être installés sur le serveur de production 

npm install jest --save-dev
npm i jest -D

ajouter la node_modules => fonctionnalités

package.json 
"devDependencies": {
"jest": "^29.2.1"
}

 */