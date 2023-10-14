console.log("JS Working");
let firstCard = prompt("No between 2-11 : ");
let secondCard = prompt("No between 2-11 : ");
firstCard = Number.parseInt(firstCard);
secondCard = Number.parseInt(secondCard);
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;


console.log("Sum is : ", sum);

if (sum <= 20) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  //=== means "strictly equal to"
  console.log("WOHOOOOO! You got a Blackjack!");
  hasBlackjack = true;
} else {
  console.log("I aint playingggg anymore!!!!");
  isAlive = false;
}
console.log(isAlive, hasBlackjack)
