/* dans les formulaires :
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
formulaire pour tester dun coup la validite de lensemble du formulaire

 */
/*fait par Sabino*/

// Remplir automatiquement le champ caché à l'ouverture de la page
window.onload = function () {
    const hiddenField = document.getElementById("userAgentInformations") as HTMLInputElement;
    hiddenField.value =
        "Navigateur : " + navigator.userAgent +
        ", Langue : " + navigator.language +
        ", Système : " + navigator.platform;
};


// Vérification des réponses du quiz
function checkAnswers() {
    // Liste des bonnes réponses
    const correctAnswers: { [key: string]: string } = {
        q1: "franglais",
        q2: "yaounde",
        q3: "catholicisme",
        q4: "real",
        q5: "pho",
        q6: "hanoi",
        q7: "albanais",
        q8: "albanie",
        q9: "montagnes",
        q10: "bobo"
    };

    let score = 0;

    // Pour chaque question (de q1 à q10)
    for (let i = 1; i <= 10; i++) {
        const questionName = "q" + i;
        const goodAnswer = correctAnswers[questionName];
        const radios = document.getElementsByName(questionName);

        for (let j = 0; j < radios.length; j++) {
            const radio = radios[j] as HTMLInputElement;
            const label = radio.parentElement as HTMLLabelElement;

            // Réinitialise le style et les symboles
            label.style.color = "black";
            label.textContent = label.textContent!.replace("✅", "").replace("❌", "").trim();

            if (radio.checked) {
                if (radio.value === goodAnswer) {
                    label.style.color = "green";
                    label.textContent += " ✅";
                    score++;
                } else {
                    label.style.color = "red";
                    label.textContent += " ❌";
                }
            }
        }
    }

    // Affiche le score final
    const result = document.getElementById("resultMessage");
    result!.textContent = "Votre score est : " + score + "/10";
}

// Connexion du bouton à la fonction
document.addEventListener("DOMContentLoaded", function () {
    const checkButton = document.getElementById("checkAnswersButton");
    if (checkButton) {
        checkButton.addEventListener("click", checkAnswers);
    }
});

// Empêche l'envoi du formulaire si une réponse est manquante
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form") as HTMLFormElement;

    form.addEventListener("submit", function (event) {
        let allAnswered = true;

        for (let i = 1; i <= 10; i++) {
            const questionName = "q" + i;
            const radios = document.getElementsByName(questionName);
            let answered = false;

            for (let j = 0; j < radios.length; j++) {
                const radio = radios[j] as HTMLInputElement;
                if (radio.checked) {
                    answered = true;
                    break;
                }
            }

            if (!answered) {
                allAnswered = false;
                break;
            }
        }

        if (!allAnswered) {
            event.preventDefault(); // empêche l'envoi
            alert("Veuillez répondre à toutes les questions avant d'envoyer le formulaire.");
        }
    });
});


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
