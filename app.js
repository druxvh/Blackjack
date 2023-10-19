console.log("JS Working");
let cards = []; //array ordered lists
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let message_el = document.getElementById("messageEl");
let sum_el = document.getElementById("sumEl");
let cards_el = document.getElementById("cardsEl");

let player = {
  name: "Druv",
  chips: 120
}
let playerInfo = document.getElementById("player-info")
playerInfo.textContent = player.name + ": $" + player.chips

function startGame() {
 isAlive = true
 let firstCard = getRandomCard(); 
 let secondCard = getRandomCard();
 cards = [firstCard , secondCard]
 sum = firstCard + secondCard
 renderGame();

}

function renderGame() { 
  cards_el.textContent = "Cards : ";
  sum_el.textContent = "Sum : " + sum;

  for (i = 0; i < cards.length; i++) {
    cards_el.textContent += cards[i] + " ";
  }

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
    // console.log("Nw card")
    if (isAlive === true && hasBlackjack === false){

      let new_card = getRandomCard(); 
      let cardCost = 50
    
      sum += new_card;
      cards.push(new_card);
     // playerInfo.textContent = player.name + ": $" + (player.chips - cardCost)
    
      renderGame();
      // cards_el.textContent += ", " + cards[2]; //Below renderGame() because above the function it would reperform the entire function and will give priority to renderGame function cards-el
    } 
  }

  


function getRandomCard() {
  let randomNo = Math.floor(Math.random()*13) +1 ; //Math random gives a random no between 0 to 1 but inclusive of 1 (0.0000-0.9999), math floor floors the no (removes the decimal value)

  if (randomNo === 1) {
    return 11;
  } else if (randomNo > 10) {
    return 10;
  } else {
    return randomNo
  }



}
