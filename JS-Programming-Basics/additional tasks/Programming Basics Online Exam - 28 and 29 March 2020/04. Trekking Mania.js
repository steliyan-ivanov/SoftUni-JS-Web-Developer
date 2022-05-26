function trekkingMania(input) {
    let climbersGrooups = Number(input[0]);
    let index = 1;
    let climbersTotal = 0;
    let climbers = 0;
    let climbersMusala = 0;
    let climbersMontblanc = 0;
    let climbersKilimanjaro = 0;
    let climbersK2 = 0;
    let climbersEverest = 0;

    for (let i = 1; i <= climbersGrooups; i++) {
        climbers = Number(input[index]);

        if (climbers <= 5) {
            climbersMusala += climbers;
        } else if (climbers >= 6 && climbers <= 12) {
            climbersMontblanc += climbers;
        } else if (climbers >= 13 && climbers <= 25) {
            climbersKilimanjaro += climbers;
        } else if (climbers >= 26 && climbers <= 40) {
            climbersK2 += climbers;
        } else if (climbers >= 41) {
            climbersEverest += climbers;
        }

        climbersTotal += climbers;
        index++;
    }

    let percentMusala = (climbersMusala / climbersTotal) * 100;
    let percentMontblanc = (climbersMontblanc / climbersTotal) * 100;
    let percentKilimanjaro = (climbersKilimanjaro / climbersTotal) * 100;
    let percentK2 = (climbersK2 / climbersTotal) * 100;
    let percentEverest = (climbersEverest / climbersTotal) * 100;

    console.log(percentMusala.toFixed(2) + "%");
    console.log(percentMontblanc.toFixed(2) + "%");
    console.log(percentKilimanjaro.toFixed(2) + "%");
    console.log(percentK2.toFixed(2) + "%");
    console.log(percentEverest.toFixed(2) + "%");

}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"
])