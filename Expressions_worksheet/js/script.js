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

// add the 5 totals together to get the grand total spending
// add the 5 totals together and divide by the number of weeks, 5, to get the average.
var total = spending[0] + spending[1] + spending[2] + spending[3] + spending[4]; // creating the result for total money spent on groceries.
var average = total / 5; // creating the result for average money spent per week, over a 5 week period
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week."); // creating the print of both results so it can be understood


//discounts

var original = 99.99; //setting number variable for orignal price
var discount = 25 ; // setting number variable for discount percentage
var item = "jacket"; //setting string variable for item
var taxPercent = 12.5; //setting number variable for tax percentage

// to get discount price multiply original price by the discount percentage divided by 100.
// then we multiply tax percent number variable by orignal number and add it to orignal price number .

var noTax = original * (discount/100); // creating result for discounted item with no tax.
var taxed = noTax + original * (taxPercent/100); //created for result for discounted item with tax.

console.log("Your " + item + " was originally $" + original + ", but after a " + discount + "% discount, it is now $" + noTax + " without tax, and $" + taxed + " with tax." );
