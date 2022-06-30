function perfectNumber(int) {
    let perfectNumbers = [];
    for (let i = 0; i < int; i++) {
        if (int % i == 0) {
            perfectNumbers.push(i)
        }
    }
    let perfectNumbersSum = 0;
    for (let j = 0; j < perfectNumbers.length; j++) {
        perfectNumbersSum += perfectNumbers[j];
    }
    if (perfectNumbersSum == int) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(1236498)