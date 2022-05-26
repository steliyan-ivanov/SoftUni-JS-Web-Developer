function movie(input) {
    let budget = Number(input[0]);
    let statistics = Number(input[1]);
    let clotePrice = Number(input[2]);
    let totalClotesPrice = clotePrice * statistics;
    let decor = budget * 0.1;

    if (statistics > 150) {
        totalClotesPrice *= 0.90;
    }

    let totalCosts = totalClotesPrice + decor;
    let diff = Math.abs(budget - totalCosts);

    if (totalCosts > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}

movie(["15437.62",
    "186",
    "57.99"
])