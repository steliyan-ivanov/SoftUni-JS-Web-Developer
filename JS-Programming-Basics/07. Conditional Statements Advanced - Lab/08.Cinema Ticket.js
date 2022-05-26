function cinema(input) {
    let day = input[0];
    let price = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Friday") {
        price = 12;
    } else if (day === "Wednesday" || day === "Thursday") {
        price = 14;
    } else {
        price = 16;
    }
    console.log(price);
}

cinema(["Monday"])