/* Drapchaty, Matthew
   Expressions_worksheet
   6/10/2015
 */
  //dog years
  //multiply human years by 7 to get dog years
var humanYears = 3; // setting human years variable
var sparkysAge = 7 * humanYears; //setting dog (sparky) years variable

console.log("Sparky is " + humanYears +" human years old, which is " + sparkysAge + " in dog years." );
// output for answer of the equation concatenated w/ string data to read easily


//slice of pie part 1

var slices = 8; //setting number of slices per pizza variable
var people = 10; //setting number of people at the party variable
var pizzas = 4; //setting number of pizzas ordered variable

//multiply slices * pizzas to get total number of slices. Divide that number by poeple to get answer.
var result = slices * pizzas / people; //equation to get result
console.log("Each person ate " + result + " slices of pizza at the party."); // output of answer, easily read


//slice of pie part 2

var remainder = slices * pizzas % people; // multiply slices and pizzas, and use the modulo sign with people to get the remaining slices
console.log("Sparky got " + remainder + " slice of pizza."); //output of answer so it can be read


//average shopping bill

var spending = [144, 179, 122, 104, 217]; // setting an array of spending cost results as a variable
var totalSpending = spending[0] + spending[1] + spending[2] + spending[3] + spending[4];
console.log(totalSpending);



