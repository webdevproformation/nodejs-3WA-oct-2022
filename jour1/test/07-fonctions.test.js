
const { jour, exo4, getArticles } = require("../07-fonctions");

// fonction qui retourne un tableau

it("verification fonction retourne tableau" , () => {
    // compte le nombre d'élément d'un tableau
    expect(jour().length).toBe(4);

    // est ce que le tableau contient bien une valeur 
    expect(jour()).toContain("lundi");
    expect(jour()).toContain("jeudi");

    // vérifier qu'un tableau contient les élements
    expect(jour()).toEqual(expect.arrayContaining(["mardi","lundi"]));

})

// cas pratique 
/* dans le fichier 07-fonctions.js 
un fonction qui s'appelle exo4 qui a un paramètre de type chiffre 
filtre le tableau suivant  qui retourne le tableau suivant :
[1,2,3,4]

exo4(2) = [2,3,4]
exo4(3) = [3,4]
exo4(4) = [4]
exo4(5) = []

créer une fonction de test qui va permettre de vérifier que le retour est correct */

it("tester la fonction exo4", () => {
    expect(exo4(2).length).toBe(3);
    expect(exo4(3)).toEqual(expect.arrayContaining([4,3]));
    expect(exo4(4)).toContain(4);
    expect(exo4(5).length).toEqual(0);
})

// tester des objets 
// toEqual()
// expect(obj).toMatchObject({ id : 1 }); // est ce que l'objet contient bien propriété = 1
//    expect(obj).toHaveProperty("id", 1); // est ce quel'objet dispose d'une propriété et est ce quelle vaut bien 1 

// cas pratique créer une fonction getArticle (id)
/* [
    {id : 1 , titre : "Article 1" , contenu : "lorem ipsum"},
    {id : 2 , titre : "Article 2" , contenu : "lorem ipsum"},
    {id : 3 , titre : "Article 3" , contenu : "lorem ipsum"},
] */

/* la fonction retourne l'article concerné
getArticle (1) => {id : 1 , titre : "Article 1" , contenu : "lorem ipsum"},
getArticle (2) => {id : 2 , titre : "Article 2" , contenu : "lorem ipsum"},
getArticle (4) => {},

// créer la fonction de test qui permet de vérifier que votre implémentation est correcte */

test("tester la fonction getArticles", ()=> {
    expect(getArticles(1)).toMatchObject({id : 1 , titre : "Article 1"});
    expect(getArticles(2)).toHaveProperty("id", 2)
    expect(getArticles(2)).toHaveProperty("titre", "Article 2");
    expect(getArticles(4)).toEqual({});
})