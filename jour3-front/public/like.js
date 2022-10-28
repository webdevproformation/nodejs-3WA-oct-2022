document.querySelectorAll(".bi-hand-thumbs-up").forEach( btn => {
    btn.addEventListener("click" , e => {
        e.preventDefault();
        const id = e.target.closest("a").href.split("/").at(-1);
        
        fetch(`https://lit-island-18380.herokuapp.com/like/${id}`)
            .then( reponse => reponse.json())
            .then( produit => {
                const article = e.target.closest("article")
                article.querySelector(".badge").innerHTML = produit.like
            } )
    })
} )
