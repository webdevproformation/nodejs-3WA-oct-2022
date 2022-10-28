;(function(){
    const verif = localStorage.getItem("token");
    if(verif == null) {
        document.querySelectorAll(".connexion").forEach((el) => {
            el.remove();
        });
    }else {
        document.querySelectorAll(".deconnexion").forEach((el) => {
            el.remove();
        });
    }
})();

