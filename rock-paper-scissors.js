/**
 * Created by Tamra on 2/2/2016.
 */
/////////////////////////////////// ROCK, PAPER, SCISSORS
//Rock paper scissors is a classic 2 player game. Each player chooses either rock, paper or scissors. The possible outcomes:
//
//    Rock destroys scissors.
//    Scissors cut paper.
//    Paper covers rock.
//    Our code will break the game into 3 phases:
//    a. User makes a choice
//b. Computer makes a choice
//c. A compare function will determine who wins

//users choice
var userChoice = prompt("Would you like rock, paper or scissors?").toLowerCase();
console.log(userChoice);

//computers choice
var computerChoice = Math.floor((Math.random()*9)+1);
 if (computerChoice < 4) {
    computerChoice = "rock";
} else if (computerChoice > 6) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log(computerChoice);


//the results
var theResults = function compare(user, computer) {
    var user = userChoice;
    //var user = "paper";
    var computer = computerChoice;
    //var computer = "rock";
    if (user === computer) {
        return "It's a tie.";
    } else if (user === "rock") {
        if (computer === "scissors") {
            return "Rock wins";
        } else {
            return "Paper wins";
        }
    } else if (user === "paper") {
        if (computer === "scissors") {
            return "Scissors win";
        } else {
            return "Paper wins";
        }
    } else if (user === "scissors") {
        if (computer === "rock") {
            return "Rock wins";
        } else {
            return "Scissors win";
        }
    }
};
console.log(theResults());
