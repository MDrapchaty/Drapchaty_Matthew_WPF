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
        randomArray[i] = Math.round(randomNum);
        for(j=0; j < randomArray.length; j++)
            if(randomNum == randomArray[j]) {
                var found = true;
                break;
            }
        if(!found) {
            randomNum = Math.random() * (max - min) + min;
            randomArray[i] = Math.round(randomNum);
        }

        }

    return randomArray;
}


//main code

florida = randomNumGen(1, 53, 6);
console.log(florida);

powerBall = randomNumGen(1, 59, 5);
console.log(powerBall);