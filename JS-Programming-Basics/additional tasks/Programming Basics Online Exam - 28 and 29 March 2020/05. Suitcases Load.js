function suitcases(input) {
    let planceCapacity = Number(input[0]);
    let index = 1;
    let command = input[index];
    let suitcaseCounter = 0;
    let suitcaseVolume = 0;
    while (command !== "End") {
        suitcaseVolume = Number(command);
        if (suitcaseCounter % 3 === 0) {
            suitcaseVolume += 1.1;
        }
        if (planceCapacity < suitcaseVolume) {
            console.log(`No more space!`);
            console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
            break;
        }
        planceCapacity -= suitcaseVolume;
        suitcaseCounter++;
        index++;
        command = input[index];
    }


    if (command === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
    }
}


suitcases(["550",
    "100",
    "252",
    "72",
    "End"
])