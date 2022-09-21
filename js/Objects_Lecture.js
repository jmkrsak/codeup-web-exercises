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

let airplane = {
    model: 747,
    brand: "boeing",
    seats: 120,
    color: "blue and white",
    crew: ["pilots", "flight attendants"],
    passengers: [
        {
            name: "Ethan",
            age: 21,
            location: "brownsville",
            sayAge: function(){
                return "hello, I am " + this.age + " years old";
            }
        },
        {
            name: "Jordan",
            age: 28,
            location: "Pana, Il",
        },
        {
            name: "Riley",
            age: 18,
            location: "Hartly, De",
        },
    ]

}
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

