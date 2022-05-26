function roomPainting(input) {
    // ПРОДУКТИ
    let paintBoxes = Number(input[0]);
    let wallpaperRolls = Number(input[1]);
    let gloves = Math.ceil(wallpaperRolls * 0.35);
    let brushes = Math.floor(paintBoxes * 0.48);

    // ЦЕНИ
    let paintBoxPrice = 21.50;
    let wallpaperRollPrice = 5.20;
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let totalCost = (paintBoxes * paintBoxPrice) + (wallpaperRolls * wallpaperRollPrice) + (gloves * glovesPrice) + (brushes * brushPrice);

    let delivery = totalCost / 15;

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);



}

roomPainting(['10', '8', '2.2', '5'])