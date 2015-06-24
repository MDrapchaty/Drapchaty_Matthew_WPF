// functions - function execution

//variables
//var myName = prompt("Enter your name please: ");
/* var myRandom;
// functions
function nameValidation(firstName) {

    var timesClicked = 1;

    while (firstName === "") {

        firstName = prompt("Do not leave this blank! \n\nPlease enter your first name:");

        timesClicked++;

        if(timesClicked === 10) {

            console.log("Enough!");
            break;
        }

    }

    return firstName;

}

//function RNG
function randomNumGen(min, max, num) {

    var randomArray = [];

    //math is an object - has properties and methods
    //math.random()  * (max - min) + min
    //math.round() = round to the nearest whole number

    for (var i = 0; i < num; i++) {

        var randomNum = Math.random() * (max - min) + num;
        randomArray[i] = Math.round(randomNum);
    }
    return randomArray;
}




//main code
//myName = nameValidation(myName);
//console.log("hello, " + myName + ". Welcome!");

myRandom = randomNumGen(5, 25, 5);
console.log(myRandom);

myRandom = randomNumGen(100, 1000, 10);
console.log(myRandom);
*/
/* function outptMsg(){
    console.log("Hello World");
}

 var width = 5;
function calcArea(){
    var width = 20;
    var height =30;
    var area = width * height;
    //console.log(area);
}
console.log(width);
calcArea();
calcArea();
calcArea();
 */

/* var total = calcArea(30, 20);


 function calcArea(w, h){
    var area = w * h;
    return area; //function spitting info out
}

console.log(total);
*/
/* function dogYears(age){

    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}
var age1 = 4;
dogYears(age1);
dogYears(5);
*/

var functionName = function(){

}

functionName();