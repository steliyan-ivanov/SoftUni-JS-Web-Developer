function club(input) {
    let index = 0;
    let targetProfit = Number(input[index]);
    index++;
    let profit = 0;
    let command = input[index];
    while (command !== "Party!" && profit < targetProfit) {
        let cocktailName = command;
        let cocktailPrice = Number(cocktailName.length);
        index++;
        let cocktailNum = Number(input[index]);
        let orderTotal = cocktailNum * cocktailPrice;

        if (orderTotal % 2 === 1) {
            orderTotal *= 0.75;
        }

        profit += orderTotal;
        index++;
        command = input[index];
    }

    let diff = targetProfit - profit;

    if (command === "Party!") {
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }

    if (profit >= targetProfit) {
        console.log(`Target acquired.`);
    }

    console.log(`Club income - ${profit.toFixed(2)} leva.`);

}

club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"
])