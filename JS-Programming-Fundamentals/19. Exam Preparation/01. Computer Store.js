function computerStore(arr) {
    let i = 0;
    let partPrice = 0;
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let customerIsRegular = true;
    while (arr[i] !== "special" && arr[i] !== "regular") {
        if (arr[i] < 0) {
            console.log("Invalid price!");
            i++;
            continue;
        }
        partPrice = Number(arr[i]);
        priceWithoutTaxes += partPrice;
        taxes += partPrice * 0.2;
        i++;
    }
    let totalPrice = taxes + priceWithoutTaxes;
    if (arr[i] === "special") {
        customerIsRegular = false;
    }
    if (!customerIsRegular) {
        totalPrice *= 0.9;
    }
    if (totalPrice === 0) {
        console.log("Invalid order!");
        return;
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])