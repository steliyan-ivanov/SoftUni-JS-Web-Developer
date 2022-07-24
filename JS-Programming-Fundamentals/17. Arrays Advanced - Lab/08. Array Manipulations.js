function solve(commands) {

    let arr = commands.shift().split(' ').map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                arr.push(firstNum);
                break;
            case "Remove":
                arr.filter(el => el !== firstNum);
                console.log(arr);
                break;
            case "RemoveAt":

                break;
            case "Insert":

                break;
        }

    }
    console.log(arr);
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])