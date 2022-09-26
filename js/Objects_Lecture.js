"use strict"

// OBJECTS

// let myArr = [4, "strawberries", ['a', 'b', 'c']]
//
// let myObject = {
//     myFavoriteNumber: 4,
//     myFavoriteFruit: "strawberries",
//     letter: ['a', 'b', 'c']
// }
//
// console.log("my fav num is: " + myArr[0])
//
// console.log("my fav num is: " + myObject.myFavoriteNumber)
//
// console.log(myObject.letter[2]);

//CREATING NEW OBJECTS

//object constructor -- instantiating a new object
// var car = new Object();
// console.log(typeof car);
//

// let shoes = new Object();
// console.log(shoes);
//
// shoes.aglets = 'plastic';
// console.log(shoes);
//
// shoes.size = 8;
// console.log(shoes);
//
// shoes["brand"] = 'nike';



// //object literal notation
// let javaCohort = {
//     cohortName: "Java",
//     classSize: 24,
//     location: "Remote",
//     gradDate: "Feb 14, 2023",
//     instructors: ["Ana", "Ken", "Trevor", "Laura"],
//     programLength: 6,
// }

// let airplane = {
//     model: 747,
//     brand: "boeing",
//     seats: 120,
//     color: "blue and white",
//     crew: ["pilots", "flight attendants"],
//     passengers: [
//         {
//             name: "Ethan",
//             age: 21,
//             location: "brownsville",
//             sayAge: function(){
//                 return "hello, I am " + this.age + " years old";
//             }
//         },
//         {
//             name: "Jordan",
//             age: 28,
//             location: "Pana, Il",
//         },
//         {
//             name: "Riley",
//             age: 18,
//             location: "Hartly, De",
//         },
//     ]
//
// }
//
// airplane.crew.forEach(function(member){
//     console.log("Thats so cool that youre a: " + member);
// })
//
// console.log(airplane.passengers[1])
// console.log(airplane.passengers[1].location)
// console.log(airplane.brand);
// console.log(airplane.crew);
//
// airplane.crew[0];
//
// console.log(airplane.seats);

// let airplane = {
//     model: 747,
//     brand: "boeing",
//     seatsAvail: 120,
//     numPassengers: 28,
//     fly: function(){
//         console.log("The airplane can fly!");
//     },
//     remainingseats: function(){
//         return this.seatsAvail - this.numPassengers;
//     },
//     takeoff: function(){
//         return "the " + this.model + " is taking off!";
//     }
// }
//
// console.log(airplane.fly);
// airplane.fly();
// console.log(airplane.remainingseats());
// console.log(airplane.takeoff());

//METHODS --> functions that live inside of objects

//----MATH----

// morning exercise

// Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// example input: [1,2,3,4,5] expected output: [2,4]

function returnEven (array) {
    let myArray = [1,2,3,4,5,6,7,8,9,10];
    let even = [];
    for (let i = 0; i < myArray.length; i++) {
        const num = myArray[i];
        if (num % 2 === 0) {
            even.push(num);
        }
    }
    console.log(even);
}
returnEven();

// Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
//     example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

function addContinent(){

}

