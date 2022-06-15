function arrayRotation(array, rotations) {

    while (rotations > 0) {
        let elementToMovie = array.shift();
        array.push(elementToMovie);
        rotations--;
    }

    console.log(array.join(" "));


}

arrayRotation([51, 47, 32, 61, 21], 2);