function energyBooster(input) {

    let fruit = input[0];
    let setSize = input[1];
    let setNum = Number(input[2]);

    let price = 0;
    let totalPrice = 0;

    switch (fruit) {
        case "Watermelon":
            switch (setSize) {
                case "small":
                    price = 56;
                    totalPrice = (price * 2) * setNum;
                    break;
                case "big":
                    price = 28.70;
                    totalPrice = (price * 5) * setNum;
                    break;
            }
            break;
        case "Mango":
            switch (setSize) {
                case "small":
                    price = 36.66;
                    totalPrice = (price * 2) * setNum;
                    break;
                case "big":
                    price = 19.60;
                    totalPrice = (price * 5) * setNum;
                    break;
            }
            break;
        case "Pineapple":
            switch (setSize) {
                case "small":
                    price = 42.10;
                    totalPrice = (price * 2) * setNum;
                    break;
                case "big":
                    price = 24.80;
                    totalPrice = (price * 5) * setNum;
                    break;
            }
            break;
        case "Raspberry":
            switch (setSize) {
                case "small":
                    price = 20;
                    totalPrice = (price * 2) * setNum;
                    break;
                case "big":
                    price = 15.20;
                    totalPrice = (price * 5) * setNum;
                    break;
            }
            break;
    }

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice *= 0.85;
    } else if (totalPrice > 1000) {
        totalPrice *= 0.50;
    }


    console.log(totalPrice.toFixed(2) + " lv.");

}

energyBooster(["Mango",
    "big",
    "8"
])