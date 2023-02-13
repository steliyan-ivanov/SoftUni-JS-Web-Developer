function solve(age) {
    let human = '';
    if (age >= 0 && age <= 2) {
        human = 'baby';
    } else if (age >= 3 && age <= 13) {
        human = 'child';
    } else if (age >= 14 && age <= 19) {
        human = 'teenager';
    } else if (age >= 20 && age <= 65) {
        human = 'adult';
    } else if (age >= 66) {
        human = 'elder';
    } else {
        human = 'out of bounds'
    }
    console.log(human);

}

solve(-1)