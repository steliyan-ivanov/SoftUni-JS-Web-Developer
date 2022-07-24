function districtArray(arr) {
    let newArray = [];
    for (let el of arr) {
        if (!newArray.includes(el)) {
            newArray.push(el);
        }
    }
    console.log(newArray.join(' '));
}
districtArray([7, 8, 9, 7, 2, 3, 4, 1, 2])