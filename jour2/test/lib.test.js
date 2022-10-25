const { getArticles } = require("../lib")

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
})
