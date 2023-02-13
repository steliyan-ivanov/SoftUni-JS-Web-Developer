function solve(num1, num2) {
    let sum = 0;
    let string = '';
    for (let i = num1; i <= num2; i++) {
        string += `${i} `
        sum += i;
    }
    console.log(string);
    console.log(`Sum: ${sum}`);

}

solve(50, 60)