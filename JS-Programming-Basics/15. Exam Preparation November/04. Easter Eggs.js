function easterEggs(input) {

    let eggs = Number(input[0]);
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;
    let colorOfMaxEggs = '';
    let maxEggs = -999999999;

    let index = 1;

    for (let i = 1; i <= eggs; i++) {
        let color = input[index];

        switch (color) {
            case 'red':
                redEggs++;
                if (redEggs > maxEggs) {
                    maxEggs = redEggs;
                    colorOfMaxEggs = 'red';
                }
                break;

            case 'green':
                greenEggs++;
                if (greenEggs > maxEggs) {
                    maxEggs = greenEggs;
                    colorOfMaxEggs = 'green';
                }
                break;

            case 'orange':
                orangeEggs++;
                if (orangeEggs > maxEggs) {
                    maxEggs = orangeEggs;
                    colorOfMaxEggs = 'orange';
                }
                break;

            case 'blue':
                blueEggs++;
                if (blueEggs > maxEggs) {
                    maxEggs = blueEggs;
                    colorOfMaxEggs = 'blue';
                }
                break;
        }
        index++;
    }

    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${maxEggs} -> ${colorOfMaxEggs}`);

}

easterEggs(['7', 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green'])