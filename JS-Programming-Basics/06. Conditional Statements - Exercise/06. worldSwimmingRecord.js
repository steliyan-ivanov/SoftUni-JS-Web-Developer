function swim(input) {
    let record = Number(input[0]); // Световният рекорд в секунди
    let distance = Number(input[1]); // Разстоянието, което трябва да преплува в метри
    let speed = Number(input[2]); // Времето, за което плува 1 м в секунди
    let delayDistance = Math.floor(distance / 15);
    let delayTime = delayDistance * 12.5;

    let totalTime = (distance * speed) + delayTime;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }


}

swim(["55555.67",
    "3017", "5.03"
])