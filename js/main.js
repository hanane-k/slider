// variable
// déclarer la variable src
var src = [
    "img/plage1.jpg",
    "img/plage2.jpg",
    "img/plage3.jpg"
]
// initialiser une variable pour sotcker le tour de slider
var i = 0;
// création d'une fonction qui recupere les images à un interval de 3s
setInterval(function() {
    // récupération de toutes les images et les lier avec leurs sources
    imgI = document.getElementById("imgI").src = src[i];
    // afficher les images suivantes dans le tableau l'une à la suite de l'autre progressivement
    i++;
    // si la derniere image est affichée il revient au debut
    if(i == 3) i = 0;
    // définir le temps de changement des images
}, 3000);


console.log(imgI);
