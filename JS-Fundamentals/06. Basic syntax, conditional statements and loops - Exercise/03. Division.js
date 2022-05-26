function division(num) {

    let divNumber = 0;

    if (num % 10 == 0) {
        divNumber = 10;
        console.log(`The number is divisible by ${divNumber}`);
    } else if (num % 7 == 0) {
        divNumber = 7;
        console.log(`The number is divisible by ${divNumber}`);
    } else if (num % 6 == 0) {
        divNumber = 6;
        console.log(`The number is divisible by ${divNumber}`);
    } else if (num % 3 == 0) {
        divNumber = 3;
        console.log(`The number is divisible by ${divNumber}`);
    } else if (num % 2 == 0) {
        divNumber = 2;
        console.log(`The number is divisible by ${divNumber}`);
    } else {
        console.log('Not divisible');
    }

}

division(1643)