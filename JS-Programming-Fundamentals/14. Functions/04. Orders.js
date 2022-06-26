function order(product, quantity) {
    let coffeePrice = 1.5;
    let waterPrice = 1;
    let cokePrice = 1.4;
    let snacksPrice = 2;
    let total;
    if (product === "coffee") {
        total = coffeePrice * quantity;
    } else if (product === "water") {
        total = waterPrice * quantity;
    } else if (product === "coke") {
        total = cokePrice * quantity;
    } else if (product === "snacks") {
        total = snacksPrice * quantity;
    }
    console.log(total.toFixed(2));
}
order("water", 5);