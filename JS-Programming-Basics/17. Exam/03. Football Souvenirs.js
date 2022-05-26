function footballSouvenirs(input) {
    let team = input[0];
    let souvenirType = input[1];
    let souvenirs = Number(input[2]);

    let souvenirPrice = 0;

    let isValidCountry = true;
    isValidStock = true;

    switch (team) {
        case 'Argentina':
            if (souvenirType === 'flags') {
                souvenirPrice = 3.25;
            } else if (souvenirType === 'caps') {
                souvenirPrice = 7.20;
            } else if (souvenirType === 'posters') {
                souvenirPrice = 5.10;
            } else if (souvenirType === 'stickers') {
                souvenirPrice = 1.25;
            } else {
                isValidStock = false;
                console.log(`Invalid stock!`);
            }
            break;

        case 'Brazil':
            if (souvenirType === 'flags') {
                souvenirPrice = 4.20;
            } else if (souvenirType === 'caps') {
                souvenirPrice = 8.50;
            } else if (souvenirType === 'posters') {
                souvenirPrice = 5.35;
            } else if (souvenirType === 'stickers') {
                souvenirPrice = 1.20;
            } else {
                isValidStock = false;
                console.log(`Invalid stock!`);
            }
            break;

        case 'Croatia':
            if (souvenirType === 'flags') {
                souvenirPrice = 2.75;
            } else if (souvenirType === 'caps') {
                souvenirPrice = 6.90;
            } else if (souvenirType === 'posters') {
                souvenirPrice = 4.95;
            } else if (souvenirType === 'stickers') {
                souvenirPrice = 1.10;
            } else {
                isValidStock = false;
                console.log(`Invalid stock!`);
            }
            break;

        case 'Denmark':
            if (souvenirType === 'flags') {
                souvenirPrice = 3.10;
            } else if (souvenirType === 'caps') {
                souvenirPrice = 6.50;
            } else if (souvenirType === 'posters') {
                souvenirPrice = 4.80;
            } else if (souvenirType === 'stickers') {
                souvenirPrice = 0.90;
            } else {
                isValidStock = false;
                console.log(`Invalid stock!`);
            }
            break;
        default:
            isValidCountry = false;
            console.log(`Invalid country!`);
            break;
    }

    let totalCost = souvenirs * souvenirPrice;


    if (isValidCountry && isValidStock) {
        console.log(`Pepi bought ${souvenirs} ${souvenirType} of ${team} for ${totalCost.toFixed(2)} lv.`);
    }

}

footballSouvenirs(['Denmark', 'stenli', '18'])