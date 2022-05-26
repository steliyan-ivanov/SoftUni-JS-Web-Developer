function number(input) {
    let number = Number(input[0]);
    let isValid = false;

    if (number >= 100 && number <= 200 || number === 0) {
        isValid = true;
    }
    if (!isValid) {
        console.log("invalid");
    }
}

number(["75"])