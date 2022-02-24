let nbTurn = 10
function count() {
    if (nbTurn > 0) {
        let compteurSection = document.querySelector("#nb-turn")
        nbTurn -=1
        compteurSection.innerHTML = "Il vous reste : " + nbTurn + " essai(s)";
        console.log(nbTurn)
        if (nbTurn == 0) {
            compteurSection.innerHTML = "Vous avez perdu";
        }
    }
    
}

let bttn = document.querySelector("#test")

bttn.onclick = count;