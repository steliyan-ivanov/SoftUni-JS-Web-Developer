function newHouse(input) {
    let flowersType = input[0];
    let flowersNum = Number(input[1]);
    let budget = Number(input[2]);
    let total = flowersNum * 0;
    switch (flowersType) {
        case "Roses":
            if (flowersNum > 80) {
                total = (flowersNum * 5) * 0.9;
            } else {
                total = flowersNum * 5;
            }
            break;
        case "Dahlias":
            if (flowersNum > 90) {
                total = (flowersNum * 3.8) * 0.85;
            } else {
                total = flowersNum * 3.8;
            }
            break;
        case "Tulips":
            if (flowersNum > 80) {
                total = (flowersNum * 2.8) * 0.85;
            } else {
                total = flowersNum * 2.8;
            }
            break;
        case "Narcissus":
            if (flowersNum < 120) {
                total = (flowersNum * 3) * 1.15;
            } else {
                total = flowersNum * 3;
            }
            break;
        case "Gladiolus":
            if (flowersNum < 120) {
                total = (flowersNum * 2.5) * 1.2;
            } else {
                total = flowersNum * 2.5;
            }
            break;
        default:
            console.log("Error")
            break;
    }
    if (total <= budget) {
        console.log(`Hey, you have a great garden with ${flowersNum} ${flowersType} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Narcissus",
    "119",
    "360"
])