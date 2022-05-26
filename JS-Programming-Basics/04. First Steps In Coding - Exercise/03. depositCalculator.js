function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depositMonths = Number(input[1]);
    let gLp = Number(input[2]);
    let mLp = (gLp / 12) / 100;
    let total = depositAmount + depositMonths * (depositAmount * mLp);

    console.log(total);


}

depositCalculator(["200 ",
    "3 ",
    "5.7 "
])