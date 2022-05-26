function basketballEquipment(input) {
    let tax = Number(input[0]);
    let kecove = tax - (tax * 0.4);
    let ekip = kecove - (kecove * 0.2);
    let ball = ekip / 4;
    let aksesoari = ball / 5;

    let total = tax + kecove + ekip + ball + aksesoari;



    console.log(total);
}

basketballEquipment([365])
    // Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    // Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    // Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    // Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка