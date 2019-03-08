// déclarer la variable src
var src = ["img/ainTaya.jpg", "img/ainTaya2.jpg", "img/tipaza.jpg", "img/tamanrasset.jpg", "img/djanet.jpg"];
// initialiser une variable pour sotcker le tour de slider
var i = 0;
// récupération de la premiere image et la lier avec sa source
imgI = document.getElementById("imgI");
imgI.src = src[i];
function inter() {
    // si la derniere image est affichée il revient au debut
    if(i == src.length - 1) {
        i = 0
    }
    else{
        i++;
    }
    // afficher les images suivantes dans le tableau l'une à la suite de l'autre progressivement
    imgI.src = src[i];
}
// création d'une fonction qui recupere les images à un interval de 3s
var interval  = setInterval(function() { inter() }, 3000);
//bouton précédent
var btn1 = document.getElementById("previous");
function previous() {
    clearInterval(interval);
    if (i > 0) {
        i-=1;
    }
    else {
        i = src.length - 1;
    }
    imgI.src = src[i];
    interval = setInterval(function() { inter() }, 3000);
};
// bouton suivant
var btn2 = document.getElementById("next");
function next() {
    clearInterval(interval);
    if (i < src.length -1) {
        i+=1;
    }
    else {
        i = 0;
    }
    imgI.src = src[i];
    interval = setInterval(function() { inter() }, 3000);
};
