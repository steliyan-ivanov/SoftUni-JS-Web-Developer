function foodForPets(input) {

    let index = 0;
    let days = Number(input[index]);
    index++;
    let totalFood = Number(input[index]);
    index++;
    let foodEatenByDog = 0;
    let foodEatenByCat = 0;
    let sumFoodEatenByDog = 0;
    let sumFoodEatenByCat = 0;
    let bisquits = 0;

    for (let i = 1; i <= days; i++) {
        foodEatenByDog = Number(input[index]);
        sumFoodEatenByDog += foodEatenByDog;
        index++;
        foodEatenByCat = Number(input[index]);
        sumFoodEatenByCat += foodEatenByCat;
        index++;
        if (i % 3 == 0) {
            bisquits = bisquits + ((foodEatenByCat + foodEatenByDog) * 0.10);
        }
    }

    let totalEatenFood = sumFoodEatenByDog + sumFoodEatenByCat;

    let percentTotalEatenFood = (totalEatenFood / totalFood) * 100;
    let percentTotalEatenFoodByDog = (sumFoodEatenByDog / totalEatenFood) * 100;
    let percentTotalEatenFoodByCat = (sumFoodEatenByCat / totalEatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(bisquits)}gr.`);
    console.log(`${percentTotalEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentTotalEatenFoodByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentTotalEatenFoodByCat.toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"
])