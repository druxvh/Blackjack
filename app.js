console.log("JS Working");
let firstCard = 5 //prompt("No between 2-11 : ");
let secondCard = 5 //prompt("No between 2-11 : ");
firstCard = Number.parseInt(firstCard);
secondCard = Number.parseInt(secondCard);
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let message_el = document.getElementById("messageEl");
let sum_el = document.getElementById("sumEl");
let cards_el = document.getElementById("cardsEl");



function startGame() {
  renderGame()
}


function renderGame() {
  cards_el.textContent = "Cards : " + firstCard + ", " + secondCard;
  sum_el.textContent = "Sum : " + sum;
  
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    //=== means "strictly equal to"
    message = "You got a Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You loser!";
    isAlive = false;
  }
  message_el.textContent = message;
}

function newCard() {
  console.log("Nw card")
let new_card = 4;
sum += new_card


cards_el.textContent += ", " + new_card;

renderGame()

}