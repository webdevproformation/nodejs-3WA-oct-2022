//const axios = require("axios");

exports.getArticles = ( texte , callback  ) => {

    return callback().then( reponse => reponse.data.filter(article => article.title.includes(texte)) )

}




