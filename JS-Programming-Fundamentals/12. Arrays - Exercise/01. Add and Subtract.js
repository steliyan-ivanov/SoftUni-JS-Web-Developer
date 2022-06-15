function addSubstract(inputs) {

    let numbers = [];
    let newNumbers = [];
    let sumOfOriginal = 0;
    let sumOfNewNumbers = 0;

    for (let el of inputs) {
        numbers.push(el);
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            newNumbers.push(numbers[i] + i);
            sumOfOriginal += numbers[i];
        } else {
            newNumbers.push(numbers[i] - i);
            sumOfOriginal += numbers[i];
        }
    }

    for (let i = 0; i < newNumbers.length; i++) {
        sumOfNewNumbers += newNumbers[i];
    }

    console.log(newNumbers);
    console.log(sumOfOriginal);
    console.log(sumOfNewNumbers);


}

addSubstract([5, 15, 23, 56, 35])