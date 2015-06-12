// Drapchaty, Matthew
// 6.11.2015, Expressions Assignment

// going to create variables representing hours of sleep
var sleepLN; // variable for sleep last night.
var sleepDBL; // variable for sleep day before last.
var sleepT; // variable for sleep tonight.
// assigning variables with prompts
sleepLN = prompt("We are going to find out how much sleep you are getting. \nEnter the number of hours of sleep you got last night."); // creating a prompt to get variable for sleep last night.
sleepDBL = prompt("Enter the number of hours of sleep you got night before last."); // creating a prompt to gather variable for sleep day before last.
sleepT = prompt("How many hours of sleep are you planning to get tonight?"); //creating a prompt and gathering the variable for sleep tonight.

//I am going to create equations to get total hours slept over the 3 nights, as well as an average of the sleep per night for all 3 nights and for last 2 nights.
var sleepResults = [sleepLN, sleepDBL, sleepT]; //creating an array filled with the 3 results.
var sleepTotal = Number(sleepResults[0]) + Number(sleepResults[1]) + Number(sleepResults[2]); //creating an equation to get the total number of sleep over last 3 days.
var sleepAvg = sleepTotal /= 3; //creating an equation to get the average amount of sleep in hours per night.
var sleepASF = (Number(sleepLN) + Number(sleepDBL)) / 2; // creating equation for sleep average so far, over the last 2 nights.
var hos = "hours of sleep"; //creating string varibale for hours of sleep to save time
var sleepTotal2 = Number(sleepResults[0]) + Number(sleepResults[1]) + Number(sleepResults[2]); //new unchanged sleep total varibale
console.log("If the amount of " + hos + " you get tonight is correct your total amount of " + hos + " over the last 3 days will be " + sleepTotal2 + "hrs, and your average " + hos + " over the past 3 days will be " + sleepAvg + "hrs per night. While your current average amount of " + hos + " over the past 2 days is " + sleepASF + "hrs per night."); //output with correct results using variables given

