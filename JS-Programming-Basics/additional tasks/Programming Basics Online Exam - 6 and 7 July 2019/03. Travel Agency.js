function travel(input) {

    let city = input[0];
    let package = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let price = 0;
    let isValid = true;

    if (city === "Bansko" || city === "Borovets") {
        switch (package) {
            case "withEquipment":
                price = 100;
                if (vip === "yes") {
                    price *= 0.90;
                }
                break;
            case "noEquipment":
                price = 80;
                if (vip === "yes") {
                    price *= 0.95;
                }
                break;
            default:
                isValid = false;
                break;
        }
    } else if (city === "Varna" || city === "Burgas") {
        switch (package) {
            case "withBreakfast":
                price = 130;
                if (vip === "yes") {
                    price *= 0.88;
                }
                break;
            case "noBreakfast":
                price = 100;
                if (vip === "yes") {
                    price *= 0.93;
                }
                break;
            default:
                isValid = false;
                break;
        }
    } else {
        isValid = false;
    }

    if (days > 7 && isValid) {
        days--;
    }

    let total = days * price;

    if (days < 1) {
        console.log("Days must be positive number!");
    } else if (!isValid) {
        console.log("Invalid input!");
    } else {
        console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
    }

}

travel(["Gabrovo",
    "noBreakfast",
    "no",
    "3"
])