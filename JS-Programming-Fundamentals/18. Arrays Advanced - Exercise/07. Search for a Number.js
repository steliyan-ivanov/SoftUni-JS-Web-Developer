function solve(array1, array2) {
    let takeFromStart = array2[0];
    let deleteFromStart = array2[1];
    let lookForNumber = array2[2];
    let numbers = array1.slice(0, takeFromStart);
    let deleteNumber = numbers.splice(0, deleteFromStart);
    let counter = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] == lookForNumber) {
            counter++;
        }
    }
    console.log(`Number ${lookForNumber} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3])