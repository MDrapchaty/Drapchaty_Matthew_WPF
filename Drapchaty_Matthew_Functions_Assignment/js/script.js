/* Drapchaty, Matthew
    Functions Assignment
    6/23/2015  */
//Florida lottery has six random numbers between 1 and 53; the Powerball lottery has five random numbers between 1 and 59 and a powerball between 1 and 35

//variables




//functions
function randomNumGen(min, max){
    var florida = Math.random() * (max-min) + min;
    florida = Math.round(florida);

    return florida;
}


//main code

randomNumGen(1, 53);