function petShop(input) {
    let dogPacks = Number(input[0]);
    let catPacks = Number(input[1]);
    let dogPacksAmount = dogPacks * 2.50;
    let catPacksAmount = catPacks * 4;
    let total = catPacksAmount + dogPacksAmount;
    console.log(`${total} lv.`);
}







/* Вход
От конзолата се четат 2 реда:
1.	Броят на опаковките храна за кучета – цяло число в интервала [0… 100]
2.	Броят на опаковките храна за котки –  цяло число в интервала [0… 100] */