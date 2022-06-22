function printElement(array) {


    let step = Number(array[array.length - 1])
    arrayOfString = [];

    for (let i = 0; i < array.length - 1; i += step) {
        arrayOfString.push(array[i]);
    }

    console.log(arrayOfString.join(" "));

}

printElement(['5', '20', '31', '4', '20', '2'])