"use strict"

// Create a file named break_and_continue.js in the js directory.
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

let oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));

console.log("The number chosen was: "+oddNum);

while(true) {
    if(oddNum % 2 !== 0 && oddNum < 50 && oddNum > 1) {
        break;
    }
    alert("This is not a valid number, you didn't follow the rules!");
    oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
    console.log("The number chosen was: "+oddNum);
}

for (let i = 1; i < 50; i+=2) {
    if(i === oddNum) {
        console.log("Yikes! Skipping number: " + oddNum)
        continue;
    }
    console.log("Here's an odd number: " + i);
}

// let oddNum
// for(;;)
//     oddNum = prompt("Plese enter an odd number between 1 and 50");
//     if(oddNum > 50 || oddNum < 0 || oddNum % 2 == 0) {
//         alert("Number is not valid, you didn't follow the rules");
//     }
//     if(oddNum % 2 > 0 && oddNum < 50) break;
// }
//
// for(let i = 0; i < 50; i++) {
//     if(i == oddNum) {
//         console.log(`Yikes! Skipping number: ${i}`);
//         continue
//     } else if(i % 2 > 0) {
//         console.log(`Here is an odd number: ${i}`)
//     }
// }

// let oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
// console.log("The number chosen was: "+oddNum);
//
// while(true) {
//     if(oddNum % 2 !== 0 && oddNum < 50 && oddNum > 1) {
//         break;
//     }
//     alert("This is not a vaild number, you didn't follow the rules!");
//     oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
//     console.log("The number chosen was: "+oddNum);
// }
//
// for (let i = 1; i < 50; i+=2) {
//     if(i === oddNum) {
//         console.log("Yikes! Skipping number: " + oddNum)
//         continue;
//     }
//     console.log("Here's an odd number: " + i);
// }
    // while(i === oddNum){
    //
    //     console.log("Yikes! Skipping number: "+ oddNum);         break;
    // }if(i !== oddNum){
    //     console.log("Here is an odd number: "+ i);
    // }
// }

// let oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
// console.log("The number chosen was: "+oddNum);
// for (let i = 1; i < 50; i+=2) {
//     if ((oddNum % 2 === 0 || oddNum > 50 || oddNum < 1)) {
//         alert("This is not a vaild number, you didn't follow the rules!");
//         oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
//         console.log("The number chosen was: "+oddNum);
//         continue;
//     } else if (i === oddNum) {
//         console.log("Yikes! Skipping number: "+ oddNum);
//         // console.log("here is and odd number: "+ i);
//         break;
//     } else if (i !== oddNum) {
//         console.log("here is and odd number: "+ i);
//     }
// }


// let oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
//
// for (oddNum = 1; oddNum < 50; oddNum) {
//     if (oddNum % 2 === 0) {
//         alert ("This is not a vaild number, you didn't follow the rules!");
//         let oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
//     } else if (oddNum >= 50) {
//         alert ("This is not a vaild number, you didn't follow the rules!");
//         let oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
//     } else if (oddNum < 1) {
//         alert ("This is not a vaild number, you didn't follow the rules!");
//         let oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
//     } else {
//         alert ("Alright, you picked a valid number!")
//     }
// }
// let oddNum = parseInt(prompt("Input an Odd Number between 1 and 50."));
// if (oddNum % 2 === 0) {
//     alert ("This is not a vaild number, you didn't follow the rules!");
//     alert (oddNum);
// } else if (oddNum >= 50) {
//     alert ("This is not a vaild number, you didn't follow the rules!");
//     alert (oddNum);
// } else if (oddNum < 1) {
//     alert ("This is not a vaild number, you didn't follow the rules!");
//     alert (oddNum);
// } else {
//     alert ("Alright, you picked a valid number!")
// }
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
// function isEven(num) {
//     return (parseInt(num) % 2 === 0);
// }

// // Get a random integer from 1 to 10 inclusive
// const num = Math.ceil(Math.random() * 10);
// console.log(num);
// const gnum = prompt('Guess the number between 1 and 10 inclusive');
// if (gnum == num)
//     console.log('Matched');
// else
//     console.log('Not matched, the number was '+gnum);