function train(arr) {

    let passengersInTrainArr = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let commandNum = arr[i].split(' ');

        if (commandNum[0] == "Add") {
            passengersInTrainArr.push(Number(commandNum[1]));
        } else {
            for (let a = 0; a < passengersInTrainArr.length; a++) {
                if (passengersInTrainArr[a] + Number(commandNum[0]) <= maxCapacity) {
                    passengersInTrainArr[a] += Number(commandNum[0]);
                    break;
                }
            }
        }

    }

    console.log(passengersInTrainArr.join(' '));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])