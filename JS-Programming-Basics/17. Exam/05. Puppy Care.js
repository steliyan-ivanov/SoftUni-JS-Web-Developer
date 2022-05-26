function puppyCare(input) {
    let purchasedFoodInKilograms = Number(input[0]);
    let purchasedFoodInGrams = purchasedFoodInKilograms * 1000;
    let index = 1;
    let command = input[index];
    let totalEatenFood = 0;
    while (command !== 'Adopted') {
        let eatenFood = Number(command);
        totalEatenFood += eatenFood;
        index++;
        command = input[index];
    }
    let diff = Math.abs(totalEatenFood - purchasedFoodInGrams);
    if (totalEatenFood <= purchasedFoodInGrams) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }
}
puppyCare([
    '3',
    '1000',
    '1000',
    '1000',
    'Adopted'
])