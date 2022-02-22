// Définition des couleurs possibles
const colorsArray = ["blue", "red", "green", "yellow", "purple"];

// Fonction de création de la séquence aléatoire pour l'ordinateur
function computerRandomColors() {
    //Initialisation de la séquence
    const colorsSelectedArray = [];

    // Ajout de 4 couleurs
    for (let i = 0; i < 4; i++) {
        const position = Math.floor(Math.random() * 5); // on multiplie par 5 parce qu'on veut un chiffre entre 0 et 5, on peut mettre aussi colorsArray.length
        
        // Récupère la couleur à la position aléatoire et ajoute la couleur à la séquence
        colorsSelectedArray.push(colorsArray[position]);
    }

    // Renvoi la séquence
    return colorsSelectedArray;
}

// Récupération de la séquence de l'ordinateur
const computerChoice = computerRandomColors();
console.log("Le choix de l'ordinateur est : ");
console.log(computerChoice);


// Fonction de récupération de la séquence de l'utilisateur
function playerColorChoice() {
    let playerChoicesArray = [];
    let i = 0;

    while (i < 4) {
        let choice = prompt("Choisissez une couleur parmi celles-ci : blue, red, green, yellow, purple");
        choiceIsColor = false;

        for (let i = 0; i < 5; i++) {
            if (choice == colorsArray[i]) {
                choiceIsColor = true;
            }
        }

        if (choiceIsColor) {
            console.log("La couleur est ok")
            playerChoicesArray.push(choice);
            i++;
        }
        else {
            console.log("Ce choix n'est pas disponible !")
        }
    }

    return playerChoicesArray;
}

//Je lance la fonction du choix des couleurs du joueur
let playerGuess = playerColorChoice()
console.log("Le choix du joueur est :")
console.log(playerGuess)


//Fonction pour comparer les couleurs du joueur et celles de l'ordinateur
function compareResults(computer, player) {
    let copyComputer = [...computer] // copier la variable de l'ordinateur pour ne pas modifier l'originale
    let guessAgain = []
    let goodGuess = 0
    let badGuess = 0

    for (let i = 0; i < 4; i++) {
        if (copyComputer[i] == player[i]) {
            goodGuess += 1;
            copyComputer[i] = 0; //pour changer la couleur en 0 si elle est vérifiée
        }

        else if (copyComputer[i] != player[i]) {
            let idx = copyComputer.indexOf(player[i]);
            if (idx === -1) {
                badGuess += 1
            }
            else {
                if (idx != -1) {
                    guessAgain.push(idx);
                    idx = copyComputer.indexOf(player[i], idx + 1);
                }
            }
        }
    }

    if (goodGuess == 4) {
        console.log("Vous avez trouvé la bonne combinaison, bravo !")
    }
    else if (goodGuess != 4 && guessAgain.length != 0) {
        console.log("Vous avez", guessAgain.length, "couleur.s mal placée.s :")
        console.log("Vous avez", goodGuess, "couleur.s bien placée.s.")
        console.log("Vous avez", badGuess, "couleur.s qui n'existe.nt pas.")

    }
    else if (goodGuess != 4) {
        console.log("Vous avez", goodGuess, "couleur.s bien placée.s.")
        console.log("Vous avez", badGuess, "couleur.s qui n'existe.nt pas.")
    }

}

// Je lance la fonction de comparaison des choix
console.log(compareResults(computerChoice, playerGuess))

