
// ===============================
// EXERCICE 1 : Variables et conversions
// ===============================

function demarrer() {

    let prenom = prompt("Entrer votre prénom :");

    if (prenom === null) {
        return;
    }

    let age = prompt("Donner votre âge :");

    // Vérifier l'âge
    if (age === null || age.trim() === "" || isNaN(Number(age))) {
        alert("Age non valide !");
        return;
    }

    // Convertir l'âge en nombre
    age = Number(age);

    // Afficher les valeurs et leurs types
    console.log("Prénom :", prenom);
    console.log("Type du prénom :", typeof prenom);

    console.log("Age :", age);
    console.log("Type de l'âge :", typeof age);

    alert("Bonjour " + prenom +
          ", vous aurez " + (age + 1) +
          " ans l'année prochaine.");

    let reponse = confirm("Souhaitez-vous continuer ?");

    console.log("Réponse :", reponse);
}


// ===============================
// EXERCICE 2 : Conditions, boucles et fonctions
// ===============================

// Calculer la somme de 1 à N
function sommeEntiers(n) {

    let somme = 0;

    for (let i = 1; i <= n; i++) {
        somme = somme + i;
    }

    return somme;
}


// Afficher les nombres pairs de 0 à N
function nombresPairs(n) {

    let resultat = "";
    let i = 0;

    while (i <= n) {
        resultat = resultat + i + " ";
        i = i + 2;
    }

    return resultat;
}


// Vérifier la valeur de N
function lireNombre() {

    let n = Number(document.getElementById("nombre").value);

    if (n < 1 || n > 100 || n % 1 !== 0) {

        document.getElementById("resultats").textContent =
            "Erreur : vous devez entrer un entier entre 1 et 100 !";

        return null;
    }

    return n;
}


// Calculer la somme
function calculerSomme() {

    let n = lireNombre();

    if (n === null) {
        return;
    }

    let somme = sommeEntiers(n);

    document.getElementById("resultats").textContent =
        "Somme : " + somme;
}


// Afficher les nombres pairs
function afficherPairs() {

    let n = lireNombre();

    if (n === null) {
        return;
    }

    let pairs = nombresPairs(n);

    document.getElementById("resultats").textContent =
        "Nombres pairs : " + pairs;
}



// =====================================
// EXERCICE 3 : Manipulation du DOM
// =====================================

// Sélectionner le titre
let titre = document.getElementById("titreCours");

// Sélectionner la section
let section = document.getElementById("cours");

// Sélectionner les paragraphes
let paragraphes = section.getElementsByTagName("p");

// Sélectionner les classes chapitre
let chapitres = document.getElementsByClassName("chapitre");

// Sélectionner le chapitre important
let important = document.querySelector(".chapitre.important");

// Sélectionner tous les chapitres
let tousLesChapitres = document.querySelectorAll(".chapitre");

// Afficher le nombre de paragraphes
console.log("Nombre de paragraphes :", paragraphes.length);


// Modifier la présentation
document.getElementById("modifier").addEventListener("click", function() {

    titre.textContent = "JavaScript : une page interactive";

    // Changer la couleur des chapitres
    for (let i = 0; i < tousLesChapitres.length; i++) {
        tousLesChapitres[i].style.color = "blue";
    }

    // Mettre le chapitre important en gras
    important.style.fontWeight = "bold";

    // Modifier le bouton
    this.textContent = "Présentation modifiée";

});


// =====================================
// EXERCICE 4 : Evénements et this
// =====================================

// Mettre en évidence le champ
function mettreEnEvidence(champ) {

    champ.style.backgroundColor = "lightyellow";
}


// Rétablir le style
function retablirStyle(champ) {

    champ.style.backgroundColor = "";
}


// Afficher la saisie en temps réel
function afficherSaisie(champ) {

    document.getElementById("apercu").textContent =
        "Bonjour " + champ.value;
}


// Changer la couleur au survol
function changerCouleur(element) {

    element.style.color = "red";
}


// Rétablir la couleur initiale
function retablirCouleur(element) {

    element.style.color = "";
}


// Sélectionner le texte avec addEventListener
document.getElementById("selectionner").addEventListener("click", function() {

    let champ = document.getElementById("prenom");

    champ.focus();

    champ.select();

});



// =====================================
// EXERCICE 5 : Formulaire et objet
// =====================================

const formulaire = document.forms["inscription"];

formulaire.addEventListener("submit", function(event) {

    // Empêcher le rechargement de la page
    event.preventDefault();

    // Récupérer les valeurs
    let nom = formulaire.elements["nom"].value.trim();

    let profession = formulaire.elements["profession"].value;

    let sexe = formulaire.querySelector(
        'input[name="sexe"]:checked'
    );

    let langues = formulaire.querySelectorAll(
        'input[name="langue"]'
    );

    let message = document.getElementById("message");

    let recap = document.getElementById("recap");

    message.textContent = "";
    recap.textContent = "";


    // Vérifier le nom
    if (nom.length < 3) {

        message.textContent =
            "Erreur : le nom doit contenir au moins 3 caractères.";

        formulaire.elements["nom"].focus();

        return;
    }


    // Vérifier la profession
    if (profession === "") {

        message.textContent =
            "Erreur : choisissez une profession.";

        return;
    }


    // Vérifier le sexe
    if (sexe === null) {

        message.textContent =
            "Erreur : choisissez votre sexe.";

        return;
    }


    // Vérifier les langues
    let languesChoisies = [];

    for (let i = 0; i < langues.length; i++) {

        if (langues[i].checked) {

            languesChoisies.push(langues[i].value);

        }
    }


    if (languesChoisies.length === 0) {

        message.textContent =
            "Erreur : choisissez au moins une langue.";

        return;
    }


    // Créer l'objet inscription
    let inscription = {

        nom: nom,

        profession: profession,

        sexe: sexe.value,

        langues: languesChoisies.join(", "),

        presenter: function() {

            return "Nom : " + this.nom +
                "\nProfession : " + this.profession +
                "\nSexe : " + this.sexe +
                "\nLangues : " + this.langues;

        }

    };


    // Afficher le récapitulatif
    recap.textContent = inscription.presenter();

});