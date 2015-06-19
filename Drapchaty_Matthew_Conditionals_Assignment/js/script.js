/* Drapchaty, Matthew
   6/18/2015
   Conditionals_Assignment
 */

// DrapLand (theme park) admission tickets
// I am going to create variable's to gather information about the customers age, service in the military, or time and day of the week the customer will be attending the theme park.

var age = prompt("In order to appropriately price your ticket we need to ask a few questions first. How old is the person this ticket is for?"); // creating a prompt to gather a number variable for the customer using the tickets age.
var age = Number(age); // casting the variable age as a number
var weekday = prompt("Will you be attending the park on a weekday? (Mon-Fri). Please respond with a \"Yes\" or \"No\"(do not use quotations)."); //string variable for yes/no to weekday
var military = prompt("Did you serve in the U.S. military? Please respond with a \"Yes\" or \"No\"(do not use quotations)."); //string variable for yes/no to military service or not
var discountTicket = 25; // number variable for discounted ticket price

if(age <= 2){  //series of if else if statements to assign discounts that apply based on age
   console.log("You qualify for our toddler discounted ticket price of " + (discountTicket - 10) + "$! Enjoy your day at DrapLand!")//output for toddler
}else if(age <= 6){
   console.log("You qualify for our child discounted ticket price of " + (discountTicket) + "$! Please enjoy your day at DrapLand!")//output for child
}else if(age >= 65){
   console.log("You qualify for our senior discounted ticket price of " + (discountTicket) + "$! Please enjoy your day at DrapLand!")//output for senior
}else console.log("You do not qualify for a discount based upon your age.");//output for no age discount

if(weekday === "Yes"){ //if else if to determine if customer is attending park on weekday
   console.log("You qualify for our discounted weekday ticket price of " + (discountTicket + 5) + "$! Please enjoy your day at DrapLand!")//output for weekday price
}else if("No"){
   console.log("You do not qualify for our \"weekday\" discount."); //output for weekend
}

(military === "Yes") ? console.log("You qualify for our military discounted ticket price of " + (discountTicket) + "$! Please enjoy your day at DrapLand!") : console.log("You do not qualify for our military discount."); //Ternary conditional for military or not

console.log(" Please choose only up to 1 discount per ticket. If no discounts are available you must pay full ticket price of 35$. Please enjoy your day at DrapLand!"); //final output to help user read and understand






