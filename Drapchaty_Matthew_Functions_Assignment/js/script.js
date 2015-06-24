/* Drapchaty, Matthew
    Functions Assignment
    6/23/2015  */
//Florida lottery has six random numbers between 1 and 53; the Powerball lottery has five random numbers between 1 and 59 and a powerball between 1 and 35

//variables




//functions
function randomNumGen(min, max, num) {

    var randomArray = [];


    for (var i = 0; i < num; i++) {

        var randomNum = Math.random() * (max - min) + min;

        while(randomArray.indexOf(Math.round(randomNum)) != -1){
            randomNum = Math.random() * (max - min) + min;
        }
        randomArray[i] = Math.round(randomNum);

    }
    return randomArray;
}


//main code

florida = randomNumGen(1, 53, 6);

console.log("The numbers for the Florida lottery are " + florida + "!");

powerBall = randomNumGen(1, 59, 5);
powerBallNum = randomNumGen(1, 35, 1);

console.log("The numbers for the Powerball lottery are " + powerBall + " ,and the Powerball number is " + powerBallNum + "!");