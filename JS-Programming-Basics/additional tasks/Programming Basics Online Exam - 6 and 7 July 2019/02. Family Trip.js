function familyTrip(input) {

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let nightPrice = Number(input[2]);
    let additionalCostsPercent = Number(input[3]);
    let additionalCosts = (additionalCostsPercent * budget) / 100;

    if (nights > 7) {
        nightPrice *= 0.95;
    }


    let totalCostForNights = nightPrice * nights;
    let total = totalCostForNights + additionalCosts;

    let diff = Math.abs(budget - total);

    if (total <= budget) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }

}

familyTrip(["500",
    "7",
    "66",
    "15"
])