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

var usersChoice = prompt("Would you like rock, paper or scissors?").toLowerCase();
console.log(usersChoice);


var computersChoice = function computer(){
    //http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
    var randomNum = Math.floor((Math.random()*9)+1);
    console.log(randomNum);
    if (randomNum < 4) {
        return "rock";
    } if (randomNum > 6) {
        return "paper";
    } else return "scissors";
};

console.log(computersChoice());
