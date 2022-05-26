function numbers(input) {

    let goalNumber = input[0];
    let sumOfNumbers = 0;
    let index = 1;
    let currentNumber = input[index];

    while (sumOfNumbers <= goalNumber) {
        sumOfNumbers += currentNumber;
        index++;
        currentNumber = input[index];
    }

    console.log(sumOfNumbers);

}

numbers([100, 10, 20, 30, 45])