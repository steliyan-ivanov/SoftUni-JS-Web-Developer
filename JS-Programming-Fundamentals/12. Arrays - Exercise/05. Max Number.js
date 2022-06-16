function maxNumber(array) {
    let newArray = [];
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        let number1 = array[i];
        let isLargest = true;

        for (let j = i + 1; j < arrayL; j++) {
            let number2 = array[j];

            if (number1 <= number2) {
                isLargest = false;
            }
        }

        if (isLargest) {
            newArray.push(number1)
        }
    }

    console.log(newArray.join(' '));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);