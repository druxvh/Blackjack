console.log("JS Working");
let firstCard = prompt("No between 2-11 : ");
let secondCard = prompt("No between 2-11 : ");
firstCard = Number.parseInt(firstCard);
secondCard = Number.parseInt(secondCard);
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let message_el = document.getElementById("messageEl");
let sum_el = document.getElementById("sumEl");
let cards_el = document.getElementById("cardsEl");

console.log("Sum is : ", sum);

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    //=== means "strictly equal to"
    message = "WOHOOOOO! You got a Blackjack!";
    hasBlackjack = true;
  } else {
    message = "I aint playingggg anymore!!!!";
    isAlive = false;
  }
  cards_el.textContent += " " + firstCard + ", " + secondCard;
  sum_el.textContent += " " + sum;
  message_el.textContent = message;
  // console.log(isAlive, hasBlackjack)
  console.log(message);
}
