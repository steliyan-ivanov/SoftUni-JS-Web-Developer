function signCheck(numOne, numTwo, numThree) {

    let negativeCounter = 0;

    if (numOne < 0) {
        negativeCounter++;
    }
    if (numTwo < 0) {
        negativeCounter++;
    }
    if (numThree < 0) {
        negativeCounter++;
    }



    if (negativeCounter % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

}


signCheck(-1, -2, -3

)