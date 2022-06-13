function equalArrays(string1, string2) {

    let sum = 0;

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } else {
            sum += Number(string1[i])
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);

}

equalArrays(['10', '20', '30'], ['10', '20', '30'])