function accountBalance(input) {

    let index = 0;
    let currentElement = input[index];
    let total = 0;

    while (currentElement !== 'NoMoreMoney') {
        let elementAsNumber = Number(currentElement);
        if (elementAsNumber < 0) {
            console.log("Invalid operation!");
            break;
        }
        total += elementAsNumber;
        console.log(`Increase: ${elementAsNumber.toFixed(2)}`);
        index++;
        currentElement = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"
])