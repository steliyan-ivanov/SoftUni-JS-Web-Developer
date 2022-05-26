function yardGreening(input) {
    let yards = Number(input[0]);
    let yardGreeningAmount = yards * 7.61;
    let discount = yardGreeningAmount * 0.18;
    let total = yardGreeningAmount - discount;
    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening([550])