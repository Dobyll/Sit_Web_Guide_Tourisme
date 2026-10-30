"use strict";
/* consignes : pas fait mais pour la suite notez que lorsquon deplace le curseur dun input de type range cest un evenement
de type input qui est declenche cela correspond a lattribut oninput

a Lelement input didentifiant average doit contenir la moyenne des valeurs des elements input
de type range utilises pour evaluer votre travail
La valeur de cet element est mise a jour lorsquon charge la page ou lorsquon modifie la valeur
dun des curseurs presents dans la page

b Dans la deuxieme colonne du tableau les couleurs du label present dans chaque case dependent
de la valeur de lelement input present sur la ligne Si cette valeur est 0 le texte est ecrit en
blanc sur fond rouge Si cette valeur est 100 il est ecrit en blanc sur fond vert Pour toute
autre valeur entre 0 et 100 il est ecrit en blanc sur fond orange Les couleurs doivent etre
presentes au chargement de la page et modifiees des que le curseur de sa ligne est deplace */
/*fait par Nadia Mouacha*/
/* Fonction pour rediriger vers la page d'accueil */
document.addEventListener("DOMContentLoaded", function () {
    let returnButton = document.getElementById("returnButton");
    if (returnButton) {
        returnButton.addEventListener("click", function () {
            window.location.href = "http://localhost:63342/SITE_mouacha_sabino/index.xhtml?_ijt=fofmcqv039osmt91sstkgjkm0r";
        });
    }
});
