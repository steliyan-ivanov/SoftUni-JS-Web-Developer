function aluminiumJoinery(input) {

    let windows = Number(input[0]); // Брой дограми
    let windowType = input[1]; // Вид на дограмите
    let delivery = input[2]; // С доставка или без доставка
    let windowPrice = 0;
    let deliveryPrice = 0;



    if (windowType === "90X130") {
        windowPrice = 110;
        if (windows > 30 && windows <= 60) {
            windowPrice *= 0.95;
        } else if (windows > 60) {
            windowPrice *= 0.92;
        }
    } else if (windowType === "100X150") {
        windowPrice = 140;
        if (windows > 40 && windows <= 80) {
            windowPrice *= 0.94;
        } else if (windows > 80) {
            windowPrice *= 0.9;
        }
    } else if (windowType === "130X180") {
        windowPrice = 190;
        if (windows > 20 && windows <= 50) {
            windowPrice *= 0.93;
        } else if (windows > 50) {
            windowPrice *= 0.88;
        }
    } else if (windowType === "200X300") {
        windowPrice = 250;
        if (windows > 25 && windows <= 50) {
            windowPrice *= 0.91;
        } else if (windows > 50) {
            windowPrice *= 0.86;
        }
    }

    if (delivery === "With delivery") {
        deliveryPrice += 60;
    } else if (delivery === "Without delivery") {
        deliveryPrice;
    }

    let totalCost = (windows * windowPrice) + deliveryPrice;

    if (windows > 99) {
        totalCost *= 0.96;
        console.log(`${totalCost.toFixed(2)} BGN`);
    } else if (windows < 10) {
        console.log("Invalid order");
    } else {
        console.log(`${totalCost.toFixed(2)} BGN`);
    }

}

aluminiumJoinery(["105",
    "100X150",
    "With delivery"
])