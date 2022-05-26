function coffee(input) {

    let drinkType = input[0];
    let sugar = input[1];
    let drinkNum = input[2];
    let price = 0;

    switch (drinkType) {
        case "Espresso":
            switch (sugar) {
                case "Without":
                    price = 0.90;
                    break;
                case "Normal":
                    price = 1;
                    break;
                case "Extra":
                    price = 1.20;
                    break;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without":
                    price = 1;
                    break;
                case "Normal":
                    price = 1.20;
                    break;
                case "Extra":
                    price = 1.60;
                    break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without":
                    price = 0.50;
                    break;
                case "Normal":
                    price = 0.60;
                    break;
                case "Extra":
                    price = 0.70;
                    break;
            }
            break;
    }

    let total = drinkNum * price;

    if (sugar === "Without") {
        total *= 0.65;
    }
    if (drinkType === "Espresso" && drinkNum >= 5) {
        total *= 0.75;
    }
    if (total > 15) {
        total *= 0.80;
    }

    console.log(`You bought ${drinkNum} cups of ${drinkType} for ${total.toFixed(2)} lv.`);

}

coffee(["Espresso",
    "Without",
    "10"
])