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
        if(randomArray[1] == randomArray[0]) {
            randomNum = Math.random() * (max - min) + min;
            randomArray[i] = Math.round(randomNum);
        }else if(randomArray[2] == randomArray[1] || randomArray[0]){
            randomArray[i] = Math.round(randomNum++)
        }else if(randomArray[3] == randomArray[0]) {
            randomArray[i] = Math.round(randomNum++)
        }else if(randomArray[3] == randomArray[1] || randomArray[2]){
            randomArray[i] = Math.round(randomNum++)
        }else if(randomArray[4] == randomArray[0] || randomArray[1]){
            randomArray[i] = Math.round(randomNum++)
        }else if(randomArray[4 == randomArray[2] || randomArray[3]]){
            randomArray[i] = Math.round(randomNum++)
        }else if(randomArray[5] == randomArray[0]){
            randomArray[i] = Math.round(randomNum++)
        }else if(randomArray[5] == randomArray[1] || randomArray[2]){
            randomArray[i] = Math.round(randomNum++)
        }else if(randomArray[5] == randomArray[3] || randomArray[4]){
            randomArray[i] = Math.round(randomNum++);
        }
    }
    return randomArray;
}


//main code

florida = randomNumGen(1, 53, 6);
console.log("The results are " + florida + ".");

powerBall = randomNumGen(1, 59, 5);

powerBallNum = randomNumGen(1, 35, 1);
console.log("The results are " + powerBall + " ,and the powerball number is " + powerBallNum + ".");