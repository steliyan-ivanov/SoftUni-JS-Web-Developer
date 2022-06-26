function mathPower(input1, input2) {
    let number = Number(input1);
    let power = Number(input2);
    let result = 1;

    for (let i = 1; i <= power; i++) {
        result = result * number;
    }

    console.log(result);
}

mathPower(2, 8);