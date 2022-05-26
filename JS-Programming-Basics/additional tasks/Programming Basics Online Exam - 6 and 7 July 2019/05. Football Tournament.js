function tournament(input) {
    let team = input[0];
    let games = Number(input[1]);
    let index = 2;
    let points = 0;
    let wins = 0;
    let draws = 0;
    let losts = 0;

    for (i = 0; i <= games; i++) {
        let result = input[index];
        switch (result) {
            case "W":
                wins++;
                points += 3;
                break;
            case "D":
                draws++;
                points += 1;
                break;
            case "L":
                losts++;
                break;
        }
        index++;
    }

    if (games === 0) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        console.log(`${team} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wins}`);
        console.log(`## D: ${draws}`);
        console.log(`## L: ${losts}`);
        console.log(`Win rate: ${(wins / games * 100).toFixed(2)}%`);
    }

}


tournament(["Barcelona",
    "7",
    "W",
    "D",
    "L",
    "L",
    "W",
    "W",
    "D"
])