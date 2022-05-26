function printAndSum(start, stop) {
    let total = 0;
    let printLine = '';


    for (i = start; i <= stop; i++) {
        total += i;
        printLine += `${i} `;

    }
    console.log(printLine);
    console.log(`Sum: ${total}`);

}

printAndSum(50, 60)