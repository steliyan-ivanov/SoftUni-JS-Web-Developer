function commonElements(array1, array2) {

    let matches = '';

    for (let i = 0; i < array1.length; i++) {
        for (let r = 0; r < array2.length; r++) {
            if (array1[i] === array2[r]) {
                matches = array2[r]
                console.log(matches);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])