function careOfPuppy(input) {

    let food = Number(input[0]) * 1000;
    let index = 1;
    let command = input[index];
    let totalEatenFood = 0;

    while (command !== "Adopted") {
        let eatenFood = Number(command);
        totalEatenFood += eatenFood;
        index++;
        command = input[index];
    }

    let diff = Math.abs(totalEatenFood - food);

    if (totalEatenFood <= food) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }

}

careOfPuppy(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"
])