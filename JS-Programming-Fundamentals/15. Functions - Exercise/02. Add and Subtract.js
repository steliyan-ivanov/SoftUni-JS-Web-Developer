function addAndSubstract(intOne, intTwo, intThree) {

    let sumFirstAndSecond = sum(intOne, intTwo);
    let finalResult = substract(sum, intThree);

    console.log(finalResult);

    function sum(intOne, intTwo) {
        return intOne + intTwo;
    }

    function substract(sumFirstAndSecond, intThree) {
        return sumFirstAndSecond - intThree;
    }


}

addAndSubstract(23,
    6,
    10
)