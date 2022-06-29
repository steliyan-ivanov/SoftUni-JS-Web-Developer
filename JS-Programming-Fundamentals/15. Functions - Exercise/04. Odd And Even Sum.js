function oddAndEven(number) {

    let numberToString = String(number);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numberToString.length; i++) {

        let currentNumber = Number(numberToString[i]);

        if (currentNumber % 2 == 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEven(3495892137259234)