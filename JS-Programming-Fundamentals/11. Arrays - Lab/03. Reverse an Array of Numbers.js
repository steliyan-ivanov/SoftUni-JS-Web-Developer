function reverseArray(n, inputArr) {

    let result = [];

    for (let i = n - 1; i >= 0; i--) {
        result.push(inputArr[i])
    }

    console.log(result.join(" "));


}

reverseArray(3, [10, 20, 30, 40, 50])