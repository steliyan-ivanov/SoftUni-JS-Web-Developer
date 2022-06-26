function experienceGaining(array) {
    let neededExperience = Number(array[0]);
    let countOfBattles = Number(array[1]);
    let totalEarnedExperience = 0;
    let earnedExperienceFromCurrentBattle = 0;
    let battles = 0;

    for (let i = 1; i <= countOfBattles; i++) {

        for (let j = 2; j < array.length; j++) {

            if (i % 3 === 0) {
                earnedExperienceFromCurrentBattle = array[j] * 1.15;
            } else if (i % 5 === 0) {
                earnedExperienceFromCurrentBattle = array[j] * 0.9;
            } else if (i % 15 === 0) {
                earnedExperienceFromCurrentBattle = array[j] * 1.05;
            } else {
                earnedExperienceFromCurrentBattle = array[j];
            }
            totalEarnedExperience += earnedExperienceFromCurrentBattle;
            battles += 1;
            i++;

            if (totalEarnedExperience >= neededExperience) {
                console.log(`Player successfully collected his needed experience for ${battles} battles.`);
                return;
            }
        }
    }

    let diff = Math.abs(totalEarnedExperience - neededExperience);
    console.log(`Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`);

}
experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20
])