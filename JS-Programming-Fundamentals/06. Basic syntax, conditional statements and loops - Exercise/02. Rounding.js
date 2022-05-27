function solve(num1, num2) {
    let number = Number(num1);
    let precision = Number(parseFloat(num2));
    if (precision > 15) {
        precision = 15;
    }
    console.log(parseFloat(number.toFixed(precision)));
}

solve(10.5, 3)