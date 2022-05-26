function shop(input) {

    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    switch (town) {
        case "Sofia":
            if (product === "coffee") {
                console.log(quantity * 0.50);
            } else if (product === "water") {
                console.log(quantity * 0.8);
            } else if (product === "beer") {
                console.log(quantity * 1.2);
            } else if (product === "sweets")
                console.log(quantity * 1.45);
            else if (product === "peanuts") {
                console.log(quantity * 1.60);
            }
            break;

        case "Plovdiv":
            if (product === "coffee") {
                console.log(quantity * 0.4);
            } else if (product === "water") {
                console.log(quantity * 0.7);
            } else if (product === "beer") {
                console.log(quantity * 1.15);
            } else if (product === "sweets")
                console.log(quantity * 1.30);
            else if (product === "peanuts") {
                console.log(quantity * 1.50);
            }
            break;

        case "Varna":
            if (product === "coffee") {
                console.log(quantity * 0.45);
            } else if (product === "water") {
                console.log(quantity * 0.7);
            } else if (product === "beer") {
                console.log(quantity * 1.1);
            } else if (product === "sweets")
                console.log(quantity * 1.35);
            else if (product === "peanuts") {
                console.log(quantity * 1.55);
            }
            break;
    }

}

shop(["coffee",
    "Varna",
    "2"
])