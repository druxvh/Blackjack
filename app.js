console.log("JS Working");
let firstCard = 1//prompt("No between 2-11 : ");
let secondCard =2 //prompt("No between 2-11 : ");
firstCard = Number.parseInt(firstCard);
secondCard = Number.parseInt(secondCard);
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = ""


console.log("Sum is : ", sum);

if (sum <= 20) {
  message = ("Do you want to draw a new card?");
} else if (sum === 21) {
  //=== means "strictly equal to"
  message = ("WOHOOOOO! You got a Blackjack!");
  hasBlackjack = true;
} else {
  message = ("I aint playingggg anymore!!!!");
  isAlive = false;
}
console.log(isAlive, hasBlackjack)
console.log(message)
