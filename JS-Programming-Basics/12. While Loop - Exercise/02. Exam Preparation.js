function examPreparation(input) {
    let index = 0;
    let countNegativeGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let counter = 0;
    let sumGrades = 0;
    let counterProblems = 0;
    let isNeedBreak = false;
    let lastProblem = "";

    while (command !== "Enough") {
        let taskName = command;
        lastProblem = taskName;
        let grade = Number(input[index]);
        index++;
        counterProblems++;
        sumGrades += grade;

        if (grade <= 4) {
            counter++;
        }
        if (counter === countNegativeGrade) {
            console.log(`You need a break, ${counter} poor grades.`);
            isNeedBreak = true;
            break;
        }
        command = input[index];
        index++;
    }

    if (!isNeedBreak) {
        let avg = sumGrades / counterProblems;
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${counterProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }


}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
])