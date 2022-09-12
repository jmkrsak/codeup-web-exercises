// This is just for practice!!!

/* Again this is just for practice!!!

 */

/* 3 Primitive Data Types
    Boolean / Number / String

    2 Other Primitive Data Types
    Undefined / Null
 */

// Exercises
//
// Identify the data type of the following values:
//
//
// 99.9
//      number
// "false"
//      string
// false
//      boolean
// '0'
//      string
// 0
//      number
// true
//      boolean
// 'true'
//      string

// What data type would best represent:
//
// A term or phrase typed into a search box?
//      string
// If a user is logged in?
//      boolean
// A discount amount to apply to a user's shopping cart?
//      number
// Whether or not a coupon code is valid?
//      boolean
// An email address typed into a registration form?
//      string
// The price of a product?
//      number

// OPERATORS
//     Operator    Operation
//         +	    addition
//         -	    subtraction
//         *	    multiplication
//         /	    division
//         %        remainder
//
//         Operator	    Name	Description
//             &&	    AND	      True if both operands are true, false otherwise
//             ||	    OR	      True if either operand is true, false otherwise
//             !	    NOT	      The opposite
//
//
//  Operators Exercise
//  For each of the following code blocks, read the expression and predict what the result of evaluating it would be, then execute the expression in the Chrome console.
//
//
// '1' + 2
//      '12'
// typeof '1' + 2
//      'string2'
// 6 % 4
//      2
// '3 + 4 is ' + 3 + 4  (how could you make this produce the correct) output?
//      '3 + 4 is 34' for correct output '3 + 4 is ' + (3 + 4)
// 0 < 0
//      false
// 'false' == false
//      false
// true == 'true'
//      false
// 5 >= -5
//      true
// !false || false
//      true
// true || "42"
//      true
// !true && !false
//      false
// 6 % 5
//      1
// 5 < 4 && 1 === 1
//      false
// typeof 'codeup' === 'string'
//      true
// 'codeup' === 'codeup' && 'codeup' === 'Codeup'
//      false
// 4 >= 0 && 1 !== '1'
//      true
// 6 % 3 === 0
//      true
// 5 % 2 !== 0
//      true
//
//
//  Shorthand Assignment Operators
//  The assignment operator ,=, can be combined with certain arithmetic operators to create shorthand assignments.
//
//  Operator	Shorthand Example	Equivalent To
//  +=	x += 2;	x = x + 2;
//  -=	x -= 2;	x = x - 2;
//  *=	x *= 2;	x = x * 2;
//  /=	x /= 2;	x = x / 2;
//  %=	x %= 2;	x = x % 2;
//
//
//  Unary Operators
//  Unary operators operate on a single variable or value.
//
//     Operator	Name
//          +	Plus
//          -	Negation
//          ++	Increment
//          --	Decrement
//
//
//  Converting Between String and Numbers
//         var x = 3.14;
//         x.toString(); // "3.14"
//         x.toFixed(1); // "3.1"
//         x.toFixed(3); // "3.140"
//
//  Converting Between Numbers and String
//          Number()
//          Number('123') // 123
//          Number('0.9') // 0.9
//
//          parseInt: attempts to convert a string to an integer value
//          parseFloat: attempts to convert a string to a floating point (i.e. decimal) value
//
//      Working With Strings
//
//      Here are some useful functions to use when working with strings in JavaScript:
//
//      .length: property that describes the number of characters in the string.
//      .indexOf(char): returns the index of the specified character in the string.
//      .replace(find, replace): returns a copy of the string after performing a substitution.
//      .substring(fromIndex, toIndex): returns a subset of the original string based on the provided indices.
//      .toUpperCase(): returns a copy of the string in all upper case.
//      .toLowerCase(): returns a copy of the string in all lower case.
//      .trim(): returns a copy of the string with whitespace at the beginning and end removed.
//
//
//     Working with Data Types, Ops, and Vars Exercises
// For each of the following code blocks, read the code and predict what the result of evaluating it would be, then execute the statement(s) in the Chrome console.
//
//
// var a = 1;
// var b = a++;
// var c = ++a;
// // what is the value of a, b, and c?
//      a = 3   b = 1   c = 3
//
// var d = "hello";
// var e = false;
//
// d++;
// e++;
//
//      d = NaN    e = 0
//
// var perplexed; // perplexed is undefined (no value is assigned)
// perplexed + 2;
//
//      NaN
//
// var price = 2.7;
// price.toFixed(2);
//
//      2.70
//
// var price = "2.7";
// price.toFixed(2);
//
//      TypeError
//
// isNaN(0)
//      flase
// isNaN(1)
//      flase
// isNaN("")
//      false
// isNaN("string")
//      true
// isNaN("0")
//      false
// isNaN("1")
//      false
// isNaN("3.145")
//      false
// isNaN(Number.MAX_VALUE)
//      false
// isNaN(Infinity)
//      false
// isNaN("true")
//      true
// isNaN(true)
//      false
// isNaN("false")
//      true
// isNaN(false)
//      false
// // to illustrate why the isNaN() function is needed:
// NaN == NaN
//      false
// !true
//      false
// !false
//      true
// !!true
//      true
// !!false
//      false
// !!0
//      false
// !!-0
//      false
// !!1
//      true
// !!-1
//      true
// !!0.1
//      true
// !!"hello"
//      true
// !!""
//      false
// !!''
//      false
// !!"false"
//      true
// !!"0"
//      true
//
// Execute the following statement in the Chrome JavaScript console and then follow the directions below.
//
//
// var sample = "Hello Codeup";
//    var sample = "Hello Codeup";
//
// Use .length to find the number of characters in the string.
//      sample.length
//
// Try to make the sample string all upper or all lower case.
//      sample.toUpperCase()
//
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
//      sample = sample + " Students"
//
// Replace "Students" with "Class".
//      sample.replace("Students", "Class")
//
// Find the index of "c" using .indexOf(). What do you observe?
//      simple.indexOf("c")
//      -1
//
// Find the index of "C" using .indexOf().
//      sample.indexOf("C")
//      6
//
// Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
//      sample.substring(sample.indexOf("C"), sample.indexOf("p")+1)
//
// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
//
//    let littleMermaid = 3;
//    let brotherBear = 5;
//    let herculse = 1;
//    let costOfRentals = "$" + ((littleMermaid + brotherBear + herculse) * 3) + ".00";
//
//
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
//
//    let googlePay = 400
//    let amazonPay = 380
//    let facebookPay = 350
//    let hoursWorkedG = 6
//    let hoursWorkedA = 4
//    let hoursWorkedF = 10
//    let amountMadeWorking = ((googlePay * hoursWorkedG) + (amazonPay * hoursWorkedA) + (facebookPay * hoursWorkedF))
//
//
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//
//    let notFull = true
//    let noScheduleConflict = true
//    let canEnroll = notFull && noScheduleConflict
//
//
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
// Use the following code to follow the instructions below:
//
//    let boughtMoreThan2 = true
//    let notExpired = true
//    let premiumMember = true
//    let offerCanBeApplied = (boughtMoreThan2 || premiumMember) && notExpired
//
//
//  var username = 'codeup';
//  var password = 'notastrongpassword';
// // Create a variable that holds a boolean value for each of the following conditions:
// //
// // the password must be at least 5 characters
//     var passwordLenghtReq = password.length >= 5;
//
// // the password must not include the username
//     var passwordNotUN = (password === password.replace(username, ""));
//
// // the username must be no more than 20 characters
//     var userNoMoreThan20 = username.length <= 20;
//
// // neither the username or password can start or end with whitespace
//     let noWhiteSpace = (password === password.trim() && username === username.trim())

// "use strict";
//
// console.log("Hello from home!!! You got this!!!");
//
// alert("If you put in the time you can accomplish anyhting!!!");
//
// var confirmed = confirm("Are you ready for the rest of your life?");
// console.log(confirmed);
//
// var userInput = prompt("What's your number 1 goal for this week?");
// console.log("The user entered: " + userInput);
//
// alert("1 year from now you will have a better work and home life, because you're putting in the work now!");
//
// var favoriteThing = prompt("What is your favorite thing?");
// alert("Gerat, " + favoriteThing.trim() + " is my favoriet thing too!!!");
// console.log("The user entered: " + favoriteThing);
//
// let pricePerDay =3;
// let daysRented;
//
// daysRented = prompt("How many days do you want to rent it out?")
//
// let totalMermaid = pricePerDay * daysRented;
// let totalBear = pricePerDay * daysRented;
// let totalHerc = pricePerDay * daysRented;
//
// let totalPrice = totalMermaid + totalBear + totalHerc;
//
// alert(totalPrice);

console.log ("FUNCTIONS LECTURE");

// WHAT ARE FUNCTIONS
// chunks of code that can be reused

// DEFINING FUNCTION & FUNCTION SYNTAX
function nameOfFunction(parameters){
    //code goes here
    console.log("hello from inside of nameOfFunction");
}

nameOfFunction(); //calls the function to run the codethats living inside the curly brackets in the function you called (by its name)


//WHAT DOES "RETURN" MEAN
// write a function that returns my age
// function returnAge(){
//     return 33 //return a value once the function is run
// }
// console.log(returnAge());
//
// function addTwoNumbers(){
//     return 7 + 3;
// }
//
// console.log(addTwoNumbers());
// alert(addTwoNumbers());

//wriet a function that returns a users age
//1 prompt
//2 save age to a varible
//3 pass users age into the function
//4 return users age
//5 call the function to run

// let userAge = prompt("what's your age?");
// console.log(userAge);
//
// function whatIsYourAge(age){
//     return age;
// }
//
// console.log(whatIsYourAge(userAge));

//* come back with various users age

//write a function that returns sum of 2 numbers

//1 define a function - placeholders for the 2 numbers that the function will need in order to complete its function
//2 call the function with 2 numbers - arguments : actual values being passed in
// placeholders for 2 numbers up to you
// function sumTwoNumbers(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }
//
// console.log(sumTwoNumbers(18, 22));
// console.log(sumTwoNumbers(25, 13));
//
// let firstNumber = parseFloat(prompt("give me digits?"));
// let secondNumber = parseFloat(prompt("more numbers pls?"));
//
// console.log("results of sumTwoNumbers : " + sumTwoNumbers(firstNumber, secondNumber));
//

// TODO: write a function that prompts the user for their full name and returns their full name. Consol log the results of the function

// ANONYMOUS FUNCTIONS


// write a function that returns the first and last name of a student
//1 prompt for the first and last name
//2 store first and last name in var
//3 define the function -- parameters? yes
// // first * last name
//4 call the function -- arguments? yes
function firstAndLast(userfirstname, userlastname){
    let name = userfirstname + userlastname;
    return name;
}
let firstName = (prompt("What is your first name?"));
let lastName = (prompt("What is your last name?"));

console.log("Your name is " + firstAndLast(firstName + " ", lastName));




// // variables

// PARAMETERS VS ARGUMENTS?



// TRY IT OUT / EXAMPLES