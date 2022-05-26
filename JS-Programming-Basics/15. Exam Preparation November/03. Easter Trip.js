function easterTrip(input) {

    let destination = input[0];
    let dates = input[1];
    let nights = Number(input[2]);
    let priceRoom = 0;

    switch (destination) {
        case 'France':
            if (dates === '21-23') {
                priceRoom = 30;
            } else if (dates === '24-27') {
                priceRoom = 35;
            } else if (dates === '28-31') {
                priceRoom = 40;
            }
            break;
        case 'Italy':
            if (dates === '21-23') {
                priceRoom = 28;
            } else if (dates === '24-27') {
                priceRoom = 32;
            } else if (dates === '28-31') {
                priceRoom = 39;
            }
            break;
        case 'Germany':
            if (dates === '21-23') {
                priceRoom = 32;
            } else if (dates === '24-27') {
                priceRoom = 37;
            } else if (dates === '28-31') {
                priceRoom = 43;
            }
            break;
    }

    let totalCost = nights * priceRoom;

    console.log(`Easter trip to ${destination} : ${totalCost.toFixed(2)} leva.`);

}

easterTrip(['Germany', '24-27', '5'])