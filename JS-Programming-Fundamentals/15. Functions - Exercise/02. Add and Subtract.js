function addAndSubstract(intOne, intTwo, intThree) {

    let resultFirstAndSecond = sum(intOne, intTwo);
    console.log(substract(resultFirstAndSecond, intThree));

    function sum(intOne, intTwo) {
        return intOne + intTwo;
    }

    function substract(resultFirstAndSecond, intThree) {
        return resultFirstAndSecond - intThree;
    }
}

addAndSubstract(23, 6, 10)