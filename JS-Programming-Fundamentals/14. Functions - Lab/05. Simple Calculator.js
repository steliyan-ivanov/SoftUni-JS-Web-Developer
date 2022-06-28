function simpleCalculator(numOne, numTwo, operator) {
    let res;

    switch (operator) {
        case "multiply":
            res = (numOne, numTwo) => numOne * numTwo;
            break;
        case "divide":
            res = (numOne, numTwo) => numOne / numTwo;
            break;
        case "add":
            res = (numOne, numTwo) => numOne + numTwo;
            break;
        case "subtract":
            res = (numOne, numTwo) => numOne - numTwo;
            break;
        default:
            break;
    }

    console.log(res(numOne, numTwo));
}

simpleCalculator(40,
    8,
    'divide'

)