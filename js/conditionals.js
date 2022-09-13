"use strict";
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color === "blue") {
//         return "blue is the color of the sky";
//     } else if (color === "red") {
//         return "Strawberries are red";
//     } else if (color === "indigo") {
//         return "I don't know anything about indigo";
//     } else if (color === "orange") {
//         return "basketballs are orange";
//     } else if (color === "yellow") {
//         return "I think the sun is yellow";
//     } else if (color === "green") {
//         return "green is my favorite color";
//     } else {
//         return color + " is the worst color!!!";
//     }
// }
// console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


// let color = prompt("What is your favorite color?");
//
//     switch (color) {
//         case "blue":
//             alert("blue is the color of the sky");
//             break;
//         case "red":
//             alert("Strawberries are red");
//             break;
//         case "indigo":
//             alert("I don't know anything about indigo");
//             break;
//         case "orange":
//             alert("basketballs are orange");
//             break;
//         case "yellow":
//             alert("I think the sun is yellow");
//             break;
//         case "green":
//             alert("green is my favorite color");
//             break;
//         default:
//             alert(color + " is the worst color");
//             break;
//     }
//
// console.log(color);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function analyzeColor() {
//     let color = prompt("What is your favorite color?");
//     console.log(color);
//     switch (color) {
//         case "blue":
//             alert("blue is the color of the sky");
//             break;
//         case "red":
//             alert("Strawberries are red");
//             break;
//         case "indigo":
//             alert("I don't know anything about indigo");
//             break;
//         case "orange":
//             alert("basketballs are orange");
//             break;
//         case "yellow":
//             alert("I think the sun is yellow");
//             break;
//         case "green":
//             alert("green is my favorite color");
//             break;
//         default:
//             alert(color + " is the worst color");
//             break;
//     }
//     return color
// }
// console.log(analyzeColor());

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckynum, retail) {
//     console.log(luckynum)
//     if(luckynum === 0) {
//         return retail
//     } else if(luckynum === 1) {
//         return retail - (.1 * retail);
//     } else if(luckynum === 2) {
//         return retail - (.25 * retail);
//     } else if(luckynum === 3) {
//         return retail - (.35 * retail);
//     } else if(luckynum === 4) {
//         return retail - (.5 * retail);
//     } else {
//         return retail - retail;
//     }
// }
//
// console.log(calculateTotal(1, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// let totalBill = parseFloat(prompt("What was your total bill?"));
// function calculateTotal(luckynum, retail) {
//     alert("Your Lucky Number: " + luckynum);
//     if(luckynum === 0) {
//         alert("You didn't save anything, your bill was: $" + retail + ", and still is!")
//     } else if(luckynum === 1) {
//         alert("Your bill was: $" + retail + ", but is now: $" + (retail - (.1 * retail)));
//     } else if(luckynum === 2) {
//         alert("Your bill was: $" + retail + ", but is now: $" + (retail - (.25 * retail)));
//     } else if(luckynum === 3) {
//         alert("Your bill was: $" + retail + ", but is now: $" + (retail - (.35 * retail)));
//     } else if(luckynum === 4) {
//         alert("Your bill was: $" + retail + ", but is now: $" + (retail - (.5 * retail)));
//     } else {
//         alert("Your bill was: $" + retail + ", but is now: $0.00!!!!");
//     }
// }
// calculateTotal(luckyNumber,totalBill);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// ask the user if they would like to enter a number
// if ok --- prompt the user for a number
        //use 3 seperate alerts to tell user
                // if num is odd or even
                // what num + 100 is
                //if num is positive or negative
        //if entered = not a number give alert to inform of wrong data entry
let wouldYouLikeToPlay = confirm("Would you like to enter a number?");
function numberCheck(x) {
    if (wouldYouLikeToPlay === true){
        let letsPlay = parseFloat(prompt("Input a Number"));
        if (isNaN(wouldYouLikeToPlay)) {
        alert("This is not a number Guy!");
        } else {
            (letsPlay % 2 == 0) ? alert("Your number is even Jack!"): alert("Your number is odd Bob!");
            (letsPlay >= 0) ? alert("Your number is positive!"): alert("Your number is negative!")
            alert("This is your number added to 100: " + (letsPlay +100))
        }
    }
        else {
        alert("I didn't want to play anyway!")
    }
}
numberCheck(wouldYouLikeToPlay);