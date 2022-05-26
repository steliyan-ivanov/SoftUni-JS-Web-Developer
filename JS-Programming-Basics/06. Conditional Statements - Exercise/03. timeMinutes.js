function hours(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    if (minutes + 15 >= 60) {
        hour++;
        if (hour === 24) {
            hour = 0;
        }

        minutes = (minutes + 15) % 60;
        if (minutes >= 10) {
            console.log(`${hour}:${minutes}`);
        } else if (minutes < 10) {
            console.log(`${hour}:0${minutes}`)
        }
    } else {
        minutes += 15;
        console.log(`${hour}:${minutes}`);
    }
}