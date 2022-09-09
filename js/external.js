"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!")

const favColor = prompt("What is your favorite color?");

alert("Great, " + favColor + " is my favorite color too!");

const littleMermaid = Number.parseInt(prompt("How many days for Little Mermaid?"));
const brotherBear = Number.parseInt(prompt("How many days for Brother Bear?"));
const herculesMovie = Number.parseInt(prompt("How many days for Hercules?"));
const pricePerMovie = 3;
const total = (littleMermaid + brotherBear + herculesMovie) * pricePerMovie;
alert("Your price for movies is " + total);

const googlePay = 400;
const amazonPay = 380;
const facebookPay = 350;
const hoursWorkedForGoogle = Number.parseInt(prompt("How many hours worked for Google?"));
const hoursWorkedForAmazon = Number.parseInt(prompt("How many hours worked for Amazon?"));
const hoursWorkedForFaceBook = Number.parseInt(prompt("How many hours worked for Facebook?"));
const payTotal = hoursWorkedForAmazon * amazonPay + hoursWorkedForGoogle * googlePay + hoursWorkedForFaceBook + facebookPay;
alert("You made : $" + payTotal.toFixed(2));

const classFull = confirm("Is the class full?");
const scheduleConflict = confirm("Does your current schedule conflict with the class schedule?");
const canEnroll = !classFull && !scheduleConflict;
alert("Can you enroll in class? " + canEnroll);

const itemsBought = Number.parseInt(prompt("How many items have you bought?"));
const offerExpired = confirm("Has the offer expired?");
const premiumMember = confirm("Are you a premium member?");
const canBeApplied = (itemsBought > 2 || premiumMember) && !offerExpired;
alert("Can the offer be applied? " + canBeApplied);
