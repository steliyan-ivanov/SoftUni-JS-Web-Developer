function lastKnumbers(n, k) {
    // 1 1 2 4 7 13
    let result = [1];
    for (let i = 1; i < n; i++) {
        let sequenceK = result.slice(-k);
        let sum = 0;
        for (let el of sequenceK) {
            sum += el;
        }
        result.push(sum);
    }
    console.log(result.join(" "));
}
lastKnumbers(6, 3)