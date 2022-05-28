function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let counter = 0;
    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;

    for (let i = 1; i <= lostFights; i++) {
        counter += 1;

        if (counter % 2 == 0) {
            helmetBroken += 1;
        }
        if (counter % 3 == 0) {
            swordBroken += 1;
        }
        if (counter % 6 == 0) {
            shieldBroken += 1;
        }
        if (counter % 12 == 0) {
            armorBroken += 1;
        }
    }

    let repairPrice = (helmetBroken * helmetPrice) + (swordBroken * swordPrice) + (shieldBroken * shieldPrice) + (armorBroken * armorPrice);
    console.log(`Gladiator expenses: ${repairPrice.toFixed(2)} aureus`);


}

gladiator(23,
    12.50,
    21.50,
    40,
    200

)