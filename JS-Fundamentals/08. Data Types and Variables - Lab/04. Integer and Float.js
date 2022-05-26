function digits(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let isInteger = sum % 1 === 0;

    if (isInteger) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }

}

digits(9, 100, 1.1)