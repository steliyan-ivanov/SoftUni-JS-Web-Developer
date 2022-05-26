function cinema(input) {
    let movie = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    if (movie === "Premiere") {
        price = 12;
        console.log(((r * c) * price).toFixed(2));
    } else if (movie === "Normal") {
        price = 7.5;
        console.log(((r * c) * price).toFixed(2));
    } else if (movie === "Discount") {
        price = 5;
        console.log(((r * c) * price).toFixed(2));
    }
}

cinema(["Discount",
    "12",
    "30"
])