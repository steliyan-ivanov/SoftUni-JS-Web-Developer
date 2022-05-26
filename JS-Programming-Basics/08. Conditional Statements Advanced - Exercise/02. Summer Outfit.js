function outfit(input) {
    let degree = Number(input[0]);
    let time = input[1];

    if (degree >= 10 && degree <= 18) {
        if (time === "Morning") {
            console.log(`It's ${degree} degrees, get your Sweatshirt and Sneakers.`);
        } else {
            console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
        }
    } else if (degree >= 18 && degree <= 24) {
        if (time === "Morning" || time === "Evening") {
            console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
        } else {
            console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
        }
    } else if (degree >= 25) {
        if (time === "Morning") {
            console.log(`It's ${degree} degrees, get your T-Shirt and Sandals.`);
        } else if (time === "Afternoon") {
            console.log(`It's ${degree} degrees, get your Swim Suit and Barefoot.`);
        } else {
            console.log(`It's ${degree} degrees, get your Shirt and Moccasins.`);
        }
    }

}

outfit(["28",
    "Evening"
])