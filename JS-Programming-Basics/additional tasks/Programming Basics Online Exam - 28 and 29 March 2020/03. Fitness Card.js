function fitnessCard(input) {

    let money = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let cardPrice = 0;

    switch (sport) {
        case "Gym":
            if (sex === "m") {
                cardPrice = 42;
            } else if (sex === "f") {
                cardPrice = 35;
            }
            break;
        case "Boxing":
            if (sex === "m") {
                cardPrice = 41;
            } else if (sex === "f") {
                cardPrice = 37;
            }
            break;
        case "Yoga":
            if (sex === "m") {
                cardPrice = 45;
            } else if (sex === "f") {
                cardPrice = 42;
            }
            break;
        case "Zumba":
            if (sex === "m") {
                cardPrice = 34;
            } else if (sex === "f") {
                cardPrice = 31;
            }
            break;
        case "Dances":
            if (sex === "m") {
                cardPrice = 51;
            } else if (sex === "f") {
                cardPrice = 53;
            }
            break;
        case "Pilates":
            if (sex === "m") {
                cardPrice = 39;
            } else if (sex === "f") {
                cardPrice = 37;
            }
            break;
    }

    if (age <= 19) {
        cardPrice *= 0.80;
    }

    let diff = Math.abs(money - cardPrice);

    if (money >= cardPrice) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
    }

}

fitnessCard(["10",
    "m",
    "50",
    "Pilates"
])