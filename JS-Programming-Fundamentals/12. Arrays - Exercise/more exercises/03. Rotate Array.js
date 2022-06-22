function rotateArray(arr) {
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();
    for (let i = 1; i <= rotations; i++) {
        let current = arr.pop();
        arr.unshift(current);
    }
    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2'])