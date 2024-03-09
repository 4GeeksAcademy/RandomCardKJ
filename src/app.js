/* eslint-disable */
import "bootstrap";
import "./style.css";

function generateCard() {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = [
    { symbol: "\u2665", color: "red" },
    { symbol: "\u2666", color: "red" },
    { symbol: "\u2660", color: "black" },
    { symbol: "\u2663", color: "black" }
  ];
  const chosenSuit = suits[Math.floor(Math.random() * suits.length)];
  const cardNumber = numbers[Math.floor(Math.random() * numbers.length)];

  const cardElement = document.querySelector(".card");
  cardElement.style.setProperty("--card-suit", `"${chosenSuit.symbol}"`);
  cardElement.className = "card " + chosenSuit.color;

  document.querySelector(".number").innerHTML = cardNumber;
}

window.onload = function() {
  //write your code here
  console.log("Everything is working!");
  generateCard();
  document
    .getElementById("generateCardButton")
    .addEventListener("click", generateCard);
};
