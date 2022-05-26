function catWalking(input) {

    let walkMin = Number(input[0]);
    let walkNum = Number(input[1]);
    let callories = Number(input[2]);

    let totalCallories = (walkMin * 5) * walkNum;

    let enough = callories / 2;

    if (enough <= totalCallories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCallories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCallories}.`);
    }

}

catWalking(["15",
    "2",
    "500"
])