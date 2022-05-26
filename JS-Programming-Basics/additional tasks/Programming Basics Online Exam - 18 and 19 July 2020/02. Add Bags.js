function addBags(input) {

    let priceForBagMoreThan20 = Number(input[0]);
    let bagKg = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let numberOfBags = Number(input[3]);

    let totalPriceForAllBags = 0;

    if (daysToTrip > 30) {

        if (bagKg > 20) {
            totalPriceForAllBags = (priceForBagMoreThan20 * numberOfBags);
            totalPriceForAllBags *= 1.1;
        } else if (bagKg >= 10 && bagKg <= 20) {
            totalPriceForAllBags = (priceForBagMoreThan20 * 0.50) * numberOfBags;
            totalPriceForAllBags *= 1.1;
        } else if (bagKg < 10) {
            totalPriceForAllBags = (priceForBagMoreThan20 * 0.20) * numberOfBags;
            totalPriceForAllBags *= 1.1;
        }
    } else if (daysToTrip <= 30 && daysToTrip >= 7) {
        if (bagKg > 20) {
            totalPriceForAllBags = (priceForBagMoreThan20 * numberOfBags);
            totalPriceForAllBags *= 1.15;
        } else if (bagKg >= 10 && bagKg <= 20) {
            totalPriceForAllBags = (priceForBagMoreThan20 * 0.50) * numberOfBags;
            totalPriceForAllBags *= 1.15;
        } else if (bagKg < 10) {
            totalPriceForAllBags = (priceForBagMoreThan20 * 0.20) * numberOfBags;
            totalPriceForAllBags *= 1.15;
        }
    } else if (daysToTrip < 7) {
        if (bagKg > 20) {
            totalPriceForAllBags = (priceForBagMoreThan20 * numberOfBags);
            totalPriceForAllBags *= 1.40;
        } else if (bagKg >= 10 && bagKg <= 20) {
            totalPriceForAllBags = (priceForBagMoreThan20 * 0.50) * numberOfBags;
            totalPriceForAllBags *= 1.40;
        } else if (bagKg < 10) {
            totalPriceForAllBags = (priceForBagMoreThan20 * 0.20) * numberOfBags;
            totalPriceForAllBags *= 1.40;
        }
    }

    console.log(`The total price of bags is: ${totalPriceForAllBags.toFixed(2)} lv. `);
}

addBags([
    '25.50',
    '5',
    '36',
    '6'


])