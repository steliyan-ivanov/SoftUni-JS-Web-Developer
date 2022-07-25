function solve(arr) {
    let lengthCriteria = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(lengthCriteria.join('\n'));
}
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George', 'AzakAzimov'])