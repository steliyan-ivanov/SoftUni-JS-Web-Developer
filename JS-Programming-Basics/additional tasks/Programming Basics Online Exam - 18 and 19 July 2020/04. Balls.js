function balls(input) {

    let balls = Number(input[0]);
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherColor = 0;
    let blackBalls = 0;
    let points = 0;

    for (let i = 1; i <= balls; i++) {
        let color = input[i];

        if (color === "red") {
            redBalls++;
            points += 5;
        } else if (color === "orange") {
            orangeBalls++;
            points += 10;
        } else if (color === "yellow") {
            yellowBalls++;
            points += 15;
        } else if (color === "white") {
            whiteBalls++;
            points += 20;
        } else if (color === "black") {
            blackBalls++;
            points = Math.floor(points / 2);
        } else {
            otherColor++;
        }
    }


    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColor}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}

balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"
])