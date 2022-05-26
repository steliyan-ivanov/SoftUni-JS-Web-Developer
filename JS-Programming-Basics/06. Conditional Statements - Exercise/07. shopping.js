function shopping(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videocardsCost = videocards * 250;
    let processorsCost = processors * (videocardsCost * 0.35);
    let ramCost = ram * (videocardsCost * 0.1);

    let totalCost = videocardsCost + processorsCost + ramCost;

    if (videocards > processors) {
        totalCost = totalCost * 0.85;
    }

    if (totalCost <= budget) {
        console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`);
    }

}

shopping(["900",
    "2",
    "1",
    "3"
])