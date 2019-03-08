// variable
// déclarer la variable src
var src = ["img/plage1.jpg", "img/plage2.jpg", "img/plage3.jpg"];
// initialiser une variable pour sotcker le tour de slider
var i = 0;
    // récupération de la premiere image et la lier avec sa source
    imgI = document.getElementById("imgI");
    imgI.src = src[0];

// création d'une fonction qui recupere les images à un interval de 3s
setInterval(function() {
    // récupération de toutes les images et les lier avec leurs sources
    imgI = document.getElementById("imgI");
    imgI.src = src[i];
    // afficher les images suivantes dans le tableau l'une à la suite de l'autre progressivement
    i++;
    // si la derniere image est affichée il revient au debut
    if(i == src.length) {i = 0};
    // définir le temps de changement des images
}, 3000);
//bouton précédent
var btn1 = document.getElementById("previous");
btn1.onclick = function () {
    if (i >= src.length - 1) {i--;}
    imgI.src = src[i];
    clearInterval(imgI);
};

    // if (i==0) {
    //     i == src.length};
    // }
//bouton suivant
btn2 = document.getElementById("next");
btn2.onclick = function () {
    if (i!== src.length && i <= src.length) {i++;}
    imgI.src = src[n];
    clearInterval(imgI);
};
// console.log(btn1);
    
