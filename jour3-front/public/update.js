const verif = localStorage.getItem("token");

if(verif == null) window.location.href = "/connexion";