// variable
// déclarer la variable src
var src = ["img/plage1.jpg", "img/plage2.jpg", "img/plage3.jpg"];
// initialiser une variable pour sotcker le tour de slider
var i = 0;
// récupération de la premiere image et la lier avec sa source
imgI = document.getElementById("imgI");
imgI.src = src[i];
// création d'une fonction qui recupere les images à un interval de 3s
var interval  = setInterval(function() {
    // si la derniere image est affichée il revient au debut
    if(i == src.length - 1) {
        i = 0
    }
    else{
        i++;
    }
    // afficher les images suivantes dans le tableau l'une à la suite de l'autre progressivement
    imgI.src = src[i];
    // définir le temps de changement des images
}, 3000);
//bouton précédent
var btn1 = document.getElementById("previous");
// btn1.addEventListener("click", previous());
function previous() {
    clearInterval(interval);
    // alert("hi");
    if (i > 0) {
        i-=1;
    }
    imgI.src = src[i];
    interval = setInterval(function() {
        // si la derniere image est affichée il revient au debut
        if(i == src.length - 1) {
            i = 0
        }
        else{
            i++;
        }
        // afficher les images suivantes dans le tableau l'une à la suite de l'autre progressivement
        imgI.src = src[i];
        // définir le temps de changement des images
    }, 3000);
};

    // if (i==0) {
    //     i == src.length};
    // }
//bouton suivant
// btn2 = document.getElementById("next");
// btn2.addEventListener("click", next());
// function next() {
//     if (i!== src.length && i <= src.length) {i++;}
//     imgI.src = src[i];
//     clearInterval(imgI);
// };
    
