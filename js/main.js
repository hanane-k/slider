// variable
// déclarer la variable src
var src = [
    "img/plage1.jpg",
    "img/plage2.jpg",
    "img/plage3.jpg"
]
// j'initialise une variable pour sotcker mon tour de slider
var i = 0;
// Je récupère toutes mes images dans une variable
var img = document.getElementById("img");
// création d'une fonction qui recupere les images à un interval de 3s
setInterval(function() {
    document.getElementById("imgI").src = src[i];
    // afficher les images suivantes dans le tableau l'une à la suite de l'autre
    i++;
    // si la derniere image est affichée il revient au debut
    if(i == 3) i = 0;
    // définir le temps de changement des images
}, 3000);
// console.log(img);
