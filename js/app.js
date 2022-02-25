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
        const position = Math.floor(Math.random() * 5); 

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

// Pour pouvoir append ensuite le choix du joueur dans la bonne case
const boxColor1 = document.querySelector(".boxChoiceColor:nth-child(1)");
const boxColor2 = document.querySelector(".boxChoiceColor:nth-child(2)");
const boxColor3 = document.querySelector(".boxChoiceColor:nth-child(3)");
const boxColor4 = document.querySelector(".boxChoiceColor:nth-child(4)");
const boxArray = [boxColor1, boxColor2, boxColor3, boxColor4]

// Création des fonctions de choix des couleurs qui seront ensuite append dans le tableau du choix du joueur
function setBlueColor() {
    if (playerChoice.length < 4) {

        // On ajoute la couleur choisie au tableau du choix du joueur
        playerChoice.push(blue);
        let i = 0;
        while (i < playerChoice.length) {

            // On attribue la couleur choisie à la case définie plus haut
            boxArray[i].style.background = playerChoice[i];
            i++;
        }
    }
    console.log(playerChoice)
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

// Appel des fonctions couleurs définies selon le bouton choisi par le joueur
blueBttn.onclick = setBlueColor
redBttn.onclick = setRedColor;
greenBttn.onclick = setGreenColor;
yellowBttn.onclick = setYellowColor;
purpleBttn.onclick = setPurpleColor;
console.log(playerChoice)

// Sélectionner le bouton que peut choisir le joueur selon son sélecteur
const clearBttn = document.querySelector("#clearBttnBox");
const validateBttn = document.querySelector("#okButton");
const resetBttn = document.querySelector("#resetBttn")

// Variable pour compter le nombre de tour d'une partie
let nbTurn = 10

//Fonction pour comparer les couleurs du joueur et celles de l'ordinateur
function compareResults(computer, player) {

    // Copier les tableaux du joueur et du computer pour ne pas modifier le choix original
    let copyComputer = [...computer]
    let copyPlayer = [...player]
    let i = 0

    // Couleurs présentes mais mal placées
    let guessAgain = 0

    // Couleurs présentes et mal placées
    let goodGuess = 0

    // Comparaison des couleurs identiques, on supprime la couleur à l'index identique pour le joueur et le computer
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

    // Après avoir comparé les couleurs identiques aux mêmes index, on vérifie ceux qui sont présents dans la liste du joueur et du computer
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

    // Définit le nombre de tour par partie
    if (nbTurn > 0) {

        // Sélectionner le paragraphe qui permet d'afficher le nombre d'essais restants
        let compteurSection = document.querySelector("#nb-turn")

        // Sélectionner la div qui permet d'afficher les résultats
        let displayAllResults = document.querySelector(".results")

        // Création d'une div en lui attribuant une class, elle contient les résultats par tour
        let divResult = document.createElement("div")
        divResult.className = "divResults"
        displayAllResults.appendChild(divResult)

        // Création d'un paragraphe qui affiche les résultats textuels des couleurs bien placées ou mal placées
        let results = document.createElement("p")
        divResult.appendChild(results)
        results.className = "resultats"
        results.style.color = "green"
        results.style.fontSize = "24px"

        // Si toutes les couleurs du joueur sont identiques aux couleurs du computer
        if (goodGuess == 4) {

            // On affiche la phrase gagnante à la place du nombre d'essais restants
            compteurSection.innerHTML = "Vous avez trouvé la bonne combinaison !";

            // Dans la partie résultats, on affiche les couleurs bien ou mal placées
            results.innerHTML = "Bravo !";

            // On déconnecte le bouton valider afin qu'il ne soit plus cliquable
            validateBttn.disabled = true;
            console.log("Vous avez trouvé la bonne combinaison, bravo !")
        }

        // Si les couleurs du joueur et de l'ordinateur diffèrent
        else {

            // On enlève un tour de jeu
            nbTurn -= 1

            // On affiche le nombre de tous restants
            compteurSection.innerHTML = "Il vous reste : " + nbTurn + " essai(s)";

            // Dans la partie résultats, on affiche les couleurs bien ou mal placées
            results.innerHTML = goodGuess + "<span> " + guessAgain + " </span>";

            console.log("Vous avez", guessAgain, "couleur.s mal placée.s :")
            console.log("Vous avez", goodGuess, "couleur.s bien placée.s.")
            console.log(results)
        }
        console.log(nbTurn)

        // Si les 10 tours de jeu sont passés et que le joueur n'a pas trouvé la solution
        if (nbTurn == 0) {

            // On affiche la phrase qui indique qu'il a perdu
            compteurSection.innerHTML = "Vous avez perdu"

            // Dans la partie résultats, on indique la ligne de la solution qu'il fallait trouver
            results.innerHTML = "Solution"
            results.style.paddingBottom = "55px"
            results.style.fontSize = "20px"
            results.style.color = "black"
            results.style.fontWeight = "bold"

            // Appel de la fonction qui permet d'afficher le choix du computer qu'il fallait trouver
            computerResult()

            // On déconnecte le bouton valider afin qu'il ne soit plus cliquable
            validateBttn.disabled = true;
            console.log(results)
        }
    }

    console.log("Tour", nbTurn)
}

// Fonction pour afficher le résultat de l'ordinateur qu'il fallait trouver
function computerResult() {
    resetColors()
    let i = 0;
    while (i < computerChoice.length) {
        boxArray[i].style.background = computerChoice[i];
        i++;
    }
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

// Appel de la fonction reset pour effacer le choix des couleurs du joueur avant validation
clearBttn.onclick = resetColors;

// Appel de la fonction valider pour confirmer les couleurs choisies
validateBttn.onclick = validateColors;

// Fonction pour relancer une nouvelle partie
resetBttn.onclick = function () {
    location.reload();
}