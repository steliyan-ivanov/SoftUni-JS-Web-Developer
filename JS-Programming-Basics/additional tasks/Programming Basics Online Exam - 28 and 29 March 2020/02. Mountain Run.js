function mountainRun(input) {

    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMetter = Number(input[2]);

    let timeOfGeorgi = distance * timeForOneMetter;

    let delayTime = (Math.floor(distance / 50)) * 30;

    let totalTime = timeOfGeorgi + delayTime;

    let diff = Math.abs(totalTime - worldRecord);

    if (totalTime < worldRecord) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }

}

mountainRun(["5554.36",
    "1340",
    "3.23"
])