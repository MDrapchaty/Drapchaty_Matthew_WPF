/* Drapchaty, Matthew
    6/23/15
    Functions_worksheet */


//calculate the circumference of a circle

//vars
var radius = 11; //creating variable for radius

//function

function calcCirc(radius) { //function for how to find circumference equation, with parameter named radius
    var circum = 2 * 3.14 * radius;  //creating a variable to store result
    return circum; // returning result to variable circum
}

//main code
var circumference = calcCirc(radius); //calling function using argument
console.log(circumference); //print out using returned variable result