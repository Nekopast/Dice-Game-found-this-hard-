const image = document.getElementById("dices");

const button = document.getElementById("Roll");

const score1 = document.getElementById("score");

let images = ["diceImages/dice-one.png",
"diceImages/dice-two.png",
"diceImages/dice-three.png",
"diceImages/dice-four.png",
"diceImages/dice-five.png",
"diceImages/dice-six.png"];
let dice = document.querySelectorAll("img");

let currentScore = 0;

button.addEventListener("click", () => {
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    image.src = images [Math.floor(Math.random()*6)];
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
    }
)}
)

// if (Roll != 1) {
//     currentScore += Roll;
//     score1.textContent = currentScore;
// } else {

// }