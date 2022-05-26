// НЕ Е РЕШЕНА

function sumPrimeNonPrime(input) {
    sumPrimeNum = 0;
    sumNonPrimeNum = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "stop") {
        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        if (num === 1) {
            sumNonPrimeNum += num;
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0);
            isPrime = false;
        }

        if (isPrime) {
            sumPrimeNum += num;
        } else {
            sumNonPrimeNum += num;
        }
        command = input[index];
        index++;
    }
    console.log(sumPrimeNum);
    console.log(sumNonPrimeNum);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"
])