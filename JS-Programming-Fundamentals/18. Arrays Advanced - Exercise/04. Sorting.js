function sorting(arr) {
    let result = [];

    arr.sort((a, b) => a - b);


    for (let i = 0; i < arr.length + 1; i++) {
        result.push(arr.pop());
        result.push(arr.shift());
    }
    result.push(arr.pop());
    result.push(arr.shift());

    console.log(result.join(" "));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])