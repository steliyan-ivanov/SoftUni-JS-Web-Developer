function evenAndOdd(array) {

    let sumEven = 0;
    let sumOdd = 0;

    for (let number of array) {

        if (number % 2 == 0) {
            sumEven += number;
        } else {
            sumOdd += number
        }

    }

    let diff = sumEven - sumOdd;
    console.log(diff);

}

evenAndOdd([3, 5, 7, 9])