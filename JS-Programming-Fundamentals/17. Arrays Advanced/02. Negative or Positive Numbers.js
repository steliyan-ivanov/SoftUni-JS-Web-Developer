function solve(arr) {

    let result = [];

    for (let el of arr) {
        el = Number(el);

        if (el >= 0) {
            result.push(el)
        } else {
            result.unshift(el);
        }
    }

    console.log(result.join('\n'));
}

solve(['7', '-2', '8', '9'])