function pool(input) {
    let people = Number(input[0]);
    let enterFee = Number(input[1]);
    let deckChairPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalEnterFee = enterFee * people;
    let totalUmbrellaCost = umbrellaPrice * (Math.ceil(people / 2));
    let totalDeckChairCost = deckChairPrice * (Math.ceil(people * 0.75));
    let total = totalDeckChairCost + totalEnterFee + totalUmbrellaCost;

    console.log(`${total.toFixed(2)} lv.`);
}

pool(["21",
    "5.50",
    "4.40",
    "6.20"
])