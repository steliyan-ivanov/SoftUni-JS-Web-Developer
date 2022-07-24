function smallesNumbers(arr) {

    let sortedNumbers = arr.sort((a, b) => a - b);
    console.log(sortedNumbers.slice(0, 2).join(" "));
}

smallesNumbers([30, 15, 50, 5])