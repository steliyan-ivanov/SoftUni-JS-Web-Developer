function sumEven(strings) {
    let sum = 0;
    for (let number of strings) {
        number = Number(number);
        if (number % 2 == 0) {
            sum += number;
        }
    }
    console.log(sum);
}
sumEven(['1', '2', '3', '4', '5', '6']);



//ВТОРИ НАЧИН


function sumEven(strings) {
    let sum = 0;

    for (let i = 0; i < strings.length; i++) {
        let number = Number(strings[i]);

        if (number % 2 == 0) {
            sum += number;
        }
    }
    console.log(sum);
}
sumEven(['1', '2', '3', '4', '5', '6']);