function godzilla(input) {

    let timeForShooting = Number(input[0]);
    let sceneNumbers = Number(input[1]);
    let sceneDuration = Number(input[2]);
    let preparationDuration = Number(timeForShooting * 0.15);

    let totalTime = (sceneNumbers * sceneDuration) + preparationDuration;

    let timeLeft = Math.abs(timeForShooting - totalTime)

    if (timeForShooting >= totalTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeLeft)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${timeLeft} minutes.`);
    }
}

godzilla(['120',
    '10',
    '11'
])