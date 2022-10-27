/**
 * Online Shopping
 * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
 *
 * Examples
 *
 * freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
 * freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
 * freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
 *
 * Notes
 * Ignore tax or additional fees when calculating the total order cost.
 */
function freeShipping(obj) {
    let something = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < something.length; i++) {
        sum += something[i]
    } if (sum > 50) {
        return true;
    } else {
        return false;
    }
}
function freeShippingTwo(obj) {
    let arr = [];
    for (key in obj) {
        // console.log(obj[key])
        arr.push(obj[key])
    }
    let sum = 0
    for (let i = 0; i < arr.length; i ++) {
        sum += arr[i];
    }
    if (sum > 50) {
        return true
    } else {
        return false
    }
}
// console.log(freeShippingTwo(shoppingListThree));
let shoppingList = {
    shampoo: 5.99,
    rubber_duck: 15.99,
}
console.log(freeShipping(shoppingList));
let shoppingListTwo = {
    flatscreen_tv: 399.99,
}
console.log(freeShipping(shoppingListTwo));
let shoppingListThree = {
    monopoly: 11.99,
    secret_hiller: 35.99,
}
console.log(freeShipping(shoppingListThree));
/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */
let newArr = [
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
]
function getBudget(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i].budget
    }
    return sum
}
console.log(getBudget(newArr));
/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */
let address = '8626 Sunny Oaks'
function convertAddressToObject(input) {
    let arr = input.split(" ");
    let obj = {
        streetNumber: arr[0],
        streetName: `${arr[1]} ${arr[2]}`
    }
    return obj
}
console.log(convertAddressToObject(address));
/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */
let yourPets = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
]
function totalPets(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].pets
    }
    return sum
}
console.log(totalPets(yourPets));