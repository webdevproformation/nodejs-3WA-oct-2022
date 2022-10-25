//const axios = require("axios");

exports.getArticles = ( texte , callback  ) => {

    return callback().then( reponse => reponse.data.filter(article => article.title.includes(texte)) )
}


exports.useApi = (callback) => {
    return callback().then( reponse => {
        return reponse.map( el => el.name)
    })
}



