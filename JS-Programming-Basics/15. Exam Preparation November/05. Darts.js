function darts(input) {

    let player = input[0];
    let initialPoint = 301;
    let sucessful = 0;
    let unsucessful = 0;
    let index = 1;

    let field = input[index++];
    let score = Number(input[index++]);

    while (initialPoint > 0) {
        if (field === 'Retire') {
            break;
        }

        if (field === 'Triple') {
            score *= 3;
        } else if (field === 'Double') {
            score *= 2;
        }

        if (score <= initialPoint) {
            initialPoint -= score;
            sucessful++;
        } else {
            unsucessful++;
        }
        field = input[index++];
        score = Number(input[index++]);
    }

    if (field === "Retire") {
        console.log(`${player} retired after ${unsucessful} unsuccessful shots.`);
    } else {
        console.log(`${player} won the leg with ${sucessful} shots.`);
    }

}

darts([
    'Michael van Gerwen',
    'Triple',
    '20',
    'Triple',
    '19',
    'Double',
    '10',
    'Single',
    '3',
    'Single',
    '1',
    'Triple',
    '20',
    'Triple',
    '20',
    'Double',
    '20'
])