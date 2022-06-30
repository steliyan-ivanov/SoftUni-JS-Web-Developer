function numberModification(number) {
    let numbers = [];
    let sum = 0;
    let n = 0;
    for (let el of number.toString()) {
        numbers.push(el)
        sum += Number(el);
        n++;
    }
    let average = sum / n;
    for (let i = 0; average <= 5; i++) {
        numbers.push(9);
        sum += 9;
        n++;
        average = sum / n
    }
    console.log(numbers.join(""));
}
numberModification(101)