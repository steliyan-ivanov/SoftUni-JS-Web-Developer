function solve(commands) {

    let arr = commands.shift().split(' ').map(Number);
    console.log(arr);

}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])