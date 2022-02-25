// Définition des gammes de couleurs
const blue = "#5277B7";
const red = "#B5173C";
const green = "#528E7C";
const yellow = "#FCEA4A";
const purple = "#8A4FFF";

// Définition des couleurs possibles
const colorsArray = [blue, red, green, yellow, purple];

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

// Définition de la séquence du joueur
const playerChoice = [];

// Sélectionner chaque couleur que le joueur peut choisir selon son sélecteur
const blueBttn = document.querySelector("#blueButton");
const redBttn = document.querySelector("#redButton");
const greenBttn = document.querySelector("#greenButton");
const yellowBttn = document.querySelector("#yellowButton");
const purpleBttn = document.querySelector("#purpleButton");

// Append player choice to the right box
const boxColor1 = document.querySelector(".boxChoiceColor:nth-child(1)");
const boxColor2 = document.querySelector(".boxChoiceColor:nth-child(2)");
const boxColor3 = document.querySelector(".boxChoiceColor:nth-child(3)");
const boxColor4 = document.querySelector(".boxChoiceColor:nth-child(4)");
const boxArray = [boxColor1, boxColor2, boxColor3, boxColor4]

// Les fonctions couleurs
function setBlueColor() {
    if (playerChoice.length < 4) {
        playerChoice.push(blue);
        let i = 0;
        while (i < playerChoice.length) {
            boxArray[i].style.background = playerChoice[i];
            i++;
        }
    }
    console.log(playerChoice) // pour afficher la liste
}

function setRedColor() {
    if (playerChoice.length < 4) {
        playerChoice.push(red);
        let i = 0;
        while (i < playerChoice.length) {
            boxArray[i].style.background = playerChoice[i];
            i++;
        }
    }
    console.log(playerChoice);

}

function setGreenColor() {
    if (playerChoice.length < 4) {
        playerChoice.push(green);
        let i = 0;
        while (i < playerChoice.length) {
            boxArray[i].style.background = playerChoice[i];
            i++;
        }
    }
    console.log(playerChoice);
}

function setYellowColor() {
    if (playerChoice.length < 4) {
        playerChoice.push(yellow);
        let i = 0;
        while (i < playerChoice.length) {
            boxArray[i].style.background = playerChoice[i];
            i++;
        }
    }
    console.log(playerChoice);
}

function setPurpleColor() {
    if (playerChoice.length < 4) {
        playerChoice.push(purple);
        let i = 0;
        while (i < playerChoice.length) {
            boxArray[i].style.background = playerChoice[i];
            i++;
        }
    }
    console.log(playerChoice);
}

// Appel des boutons choix des couleurs onclick
blueBttn.onclick = setBlueColor
redBttn.onclick = setRedColor;
greenBttn.onclick = setGreenColor;
yellowBttn.onclick = setYellowColor;
purpleBttn.onclick = setPurpleColor;
console.log(playerChoice)

// Sélectionner le bouton que peut choisir le joueur
const clearBttn = document.querySelector("#clearBttnBox");
const validateBttn = document.querySelector("#okButton");
const resetBttn = document.querySelector("#resetBttn")

// Variable pour compter le nombre de tour
let nbTurn = 10

//Fonction pour comparer les couleurs du joueur et celles de l'ordinateur
function compareResults(computer, player) {
    let copyComputer = [...computer]
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
            copyComputer.splice(positionColor, 1);
        }
        else {
            i++
        }
    }

    if (nbTurn > 0) {
        let compteurSection = document.querySelector("#nb-turn")

        // let consoleResult = document.querySelector("#display-results")
        let displayAllResults = document.querySelector(".results")
        let divResult = document.createElement("div")
        divResult.className = "divResults"
        displayAllResults.appendChild(divResult)
        let results = document.createElement("p")
        divResult.appendChild(results)

        results.className = "resultats"
        results.style.color = "green"
        results.style.fontSize = "24px"

        if (goodGuess == 4) {
            compteurSection.innerHTML = "Vous avez trouvé la bonne combinaison, bravo !";

            // consoleResult.appendChild(results);
            results.innerHTML = goodGuess + "<span> " + guessAgain + " </span>";

            validateBttn.disabled = true;
            console.log("Vous avez trouvé la bonne combinaison, bravo !")
        }
        else {
            nbTurn -= 1
            compteurSection.innerHTML = "Il vous reste : " + nbTurn + " essai(s)";

            // consoleResult.appendChild(results);
            results.innerHTML = goodGuess + "<span> " + guessAgain + " </span>";

            console.log("Vous avez", guessAgain, "couleur.s mal placée.s :")
            console.log("Vous avez", goodGuess, "couleur.s bien placée.s.")
        }

        console.log(nbTurn)
        if (nbTurn == 0) {
            compteurSection.innerHTML = "Vous avez perdu";
        }
    }

    console.log("Tour", nbTurn)
}

// Fonction pour effacer le choix des couleurs
function resetColors() {
    if (playerChoice != 0) {
        playerChoice.length = 0;
        let i = 0;
        while (i < boxArray.length) {
            boxArray[i].style.background = "#1F1F1F";
            i++;
        }
    }
    console.log(playerChoice);
}

// Fonction pour valider le résultat
function validateColors() {
    if (playerChoice.length == 4) {
        let mainDiv = document.querySelector(".consoleBoxes");
        let newDiv = mainDiv.cloneNode(true);
        mainDiv.after(newDiv);
        console.log(newDiv);
        compareResults(computerChoice, playerChoice);
        resetColors();
    }
}

// Appel de la fonction reset
clearBttn.onclick = resetColors;

// Appel de la fonction valider
validateBttn.onclick = validateColors;

// Fonction pour relancer une nouvelle partie
resetBttn.onclick = function () {
    location.reload();
}