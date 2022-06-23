function solve(array) {

    let currentBiggest = array[0];
    let newArray = [];
    newArray.push(currentBiggest);

    for (let i = 1; i < array.length; i++) {

        if (array[i] >= currentBiggest) {
            currentBiggest = array[i];
            newArray.push(currentBiggest)
        }

    }
    console.log(newArray.join(" "));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])