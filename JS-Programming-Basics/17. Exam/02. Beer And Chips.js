function beerAndChips(input) {

    let name = input[0];
    let budget = Number(input[1]);
    let beers = Number(input[2]);
    let chips = Number(input[3]);

    let beerPrice = 1.20;
    let totalBeerCost = beerPrice * beers;

    let chipsPrice = totalBeerCost * 0.45;
    let totalChipsCost = Math.ceil(chipsPrice * chips);

    let totalProductCosts = totalBeerCost + totalChipsCost;

    let diff = Math.abs(budget - totalProductCosts);

    if (budget >= totalProductCosts) {
        console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
    }

}

beerAndChips(['George', '10', '2', '3'])