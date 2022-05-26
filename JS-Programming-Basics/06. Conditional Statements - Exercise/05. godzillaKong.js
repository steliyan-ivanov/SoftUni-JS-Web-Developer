function godzilla(input) {
    let budget = Number(input[0]);
    let stats = Number(input[1]);
    let statClotePrice = Number(input[2]);
    let decor = budget * 0.1;
    let statClotesTotal = stats * statClotePrice;

    if (stats >= 150) {
        statClotesTotal = statClotesTotal * 0.9;
    }

    let totalCosts = statClotesTotal + decor;

    if (totalCosts > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCosts - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCosts).toFixed(2)} leva left.`);
    }
}

godzilla(["20000",
    "120",
    "55.5"
])