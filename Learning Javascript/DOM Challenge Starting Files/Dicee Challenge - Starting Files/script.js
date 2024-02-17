'use strict';
let rollDice_player1 = Math.floor(Math.random()*6) + 1;
let rollDice_player2 = Math.floor(Math.random()*6) + 1;

let player1_img_link = "./images/dice" + rollDice_player1 + ".png";
let player2_img_link = "./images/dice" + rollDice_player2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", player1_img_link);
document.querySelectorAll("img")[1].setAttribute("src", player2_img_link);


if(rollDice_player1 > rollDice_player2) {
    document.querySelector(".winner-name").innerHTML = "Player 1 wins";
}
else if(rollDice_player1 < rollDice_player2) {
    document.querySelector(".winner-name").innerHTML = "Player 2 wins";
}
else {
    document.querySelector(".winner-name").innerHTML = "DRAW!!";
}




// // for player 1.
// if(rollDice_player1 === 1) {
//     document.querySelectorAll("img")[0].setAttribute("src", "./images/dice1.png");
// }
// else if(rollDice_player1 === 2) {
//     document.querySelectorAll("img")[0].setAttribute("src", "./images/dice2.png");
// }
// else if(rollDice_player1 === 3) {
//     document.querySelectorAll("img")[0].setAttribute("src", "./images/dice3.png");
// }
// else if(rollDice_player1 === 4) {
//     document.querySelectorAll("img")[0].setAttribute("src", "./images/dice4.png");
// }
// else if(rollDice_player1 === 5) {
//     document.querySelectorAll("img")[0].setAttribute("src", "./images/dice5.png");
// }
// else if(rollDice_player1 === 6) {
//     document.querySelectorAll("img")[0].setAttribute("src", "./images/dice6.png");
// }

// // for player 2.
// if(rollDice_player2 === 1) {
//     document.querySelectorAll("img")[1].setAttribute("src", "./images/dice1.png");
// }
// else if(rollDice_player2 === 2) {
//     document.querySelectorAll("img")[1].setAttribute("src", "./images/dice2.png");
// }
// else if(rollDice_player2 === 3) {
//     document.querySelectorAll("img")[1].setAttribute("src", "./images/dice3.png");
// }
// else if(rollDice_player2 === 4) {
//     document.querySelectorAll("img")[1].setAttribute("src", "./images/dice4.png");
// }
// else if(rollDice_player2 === 5) {
//     document.querySelectorAll("img")[1].setAttribute("src", "./images/dice5.png");
// }
// else if(rollDice_player2 === 6) {
//     document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png");
// }


// if(rollDice_player1 > rollDice_player2) {
//     document.querySelector(".winner-name").innerHTML = "Player 1 Wins!";
// }
// else if(rollDice_player1 < rollDice_player2) {
//     document.querySelector(".winner-name").innerHTML = "Player 2 Wins!";
// }
// else  {
//     document.querySelector(".winner-name").innerHTML = "Draw...";
// }