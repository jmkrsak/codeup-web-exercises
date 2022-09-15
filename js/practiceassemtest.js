"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// function isBoolean(value) {
//     return typeof value === 'boolean';
// }
//
// function isString(x) {
//     return Object.prototype.toString.call(x) === "[object String]";
// }
//
// function isNotString(x) {
//     return Object.prototype.toString.call(x) !== "[object String]";
// }
//
// function isEmptyString(x) {
//     return (x === "[ ]" || x === "");
// }
//
// function isNotANumber(variable) {
//     return isNaN(parseFloat(variable));
// }
//
// function isNegative(number) {
//     if (number < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function isPositive(number) {
//     if (number > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function isZero(number) {
//     if (number == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function isArray(obj) {
//     return !!obj && obj.constructor === Array;
// }
//
// function upperCase(string) {
//     if (typeof string !== "string") {
//         return false;
//     } else if (string == null) {
//         return false;
//     } else if (string == "[1, 2, 3]") {
//         return false;
//     } else {
//         return (string.toUpperCase());
//     }
// }

// name function
// take in value - a parameter
// RETURN A BOOLEAN IF I GOT A BOOL OTHERWISE FALSE
// if bool return true - if not return false

function isBoolean(input){
    if(typeof input === "boolean"){
    }
    return false;
}

// function isString
//"take in a value" - on parameter
//return true if input is a string [happy]
//otherwise: return false [unhappy]
// numeric string === string

function isString(input){
    if(typeof input === "string"){
    }
    return true;
}

// or
// function isString(input){
//     return typeof input === "string";
//

//named function - names isNotString
//"accepts an input" - one parameter
//happy path - true if not a string
//unhappy path - false if string
// D R Y  example

function isNotString(input){
    return !isString(input);
}

//named function - isEmptyString
//example calls for one argument - one parameter
//happy path - was input "" an empty string? return true
//unhappy path - all other inputs return false

function isEmptyString(){
    return input === "";
}

//named function - isNotANumber
//"an input" - one parameter needed
//happy path - i fif not recieve a number data type
//unhappy path - i got a number as my input data type
//conditional would work

function isNotANumber(input){
    return typeof input !== "number";
}

//named function - isNegative
//"a number" - one parameter
//happy path - input less that zero, numeric string accepted
//unhappy path - more than zero, or i did not get a number

function isNegative(input){
    return input < 0;
}

//function named - isPositive
//accepts an input - one parameter
//happy path - i got a number and that number data type value was above 0
//unhappy path - i got other than a number or i got a negative number type

function isPositive(input){
    return input > 0;
}

//function named - isZero
//one parameter - only accepts one input
//happy path - input is numeric string or number with value 0
//unhappy path - all other inputs return false

function isZero(input){
    return input == 0;
}

// function named - isArray
//"an input" - one parameter is needed
//happy path - i got an array
//unhappy path - i did not get an array

function isArray(input){
    //happy path
    if(Array.isArray(input)){
        return true
    }
    return false;
}

//function named - upperCase
//"a string input" - one parameter
//unhappy path - NOT A STRING? return false
//happy path - a non-numeric string? uppercase the input and return

function upperCase(input){
    //we want to VALIDATE our input to make sure we are getting the right type of data [a string] - lets get our validation going!

    if(isNotString(input)){ //If: is TRUE that my INPUT isNotString..

        return false;
    }
    return input.toUpperCase();
}