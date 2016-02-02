/**
 * Created by Tamra on 2/2/2016.
 */
// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
//////////////////////////////////////////////////////////////////////////////
// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(9);

// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Tamra");
//////////////////////////////////////////////////////////////////
var functionName = function( ) {
    // code code code
    // code code code
    // (more lines of code)
};


/////////////////////////////////////////////////////////////////////
// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)
var foodDemand = function (food){

    console.log("I want to eat" + " " + food)
};
foodDemand("Bananas");


////////////////////////// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// FIXED Badly written function with syntax errors!

var greeting = function (name) {
    console.log("Hello" + " " + name);
};

greeting("Tamra");
///////////////////////////////////
var orangeCost = function (cost) {
    var totalCost = cost * 5;
    console.log(totalCost)
};
orangeCost(5);
////////////// RETURN ///////////////////////
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(15);
console.log(newNumber);
//////////////////////////////////
// Define quarter here.

var quarter = function (number) {
    return number / 4;
};

//Use quarter in this if statement, and get it to return true
if (quarter(12) % 3 === 0 ) {
    console.log("The statement is true");
} else {
    console.log("The statement is false");
}
/////////////////// FUNCTIONS WITH 2 PARAMETERS //////////////////////////////
// Write your function starting on line 3

var perimeterBox = function (length, width) {
    var perimeter = length + length + width + width;
    console.log(perimeter);
};

perimeterBox(1, 1);
/////////////// LOCAL VS GLOBAL VARS /////////////////
//Change line 4 to use the var keyword. Notice that the value of my_number in the function is now 14 and outside the function is 7.
//
//Using my_number without the var keyword refers to the global variable that has already been declared outside the function in line 1. However, if you use the var keyword inside a function, it declares a new local variable that only exists within that function.

var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2; //with var it's local without var it refers to the already set global variable
    console.log("Inside the function my_number is: ");
    console.log(my_number);
};

timesTwo(7);

console.log("Outside the function my_number is: ");
console.log(my_number);


/////////////// FUNCTION RECAP /////////////
var nameString = function (name) {
    return "Hi, I am" + " " + name;
};

var intro = nameString("Tamra");
console.log(intro);


////////////////////////////////// FUNCTIONS & IF / ELSE
var sleepCheck = function(numHours) {
    if(numHours >= 8){
        return "You're getting plenty of sleep! Maybe even too much!";
    } else {
        return "Get some more shut eye!";
    }
};

yourAnswer = sleepCheck(8);
console.log(yourAnswer);

/////////////////////////////////// ROCK, PAPER, ScISSORS
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
