function pcGame(input) {
    let games = Number(input[0]);
    let index = 1;
    let gameHearthstone = 0;
    let gameFornite = 0;
    let gameOverwatch = 0;
    let gameOthers = 0;

    for (let i = 0; i < games; i++) {
        let currentGame = input[index];

        switch (currentGame) {
            case "Hearthstone":
                gameHearthstone++;
                break;
            case "Fornite":
                gameFornite++;
                break;
            case "Overwatch":
                gameOverwatch++;
                break;
            default:
                gameOthers++;
                break;
        }
        index++;
    }

    let gameHearthstonePercent = (gameHearthstone / games) * 100;
    let gameFornitePercent = (gameFornite / games) * 100;
    let gameOverwatchPercent = (gameOverwatch / games) * 100;
    let gameOthersPercent = (gameOthers / games) * 100;

    console.log(`Hearthstone - ${gameHearthstonePercent.toFixed(2)}%`);
    console.log(`Fornite - ${gameFornitePercent.toFixed(2)}%`);
    console.log(`Overwatch - ${gameOverwatchPercent.toFixed(2)}%`);
    console.log(`Others - ${gameOthersPercent.toFixed(2)}%`);

}

pcGame(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"
])