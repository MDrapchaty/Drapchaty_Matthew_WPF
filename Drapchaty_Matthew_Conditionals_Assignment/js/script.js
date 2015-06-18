/* Drapchaty, Matthew
   6/18/2015
   Conditionals_Assignment
 */

// DrapLand (theme park) admission tickets
// I am going to create variable's to gather information about the customers age, service in the military, or time and day of the week the customer will be attending the theme park.

var age = prompt("In order to appropriately price your ticket we need to ask a few questions first. How old is the person this ticket is for?"); // creating a prompt to gather a number variable for the customer using the tickets age.
var age = Number(age); // casting the variable age as a number
var military = prompt("Did you serve in the U.S. military? Please respond with a \"Yes\" or \"No\"(do not use quotations).");
var weekday = prompt("Will you be attending the park on a weekday? (Mon-Fri). Please respond with a \"Yes\" or \"No\"(do not use quotations).");
var discountTicket = 25;

if(age <= 2){
   console.log("Your toddler qualifies for the discounted ticket price of " + (discountTicket - 10) + "$! Enjoy your day at DrapLand!")
}else if(age >= 65){
   console.log("You qualify for our senior discounted ticket price of " + (discountTicket) + "$! Please enjoy your day at DrapLand!")
}else console.log("You do not receive a discount based upon your age.");

if(weekday === "Yes"){
   console.log("You qualify for our discounted weekday ticket price of " + (discountTicket + 5) + "$! Please enjoy your day at DrapLand!")
}else if("No"){
   console.log("You do not qualify for our \"weekday\" discount.");
}

(military === "Yes") ? console.log("You qualify for our military discounted ticket price of " + (discountTicket) + "$! Please enjoy your day at DrapLand!") : console.log("You do not qualify for our military discount.");

console.log(" Please choose only up to 1 discount per ticket.");






