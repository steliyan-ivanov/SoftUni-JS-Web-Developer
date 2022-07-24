function processOddNumbers(numbers) {

    let filteredElements = numbers.filter((el, i) => i % 2 == 1);
    filteredElements.reverse();
    let result = filteredElements.map(x => x * 2);
    console.log(result.join(" "));

}

processOddNumbers([10, 15, 20, 25])