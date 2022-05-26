function operations(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let type = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            if (result % 2 == 0) {
                type = "even"
            } else {
                type = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`);
            break;


        case "-":
            result = num1 - num2;
            if (result % 2 == 0) {
                type = "even"
            } else {
                type = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`);
            break;


        case "*":
            result = num1 * num2;
            if (result % 2 == 0) {
                type = "even"
            } else {
                type = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`);
            break;

        case "/":
            result = (num1 / num2).toFixed(2);
            if (num2 !== 0) {
                console.log(`${num1} ${operator} ${num2} = ${result}`);
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            }
            break;

        case "%":
            result = num1 % num2;
            if (num2 !== 0) {
                console.log(`${num1} ${operator} ${num2} = ${result}`);
            } else {
                console.log(`Cannot divide ${num1} by zero`);
            }
            break;
        default:
            break;
    }
}

operations(["10",
    "3",
    "%"
])