function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rate = input[2];
    let nights = days - 1;
    let total = 0;

    switch (roomType) {
        case "apartment":
            if (days < 10) {
                total = (nights * 25) * 0.70;
            } else if (days >= 10 && days <= 15) {
                total = (nights * 25) * 0.65;
            } else {
                total = (nights * 25) * 0.5;
            }
            break;
        case "president apartment":
            if (days < 10) {
                total = (nights * 35) * 0.90;
            } else if (days >= 10 && days <= 15) {
                total = (nights * 35) * 0.85;
            } else {
                total = (nights * 35) * 0.80;
            }
            break;
        default:
            total = nights * 18;
            break;
    }

    if (rate == "positive") {
        total = total * 1.25;
    } else {
        total = total * 0.9;
    }

    console.log((total).toFixed(2));
}

skiTrip(["12",
    "room for one person",
    "positive"
])