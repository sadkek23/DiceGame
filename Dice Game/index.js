var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceNumber = "dice" + randomNumber1 + ".png"; // dice1-6.png

var randomImageDiceNumber1 = "images/" + randomDiceNumber; //images/dice1-6.png

var image1 = document.querySelectorAll("img")[0]; 

image1.setAttribute("src", randomImageDiceNumber1); 

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceNumber2 = "dice" + randomNumber2 + ".png"; // dice1-6.png

var randomImageDiceNumber2 = "images/" + randomDiceNumber2; //images/dice1-6.png

var image2 = document.querySelectorAll("img")[1]; 

image2.setAttribute("src", randomImageDiceNumber2); 

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}

else{document.querySelector("h1").innerHTML = "Draw 🏳️";}