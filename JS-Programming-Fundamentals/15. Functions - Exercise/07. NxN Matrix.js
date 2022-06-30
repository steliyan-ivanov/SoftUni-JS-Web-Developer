function main(times) {


    for (let i = 0; i < times; i++) {

        let row = [];
        for (let j = 0; j < times; j++) {
            row.push(times)
        }
        console.log(row.join(" "));
    }
}

main(7)