function goldMine(input) {

    let index = 0;
    let locations = Number(input[index]);


    for (let i = 0; i < locations; i++) {
        index++;
        let avrExtraction = Number(input[index]);
        index++;
        let days = Number(input[index]);
        let sumExtraction = 0.0;
        index++;

        for (let j = 0; j < days; j++) {
            let extraction = Number(input[index])
            sumExtraction += extraction;
            index++
        }

        let average = Number(sumExtraction / days);

        if (average >= avrExtraction) {
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
        } else {
            let diff = Math.abs(average - avrExtraction);
            console.log(`You need ${diff.toFixed(2)} gold.`);

        }
        index--;
    }

}

goldMine(['2', // Локации
    '10', // Очакван среден добив на ден на първата локация 
    '3', // Дните, в които ще копаят на локацията
    '10', // Добив за ден 1
    '10', // Добив за ден 2
    '11', // Добив за ден 3
    '20', // Очакван среден добив на ден на втората локация
    '2', // Дните, в които ще копаят на локацията
    '20', // Добив за ден 1
    '10' // Добив за ден 2
])