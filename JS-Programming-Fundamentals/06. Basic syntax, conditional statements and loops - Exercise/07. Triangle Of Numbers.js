function triangle(num) {

    for (let row = 1; row <= num; row++) {
        let printLine = '';

        for (let col = 1; col <= row; col++) {
            printLine += `${row} `;
        }

        console.log(printLine);

    }

}

triangle(5)