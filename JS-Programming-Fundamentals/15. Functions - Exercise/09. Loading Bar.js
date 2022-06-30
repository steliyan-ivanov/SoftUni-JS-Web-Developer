function loadingBar(int) {
    let percentBar = [];
    for (let i = 0; i < int; i += 10) {
        percentBar.push("%");
    }
    let dots = '';
    for (let j = 100; j > int; j -= 10) {
        dots += '.';
    }
    let percentBarString = percentBar.join('');
    if (int != 100) {
        console.log(`${int}% [${percentBarString}${dots}]`);
        console.log("Still loading...");
    } else {
        console.log(`100% Complete!`);
    }
}
loadingBar(90)