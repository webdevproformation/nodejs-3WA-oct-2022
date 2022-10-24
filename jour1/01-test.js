// lorsque l'on crée un projet PHP 
// du Javascript (front ou back)
// au fur et à mesure que l'on avance dans le projet
// vérifier que l'ensemble du code que l'on écrit fonctionne 
// et ne casse pas l'existant 

// si le projet est simple (court quelques pages / fichiers)
// => effectuer les tests et les vérifications manuellement

// si le projet est complexe // si le projet est partagé entre plusieurs développeurs 

// les tests deviennent de plus en plus fastidieux à réaliser

// Le Testing => le fait d'automatiser le fait de tester son code 
// écrire du code qui test son propre code 

// script  vont réaliser pour le compte du développeur un certain nombre d'actions 
// de manière AUTOMATIQUE

// en + de notre projet en javascript 
// créer des fichiers js en + qui vont réaliser des TESTS

// permet d'améliorer la qualité de code 

// -----------------

// il existe 3 grands type de test 

// test unitaire : tester une fonction / un calcul de votre projet de manière complètement autonome (sous la forme d'une unité)
// SANS ses dépendances 

// test d'intégration : tester les  fonctionnalités de votre application AVEC leur dépendance => joindre la fonctions ET les éléments dont elle dépend 
// fichier / appel Ajax ...

// test End 2 End => e2e : tester en intégralité une action attendue de votre app : achat d'un produit / changer un mot de passe / créer un produit du catalogue 

// test unitaire :
// facile à créer 
// rapide à exécuter 
// moins confiance dans les résultats des test obtenus 

// test d'intégration
// un peu plus complexe à écrire
// un peu moins rapide à exécuter
// meilleur dans les résultats des test obtenus 

// test e2e :
// beaucoup plus complexe à écrire
// dépendance très forte entre le test (script) et le résultat
// update de votre application => update de vos test e2e  
// plus fragile
// le résultat des tests est le plus élevé en terme de confiance dans le test

// la quantité de test que l'on doit écrire dans un projet

// une grande quantité de test unitaire
// une moins grande quantité de test intégration
// peu de test e2e 
