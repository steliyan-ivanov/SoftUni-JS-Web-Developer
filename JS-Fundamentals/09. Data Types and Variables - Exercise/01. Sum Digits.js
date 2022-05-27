function sumDigits(number) {

    let numberToString = String(number);
    let result = 0;
    for (let i = 0; i < numberToString.length; i++) {
        result += Number(numberToString[i]);
    }

    console.log(result);

}

sumDigits(245678)