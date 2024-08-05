/*first dicee*/

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var firstImage = document.querySelectorAll("img")[0];
firstImage.setAttribute("src",randomImage1);

/*second dicee*/

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var secondImage = document.querySelectorAll("img")[1];
secondImage.setAttribute("src",randomImage2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}