function changeBureau(input) {

    let bitcoins = Number(input[0]);
    let CNY = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinsToBGN = bitcoins * 1168;
    let CNYtoUSD = CNY * 0.15;

    let CNYtoBGN = CNYtoUSD * 1.76;

    let totalInBGN = CNYtoBGN + bitcoinsToBGN;

    let totalInEUR = totalInBGN / 1.95;

    let total = totalInEUR - ((totalInEUR * commission) / 100);

    console.log(total.toFixed(2));

}

changeBureau(["1",
    "5",
    "5"
])