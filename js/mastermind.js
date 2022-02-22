/* Explication Damien

const userChoice = [];

blueBttn.onclick = setBlueColor;
redBttn.onclick = setRedColor;


function setBlueColor(){
    userChoice.push("blue");
}

*/




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

// Sélectionner chaque couleur que le joueur peut choisir selon son sélecteur
const blueBttn = document.querySelector("blueButton");
const redBttn = document.querySelector("redButton");
const greenBttn = document.querySelector("greenButton");
const yellowBttn = document.querySelector("yellowButton");
const purpleBttn = document.querySelector("purpleButton");

// Bouton reset
const resetBttn = document.querySelector("#resetBttnBox");

// Bouton valider 
const validate = document.querySelector("#okButton")

// faire autant de fonction qu'il y a de couleur puis les ajotuer dans la séquence qu'on a déclaré avant en global, si y a déjà 4 plus possible de cliquer 

// Fonction de récupération de la séquence de l'utilisateur (plus lieu d'être)
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
    let copyPlayer = [...player]
    let i = 0
    let guessAgain = 0
    let goodGuess = 0

    while (i < copyPlayer.length) {
        if (copyComputer[i] == copyPlayer[i]) {
            goodGuess += 1;
            copyPlayer.splice(i, 1);
            copyComputer.splice(i, 1);
            console.log(copyComputer)
            console.log(copyPlayer)
        }
        else {
            i++
        }
    }

    i = 0
    while (i < copyPlayer.length) {
        let positionColor = copyComputer.indexOf(copyPlayer[i]);
        if (positionColor > -1) {
            guessAgain += 1
            copyPlayer.splice(i, 1);
            copyComputer.splice(positionColor, 1); // Suppression de la couleur à l'emplacement trouvé
        }
        else {
                i++
            }
        }

    if (goodGuess == 4) {
        console.log("Vous avez trouvé la bonne combinaison, bravo !")
    }
    else {
        console.log("Vous avez", guessAgain, "couleur.s mal placée.s :")
        console.log("Vous avez", goodGuess, "couleur.s bien placée.s.")
    }
    
}

// Je lance la fonction de comparaison des choix
console.log(compareResults(computerChoice, playerGuess))

