function suppliesForSchool(input) {
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let littres = Number(input[2]);
    let discount = Number(input[3]) / 100;
    let total = (penPacks * 5.80) + (markerPacks * 7.20) + (littres * 1.2);
    let totalWithDiscount = total - (total * discount);
    console.log(totalWithDiscount);
}

suppliesForSchool(["2 ",
    "3 ",
    "4 ",
    "25 "
])