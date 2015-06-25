/* Drapchaty, Matthew
    Functions Assignment
    6/23/2015  */
//Florida lottery has six random numbers between 1 and 53; the Powerball lottery has five random numbers between 1 and 59 and a powerball between 1 and 35

//variables
var lotteryChoice = prompt("Would you like the results for the Florida lottery, or the Powerball lottery? Please respond with \"florida\" or \"powerball\"\n\n(Do not use quotations or capitals)."); // creating a variable prompting the user for either florida or powerball
var timesClicked = 1; // creating a variable for times clicked to use in prompt validation


//functions

function randomNumGen(min, max, num) { //function to generate random arrays, with max min and number or numbers as parameters

    var randomArray = []; // creating variable to store result, the random array


    for (var i = 0; i < num; i++) { //for loop with an option to enter an argument to dictate how many numbers exist in the array

        var randomNum = Math.random() * (max - min) + min; //generate a random number and store it to a variable

        while(randomArray.indexOf(Math.round(randomNum)) != -1){ //creating a loop to ensure the random number doesnt already exist in the index of the array
            randomNum = Math.random() * (max - min) + min; // re randomize a number if its already chosen
        }
        randomArray[i] = Math.round(randomNum); // assign the random number to a slot in the random array

    }
    return randomArray; // returning random array so it can be output outside of the function
}


//main code

florida = randomNumGen(1, 53, 6); // calling the random array function with arguments for between 1 and 53 with 6 numbers and assigning result to florida
powerBall = randomNumGen(1, 59, 5); // calling the random array function with arguments for between 1 and 59 and 5 numbers and assigning result to powerball
powerBallNum = randomNumGen(1, 35, 1); // calling the random array function between 1 and 35 with only one number for PB and assigning to powerballnum

while(lotteryChoice == ""){ //prompt validation triggers if the answer the user inputs is blank
    lotteryChoice = prompt("Please enter \"florida\" or \"powerball\"\n\n(Do not use quotations or capitals)"); //reattempt to gain the info from the user with prompt and store it in lotteryChoice
    timesClicked ++; // timesClicked = timesClicked + 1, adding a click to the loop so it is not infinite
    if(timesClicked > 5){ // once times clicked or times left blank > 5, triggers this
        console.log("You have not entered \"florida\" or \"powerball\"."); //output for too many times clicked without enterint florida or powerball
        break; // break out of loop
    }

}


if(lotteryChoice === "florida") { //if statment, if florida was entered by user
    console.log("The numbers for the Florida lottery are " + florida + "!"); // output for florida results
}else if(lotteryChoice === "powerball") { //else if statement, if powerball was entered by user
    console.log("The numbers for the Powerball lottery are " + powerBall + " ,and the Powerball number is " + powerBallNum + "!"); // output for powerball results
}

    /* powerball numbers: 23,57,50,36,44 and the pb is 21
       florida numbers: 7,24,38,6,52,20 */




