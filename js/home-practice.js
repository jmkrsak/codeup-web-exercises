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

// console.log ("FUNCTIONS LECTURE");

// WHAT ARE FUNCTIONS
// chunks of code that can be reused

// DEFINING FUNCTION & FUNCTION SYNTAX
// function nameOfFunction(parameters){
//     //code goes here
//     console.log("hello from inside of nameOfFunction");
// }
//
// nameOfFunction(); //calls the function to run the codethats living inside the curly brackets in the function you called (by its name)


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
// function firstAndLast(userfirstname, userlastname){
//     let name = userfirstname + userlastname;
//     return name;
// }
// let firstName = (prompt("What is your first name?"));
// let lastName = (prompt("What is your last name?"));
//
// console.log("Your name is " + firstAndLast(firstName + " ", lastName));




// // variables

// PARAMETERS VS ARGUMENTS?



// TRY IT OUT / EXAMPLES

// IF STATEMENTS

// if(conditional){
//     // run this code if conditional is true
// }

// let x = 15;
//
// if (x > 5){
//     console.log("hey x is greater than 5, hello from inside the if statement!")
// }
//
// console.log("outside of the if statement")

// let userName = prompt("Hey whats your unsername");
//
// if(userName.toLowerCase() === "laura"){
//     alert("welcome to the website of Lauras");
// } else {
//     alert("welcome everyone else");
// }

//  if the temperature is grater than or equal to 75 -- bring sunglasses
// if the temperature is between 55-74 -- bring a sweater
// if the temp is below 54 -- stay inside
// let temperature = 60;
//
// if(temperature >= 75) {
//     alert("bring sunglasses!");
// } else if(temperature > 55 && temperature < 75) {
//     alert("bring a sweater!!");
// } else {
//     alert("stay inside!!!");
// }

// function addTwoIfDivisible(num) {
//     if(num % 2 == 0) {
//         console.log("this number is even");
//     } else {
//         console.log("this number is odd");
//     }
// }
//
// addTwoIfDivisible(8);
//
// // TERNARY
//
// // num > 10 // num grater than 10
// // console.log("num is grater than 10")// print " grater than 10"
// // console.log("num is less than 10")// if num < 10 print num is less than 10
//
// let num = 8;
//
// num > 10 ? console.log("grater than 10") : console.log("less than 10");

// SWITCH

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }

// LOOPS
//Cautionary note:
//if console goes crazy CLOSE CLOSE CLOSE

//WHILE
//The condition is evaluated First and then runs

//while(condition){ //instruction }

//while(true)

// let password = prompt("welcome to the website - please enter your password");
//
// while(password !== "correctPassword"){
//     alert("Incorrect password! Please try again!");
//
//     password = prompt("Please try to enter your password again");
// }
// let notNiceEnough = confirm("Do you think the weather outside is nice enough to go out in?");
//
// while(notNiceEnough){
//     alert("I REALLY WANT TO GO OUTSIDE - are you SURE?");
//     notNiceEnough = confirm("Do you think it's true that the weather outside is nice enough to go out in?")
// }

// let wearingHat = true
//
// alert("We are not doing hats today - you need to take it off to come in.");
//
// while(wearingHat){
//     wearingHat = confirm("Do I leave my hat on and keep my true self?!");
// }

// var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }


//Do-While
//The code will always be executed at least once regardless of the condition being true

// let i = 0;
// do{
//     console.log("Do some stuff as long as i was below zero!")
// } while (i < 0);
// while(i < 0){
//     console.log("Hello!")
// }

// let wanToTalkToSalesPerson = false;
//
// do {
//     alert("Welcome to car store, what are you looking for?");
//     wanToTalkToSalesPerson = confirm("Are you ready to buy?");
// } while (wanToTalkToSalesPerson);


//For Loop
//for(init; condition; incrementation){
//code to ex
//}

// good for code to varify admin
// for(let i = 0; i < 10; i++){
//     alert("Hey 'i' - what number value is inside of you now? i says: " + i);
// }

//max occupancy for Store is 20 cx
//our
// for(let numCustomer = 0; numCustomer <= 20; numCustomer++){
//     alert ("Customer arrived! Number of customers in house is now " + numCustomer);
// }

// let fullName = "Kenneth";
//
// for (let i = 0; i < fullName.length; i++){
//     console.log("Here's a cool letter form my name " + fullName[i])
// }
//
// let userFirstName = prompt("What is your first name user?")
//
// for (let i = 0; i < userFirstName.length; i++){
//     alert("Here's a letter from your name : " + userFirstName[i]);
// }


//Break? Continue? How did I use them in a loop?

//These are key words
// breal will be read as "exit" the loop
//continue

// for(let i = 0; i < 10; i++){
//     alert("i is currently: " + i);
//     if(i === 5){
//         alert("Stopping at 5");
//         break;
//     }
// }

// for(let i = 0; i < 10; i++){
//     alert("i is currently: " + i);
//     if(i === 5){
//         alert("5 is cool");
//         continue;
//     }
// }

// for(let i = 0; i < 10; i++){
//     console.log("loop has run x times : " + i);
//
//     if(i % 2 === 0){
//         alert("Here's a cool even number: " + i);
//         continue;
//     }
// }

//Let's pop this in a function to see it work

// function countTimes(number){
//     for(let i = 0; i < number; i++){
//         alert("Counting up to your number of " + number + ". We are currently on the number" + i);
//     }
// }

//function showMultiplactionTable
//"a number" - one parameter
//console.log the table for that number
// console.log("sanity check");
//
// function showMultiplactionTable(number){
//     //First step- can i console.log numbers between 1 -10?
//     for(let i = 1; i <= 10; i++){
//         // console.log(number + " x " + i + " = " + (number * i));
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }
//
// showMultiplactionTable(7);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

//first step- can i output 10 random numbers
//second step- can i filter those 10 random numbers odd or even
//third step - can i filter even numbers
//4th - can i filter odd numbers
// for(let i = 1; i <= 10; i++){
//
//     let randomNum = Math.floor(Math.random() * (200 - 20) ) + 20;
//
//     if(randomNum % 2 ===0){
//         console.log("Here's an even number: " + randomNum);
//     } else {
//         console.log("Here is an odd number: " + randomNum);
//     }
//
// }

// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

//repeat

// for(let i = 1; i < 10; i++){
//
//     console.log(i.toString().repeat(i));
//
// }

//nested loop path

// for(let i = 1; i < 10; i++){
//
//     let str = "";
//
//     for(let j = 0; j < i; j++){
//         str = str + i;
//
//     }
//
//     console.log(str);
// }

// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for(let i = 100; i > 0; i-= 5){
//     console.log(i);
// }

//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// let number = 2
//
// while(number <= 65536){
//     console.log(number);
//     number = number * 2;
// }

//ARRAY - a data strcuture, orginized, has a 0 --> wherever we stop adding things in

//Javascript arrays can contain any combo of primitives or objects into an array -- dont have to only have numbers or only strings

//Array `literal` - straight bracket notation []

// // [] empty
// [1,2,3,4,5] //all numbers array literal
//
// [true, `java cohort`, 1230, [1,'2', "three", true]] //Combining all kinds of data - even an array inside an array
//
// //Power arrives first by combininb the above with a var - now were slapping a LABLE onto the array

// let lunchItems = ["apple and banana", "steak", "chicken", "fish"]

//what is the FIRST ELEMENT of my array?
//At the ZERO INDEX we have a STRING LITERAL of "apple and banana"

//In english: "Javascript, how many items do you have inside an array labled "x"?
//.length

// console.log("How many elements [items] are in an array called lunchItems?");

// console.log(lunchItems.length);

// let citiesInTexas = ["san", "austin", "waco", "dallas", "houston", "fort worth"]
//
// console.log(citiesInTexas.length);

//How would i get ONE ELEMENT [item] out of my array?
//How to access an element: We refer to it by index

// console.log(citiesInTexas[4]);

//What if i wanted to go through each part [each element] of my array one by one somehow
//Iterate with my arrays: [for loops] and we have some NEW OPTIONS

// for(let i = 0; i < citiesInTexas.length; i++){
//     console.log("Heres a cool town in Texas");
//     console.log(citiesInTexas[i]);
// }

//.forEach - takes in a call back function [function expression or anpnymous function in var] looking for at least what "element" in the internal function we're working with

//someArray.forEach(function(element, index, array) {
//  // ...
// })

// citiesInTexas.forEach(function(element){
//     console.log("Heres a cool city in Texas " + element);
// })

// let favorietNumbers = [7,13,222]

// favorietNumbers.forEach(function(num){
//     console.log(typeof num);
// })

// favorietNumbers.forEach(function(number, index){
//     console.log("Current index is: " + index + " and the data type was " + typeof number)
// })



//forOf
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference?Statements?for...of

//for (let element of array1) {
// console.log(element);
//}

// for (let city of citiesInTexas){
//     console.log(`Have you ever been to ${city} before?`)
// }

// MANIPULATING ARRAYS

let animals = ['frog', 'bat', 'camel', 'bumble bee', 'wombat'];

// let pixarMovies = ['up', 'a bug\'s life', 'toy story', 'monster\'s inc'];

let favoriets = ['pizza', 18, 'autumn', 2016, ['peperoni & jalapenos',]]

//adding movies

//methods - functions that are attached to an object
//forEach()

//push() --> add an element to the end of an array
//Kiley's favorite animal is dog
//arrayYouWantToAddTo.push('dog')

console.log(animals);
animals.push('dog');
console.log(animals);

animals.push('cat', 'giraffe', 'human');
console.log(animals);

let places = ['mcdonalds', 'texas', 'the ocean', 'my house', ['berlin', 'london', 'prague']];

let zoo = ["zebra", "lion", "dolphin", ["cricket", "bees", "butterflys"], "wombat"];

zoo.push('mouse');

//unshift

zoo.unshift("frog");

//removing movies

//.pop() --> removes last element from an array
// pixarMovies.pop('up');
let pixarMovies = ['up', 'a bug\'s life', 'toy story', 'monster\'s inc'];

let removedMovie = pixarMovies.pop()
console.log('removedMovie:', removedMovie);



//accessing movies
//nameOfArray[indexOfTheElYouWantToAccess]
