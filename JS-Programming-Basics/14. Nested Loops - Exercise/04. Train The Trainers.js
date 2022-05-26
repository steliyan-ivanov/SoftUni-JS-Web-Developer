function trainTheTrainers(input) {
    let index = 0;
    let judges = Number(input[index]); // index 0
    index++;
    let command = input[index]; //index 1
    index++;

    let sumGrade = 0;
    let counter = 0;

    while (command !== "Finish") {
        let presentationName = command;
        let tempSumGrade = 0;
        counter++;
        for (let i = 0; i < judges; i++) {
            let tempGrade = Number(input[index]);
            index++;
            tempSumGrade += tempGrade;
        }
        let tempAvgGrade = tempSumGrade / judges;
        sumGrade += tempAvgGrade;
        console.log(`${presentationName} - ${tempAvgGrade.toFixed(2)}.`);
        command = input[index];
        index++;
    }

    let avgGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);

}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"
])