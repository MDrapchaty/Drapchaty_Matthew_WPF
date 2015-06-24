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
console.log("The circumference of the circle is " + circumference + "."); //print out using returned variable result



//stung


//vars
var victimWeight = 185;  //variable for animals weight in lbs


//function
function deathByStings(weight) { //creating function, and parameter
    var result = weight * 8.666666667; //creating variable to store result
    return result; // returning result
}

//main code
var stings = deathByStings(victimWeight); // creating var to return result to, and calling function
console.log("It takes " + stings + " bee stings to kill this animal.");



