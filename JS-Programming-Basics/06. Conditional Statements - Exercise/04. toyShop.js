function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dollys = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let allToys = puzzles + dollys + bears + minions + trucks;
    let moneyFromAllToys = (puzzles * 2.60) + (dollys * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);

    if (allToys >= 50) {
        moneyFromAllToys = moneyFromAllToys * 0.75;
    }

    let totalMoneyAfterRent = moneyFromAllToys * 0.90;

    if (totalMoneyAfterRent >= tripPrice) {
        console.log(`Yes! ${(totalMoneyAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - totalMoneyAfterRent).toFixed(2)} lv needed.`);
    }
}