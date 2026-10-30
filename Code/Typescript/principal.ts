/* consignes:

Faites en sorte que la date et lheure saffichent a un endroit de votre choix sur chaque page
de votre site lorsque celleci a fini de se charger

 Ajoutez un lien dans la page daccueil qui amene sur une fiche de la collection choisie au
hasard Chaque fois que lon clique sur le lien la page quil designe autrement dit la valeur de
lattribut href du lien change de maniere pseudoaleatoire mais designe toujours une page
de votre collection

 Ajoutez sur chaque page un bouton a lendroit de votre choix et faites en sorte que lorsquil
est clique la page saffiche avec le style alternatif que vous avez cree Si la page saffiche avec
le style alternatif alors un clic sur le bouton restaure le style initial de la page
Pour rappel le style alternatif est celui que vous avez lie a votre page avec un element link
dont la valeur de lattribut rel est alternate stylesheet
Une maniere de faire cela est dutiliser la collection documentstyleSheets dont chaque case
correspond a une feuille de style le premier element de la collection documentstyleSheets0
correspond a la feuille de style incluse par le premier element link etc Pour activer ou
desactiver un style on peut utiliser lattribut disabled Lorsquil vaut true le style est desactive
lorsquil vaut false le style est applique sur la page*/

/* Fait par Nadia Mouacha */

/* Fonction pour afficher l'heure et la date*/
document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        let now : Date = new Date();
        let datetimeElement = document.getElementById("datetime");

        if (datetimeElement) {
            datetimeElement.textContent = now.toLocaleString();
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});

/* bouton alternatif*/
function setActiveStyleSheet(title: string): void {
    // Récupère tous les éléments <link> de la page
    let links: HTMLCollectionOf<HTMLLinkElement> = document.getElementsByTagName("link");

    // Parcourt chaque élément <link>
    for (let i: number = 0; i < links.length; i++) {
        let link: HTMLLinkElement = links[i];

        // Vérifie si l'élément est une feuille de style et a un titre
        if (link.getAttribute("rel")?.includes("stylesheet") && link.getAttribute("title")) {
            // Désactive ou active la feuille de style en fonction du titre
            link.disabled = link.getAttribute("title") !== title;
        }
    }
}

/*Bascule entre le style principal et le style alternatif.*/

function toggleStyle(): void {
    // Récupère le titre de la feuille de style actuellement active
    let currentStyle = document.querySelector('link[rel="stylesheet"]:not([disabled])')?.getAttribute('title');

    // Bascule entre les styles
    if (currentStyle === "style principal") {
        setActiveStyleSheet("style High Contrast: alternative");
        document.body.classList.add("accessible-mode"); // Ajoute la classe pour le mode accessible
    } else {
        setActiveStyleSheet("style principal");
        document.body.classList.remove("accessible-mode"); // Supprime la classe pour le mode accessible
    }
}

/* Active ou désactive toutes les feuilles de style. */
function toggleStylesActivation(): void {
    // Récupère tous les éléments <link> de la page
    let links: HTMLCollectionOf<HTMLLinkElement> = document.getElementsByTagName("link");
    let allDisabled: boolean = true;

    // Vérifie si toutes les feuilles de style sont désactivées
    for (let i: number = 0; i < links.length; i++) {
        let link: HTMLLinkElement = links[i];
        if (link.getAttribute("rel")?.includes("stylesheet") && !link.disabled) {
            allDisabled = false;
            break;
        }
    }

    // Active ou désactive toutes les feuilles de style
    for (let i: number = 0; i < links.length; i++) {
        let link: HTMLLinkElement = links[i];
        if (link.getAttribute("rel")?.includes("stylesheet")) {
            link.disabled = allDisabled;
        }
    }
}

/* Fonction pour sélectionner un lien au hasard dans un tableau de liens*/
document.addEventListener("DOMContentLoaded", function () {
    /** @type {string[]} */
    const pages = [
        "http://localhost:63342/SITE_mouacha_sabino/Content/Collection/Bresil.xhtml?_ijt=iq69b9bvjrcgfdf9ss69c7lpq1",
        "http://localhost:63342/SITE_mouacha_sabino/Content/Collection/Albanie.xhtml?_ijt=p03741de3vp36kernggrsqe9n6",
        "http://localhost:63342/SITE_mouacha_sabino/Content/Collection/Cameroun.xhtml?_ijt=p03741de3vp36kernggrsqe9n6",
        "http://localhost:63342/SITE_mouacha_sabino/Content/Collection/Vietnam.xhtml?_ijt=gf97les78b2ogppcb7qd0if4al"
    ];

    /** @type {HTMLAnchorElement | null} */
    let lienAleatoire = document.getElementById("random-link");

    if (lienAleatoire) {
        lienAleatoire.addEventListener("click", function (evenement) {
            evenement.preventDefault();

            // Choisit une page au hasard dans la liste
            let indexAleatoire = Math.floor(Math.random() * pages.length);
            let urlChoisie = pages[indexAleatoire];

            // Redirection vers la page choisie
            window.location.href = urlChoisie;
        });
    }
});

/* Fonction pour rediriger vers la page d'accueil */
document.addEventListener("DOMContentLoaded", function() {
    let returnButton = document.getElementById("returnButton");

    if (returnButton) {
        returnButton.addEventListener("click", function() {
            window.location.href = "http://localhost:63342/SITE_mouacha_sabino/index.xhtml?_ijt=fofmcqv039osmt91sstkgjkm0r";
        });
    }
});

/*Fonction pour afficher un pop-up lorsqu'on clique sur le logo*/
document.addEventListener("DOMContentLoaded", function() {
    const interactiveImage = document.getElementById("interactiveImage");

    if (interactiveImage) {
        interactiveImage.addEventListener("click", function() {
            alert("Bienvenu sur notre site web !");
        });
    }
});
