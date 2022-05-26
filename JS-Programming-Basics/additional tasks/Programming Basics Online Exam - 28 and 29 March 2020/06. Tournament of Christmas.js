function tournament(input) {

    let daysOfTournament = Number(input[0]);
    let index = 1;
    let command = input[index];
    let wins = 0;
    let losts = 0;
    let daysWins = 0;
    let dayLosts = 0;
    let moneyTotal = 0;
    let currentMoney = 0;

    for (let i = 1; i <= daysOfTournament; i++) {
        while (command !== "Finish") {
            index++;
            let result = input[index];

            if (result === "win") {
                wins++;
                currentMoney += 20;
            } else {
                losts++;
            }

            index++;
            command = input[index];
        }

        if (wins > losts) {
            daysWins++;
            currentMoney *= 1.10;
            moneyTotal += currentMoney;
            currentMoney = 0;
            index++;
            command = input[index];
            wins = 0;
            losts = 0;
        } else {
            dayLosts++;
            moneyTotal += currentMoney;
            currentMoney = 0;
            index++;
            command = input[index];
            wins = 0;
            losts = 0;
        }
    }

    if (daysWins > dayLosts) {
        moneyTotal *= 1.20;
        console.log(`You won the tournament! Total raised money: ${moneyTotal.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyTotal.toFixed(2)}`);
    }
}

tournament(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])