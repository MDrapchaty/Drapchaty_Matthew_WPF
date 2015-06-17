/* Drapchaty, Matthew
6/16/15
Conditionals Worksheet
 */
//Celsius to Farenheit converter
var degrees = 212;// creating a number variable for temperature. a prompt may ask to enter current temperature in degrees.
var unit = ("C");// creating a string variable, to represent unit that degrees is being converted to. a prompt may ask to enter unit you wish to convert to either F or C.

if(unit === "F"){ // creating a true false equation, where F is true and C(not F) is false
    console.log("The temperature is " + Number(degrees*1.8 + 32) + " degrees Fahrenheit.") //output for true, meaning F was entered as unit, with equation converting the temperature from C to F
}else{  //else makes an "otherwise" to do this
    console.log("The temperature is " + (degrees-32) *.5556 + " degrees Celsius.");// F was not true so by elimination we assume C was used and print the output for celsius, including equation to convert degrees from F to C
}

//last chance for gas

var mpg = 30; // variable for gas efficiency in miles per gallon.
var guage = 50;// variable for guage reading of the gas tank in %.
var fullTank = 19; // variable for gas tank capacity in gallons.
var gallonsLeft = fullTank * (guage *.01);
var milesLeft = mpg * gallonsLeft; // creating equation to find out how many miles left worth of gas in tank.

if(milesLeft >= 200){
    console.log("Yes, you can make it without stopping for gas!") // output for true, true being yes we have 200 miles worth of gas or more
}else{
    console.log("You only have " + gallonsLeft + " gallons of gas in your tank, better get gas now while you can!"); // output for false, false being we do not have equal to or more than 200 miles worth of gas remaining
}

//Grade Letter Calculator

var grade = 85; //variable for grade in percentage
if(grade >= 90){//creating else if with conditionals, 90+ is an A, 80+ is a B, 73+ is a C, 70+ is a D, and below 70 is an F.
   console.log("You have a " + grade + "%, which means you have earned a(n) A in the class!") //output for A
}else if(grade >= 80){
    console.log("You have a " + grade + "%, which means you have earned a(n) B in the class!") //output for B
}else if(grade >= 73){
    console.log("You have a " + grade + "%, which means you have earned a(n) C in the class!") //output for C
}else if(grade >=70){
    console.log("You have a " + grade + "%, which means you have earned a(n) D in the class!") //output for D
}else{
    console.log("You have a " + grade + "%, which means you have earned a(n) F in the class!"); //out put for F
}

//check the login

var usernameUser = "Drapchaty";
var passwordUser = "Full Sail";
var usernameCorrect = "Drapchaty";
var passwordCorrect = "Full Sail";

if(usernameUser === usernameCorrect && passwordUser === passwordCorrect){ //creating if to make sure username AND password both match
    console.log("Welcome, " + usernameCorrect + "!")//output for username and password both matching
}else if(usernameUser != usernameCorrect){//else if for incorrect username
    console.log("User not found. Try again.")//output for incorrect username
}else if(passwordUser != passwordCorrect){//else if for incorrect password
    console.log("Password does not match our records.");//output for incorrect password
}

//Movie Ticket Price

var time = 15;//variable for time of movie 1-24 military style hours , 1-12 being am,13-24 being pm
var age = 54;//variable for age, in years
if(time >= 15 && time <= 17){// if for time between 3pm and 5pm true
    console.log("The ticket price is 7.00$.")//output for if between 3pm and 5pm true
}else if(age < 10 || age >= 55){// else if for either below 10 years old OR 55 years old and older
    console.log("The ticket price is 7.00$.")// output for below 10 yo, and 55 yo and older
}else{ // anything else
    console.log("The ticket price is 12.00$.");//output for anything else.
}







