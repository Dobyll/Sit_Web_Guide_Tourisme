/* consignes : dans les formulaires
Le but de ces questions est de rendre votre formulaire plus interactif

a Ajoutez un champ cache dans chacun de vos formulaires dont la valeur est automatiquement
mise a jour avec des informations sur le navigateur utilise le systeme dexploitation sur lequel
il sexecute et la langue Lorsque cette information est envoyee sur le serveur elle est associee
au nom userAgentInformations

b Modifiez votre formulaire pour que certaines verifications de validite des donnees soient realisees
au fur et a mesure de la saisie par lutilisateur du formulaire par exemple lorsquun champ de
saisie de texte perd le focus evenement onblur En cas derreur de linternaute la nature du
probleme lui sera indiquee par un changement de style un message dans la page un message
dans une fenetre dalerte ou autre Vous pouvez egalement ajouter un bouton dans votre
formulaire pour tester dun coup la validite de lensemble du formulaire */

/*fait par Sabino*/

// Fonction pour récupérer un champ du formulaire par son ID
function getElement(id: string) {
    return document.getElementById(id) as HTMLInputElement;  // On précise que c'est un champ de type input
}

// Fonction pour afficher un message d'erreur sous un champ
function showError(id: string, message: string) {
    const errorDiv = document.getElementById("error-" + id); // On récupère la div de l'erreur
    if (errorDiv) {
        errorDiv.textContent = message;  // On met le message d'erreur
    }
}

// Fonction pour vérifier si un champ est vide
function checkField(id: string, message: string): boolean {
    const field = getElement(id);  // On récupère l'élément du champ

    if (field.value.trim() === "") {  // Si le champ est vide
        field.classList.add("error-input");  // On ajoute une bordure rouge
        showError(id, message);  // On affiche l'erreur
        return false;  // Le champ est invalide.
    } else {
        field.classList.remove("error-input");  // On enlève la bordure rouge
        showError(id, "");  // On enlève le message d'erreur
        return true;  // Le champ est valide.
    }
}

// Fonction pour vérifier si l'email est valide (format correct)
function checkEmail(): boolean {
    const emailField = getElement("email");
    const emailRegex = /\S+@\S+\.\S+/;  // C'est l'expression régulière pour vérifier le format de l'email

    if (!emailRegex.test(emailField.value)) {  // Si l'email ne correspond pas au format
        emailField.classList.add("error-input");  // Bordure rouge
        showError("email", "Email invalide");  // Message d'erreur
        return false;  // Email invalide
    } else {
        emailField.classList.remove("error-input");  // Enlève la bordure rouge
        showError("email", "");  // Enlève l'erreur
        return true;  // Email valide
    }
}

// Fonction qui est appelée lorsque l'utilisateur soumet le formulaire
function validateForm(): boolean {
    // On vérifie si chaque champ est valide
    const isNomValid = checkField("nom", "Le nom est obligatoire.");
    const isPrenomValid = checkField("prenom", "Le prénom est obligatoire.");
    const isEmailValid = checkEmail();
    const isMessageValid = checkField("message", "Le message est obligatoire.");

    // Si tous les champs sont valides
    if (isNomValid && isPrenomValid && isEmailValid && isMessageValid) {
        alert("Le formulaire est valide !");
        return true;  // Tout est bon, on envoie le formulaire
    } else {
        alert("Il y a des erreurs dans le formulaire.");
        return false;  // Il y a des erreurs, donc on ne soumet pas le formulaire
    }
}

// Quand la page est prête, on ajoute des vérifications au formulaire.
window.onload = () => {
    // Ajouter un événement pour vérifier les champs quand on quitte un champ (perte du focus)
    getElement("nom").addEventListener("blur", () => checkField("nom", "Le nom est obligatoire."));
    getElement("prenom").addEventListener("blur", () => checkField("prenom", "Le prénom est obligatoire."));
    getElement("email").addEventListener("blur", checkEmail);  // Vérification de l'email
    getElement("message").addEventListener("blur", () => checkField("message", "Le message est obligatoire."));

    // Quand on clique sur le bouton "Tester la validité", on valide le formulaire.
    const testButton = document.getElementById("btnTest");
    if (testButton) {
        testButton.addEventListener("click", validateForm);
    }

    // Quand on soumet le formulaire, on vérifie la validité.
    const form = document.getElementById("contactForm") as HTMLFormElement;
    if (form) {
        form.addEventListener("submit", (event) => {
            if (!validateForm()) {  // Si le formulaire n'est pas valide
                event.preventDefault();  // On empêche l'envoi du formulaire
            }
        });
    }
};


document.addEventListener("DOMContentLoaded", function() {
    let returnButton = document.getElementById("returnButton");

    if (returnButton) {
        returnButton.addEventListener("click", function() {
            window.location.href = "http://localhost:63342/SITE_mouacha_sabino/index.xhtml?_ijt=fofmcqv039osmt91sstkgjkm0r";
        });
    }
});

/*Fonction pour afficher un message lorsqu'on clique sur le logo*/
document.addEventListener("DOMContentLoaded", function() {
    const interactiveImage = document.getElementById("interactiveImage");

    if (interactiveImage) {
        interactiveImage.addEventListener("click", function() {
            alert("Bienvenu sur notre site web !");
        });
    }
});
