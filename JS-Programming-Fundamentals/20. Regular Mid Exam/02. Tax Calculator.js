function taxCalculator(str) {
    let string = String(str);
    let vehicles = string.split('>>');
    let vehicle = [];
    let tax = 0;
    let nationalRevenue = 0;
    for (let i = 0; i < vehicles.length; i++) {
        let vehicle = vehicles[i].split(' ');
        let vehicleType = vehicle[0];
        let years = Number(vehicle[1]);
        let km = Number(vehicle[2]);
        let kmTaxFamily = Math.floor(km / 3000);
        let kmTaxheavyDuty = Math.floor(km / 9000);
        let kmTaxSports = Math.floor(km / 2000);
        let initialFamily = 50;
        let initialHeavyDuty = 80;
        let initialSports = 100;
        switch (vehicleType) {
            case "family":
                tax = kmTaxFamily * 12 + (initialFamily - (5 * years));
                nationalRevenue += tax;
                break;
            case "heavyDuty":
                tax = kmTaxheavyDuty * 14 + (initialHeavyDuty - (8 * years));
                nationalRevenue += tax;
                break;
            case "sports":
                tax = kmTaxSports * 18 + (initialSports - (9 * years));
                nationalRevenue += tax;
                break;
            default:
                console.log("Invalid car type.");
                continue;
        }
        console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
    }
    console.log(`The National Revenue Agency will collect ${nationalRevenue.toFixed(2)} euros in taxes.`);
}


taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])