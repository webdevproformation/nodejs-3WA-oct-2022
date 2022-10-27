document.querySelector("form").addEventListener("submit" , (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = [...data.entries()]
    const user = {
        pseudo : values[0][1],
        email : values[1][1],
        password : values[2][1],
    }
    
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    }
    fetch("https://lit-island-18380.herokuapp.com/addUser" , options)
            .then(reponse => reponse.json())
            .then((data) => {
                console.log(data);
                document.querySelector(".message").innerHTML = `<div class="alert alert-danger">${data.msg}</div>`
            })
})