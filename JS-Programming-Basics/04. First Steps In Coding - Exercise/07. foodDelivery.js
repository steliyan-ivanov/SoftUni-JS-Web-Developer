function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegeMenus = Number(input[2]);

    let food = (chickenMenus * 10.35) + (fishMenus * 12.40) + (vegeMenus * 8.15);
    let desert = food * 0.2;

    let order = food + desert + 2.50;

    console.log(order);


}

foodDelivery(["2 ",
    "4 ",
    "3 "
])