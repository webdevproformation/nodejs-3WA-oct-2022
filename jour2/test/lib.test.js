const { getArticles , useApi } = require("../lib")

it("test unitaire de lib" , () => {
    const mockCallbackBackAsync = jest.fn();
    const articleSimule = [
        {title : "Article 1" , id : 1},
        {title : "Article 2" , id : 2},
        {title : "lorem ipsum" , id : 3}
    ];
    mockCallbackBackAsync.mockReturnValue(Promise.resolve({data : articleSimule}))
    // assertions
    expect( getArticles( "lorem" , mockCallbackBackAsync ) ).resolves.toEqual([ {title : "lorem ipsum" , id : 3 } ]);
    expect( getArticles( "Article" , mockCallbackBackAsync ) ).resolves.toEqual([ {title : "Article 1" , id : 1},
    {title : "Article 2" , id : 2} ]);
    // attendre que la promesse soit exécutée expect()  .toEqual()
});

// créer une fonction dans le fichier lib.js 
// qui appelle une API qui retourne une collection 
// [ { name : "...." , id : 1 , adresse : "...." } , { name : "...." , id : 1 , adresse : "...." }   ]
// utiliser les fonctions de mock de jest pour tester que votre fonction retourne bien ce type de donnée


it("exo 1" , () => {
    const mockUseApi = jest.fn();
    const resultatApi = [ 
        { name : "Alain" , id : 1 , adresse : "75 rue de Paris" } , 
        { name : "Benois" , id : 2 , adresse : "76 rue de Marseille" }   
    ];
    mockUseApi.mockReturnValue(Promise.resolve(resultatApi));

    //assertion 
    expect(useApi(mockUseApi)).resolves.toEqual( ["Alain" , "Benois"] );

})


