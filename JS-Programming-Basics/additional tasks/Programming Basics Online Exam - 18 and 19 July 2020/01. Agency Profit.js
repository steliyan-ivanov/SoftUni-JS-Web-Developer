function agencyProfit(input) {

    let companyName = input[0];
    let adultTickets = Number(input[1]);
    let kidTickets = Number(input[2]);
    let netAdultTicketPrice = Number(input[3]);
    let serviceCost = Number(input[4]);
    let netKidTicketPrice = (netAdultTicketPrice * 0.30);
    let adultTicketPrice = netAdultTicketPrice + serviceCost;
    let kidTicketPrice = netKidTicketPrice + serviceCost;

    let total = (adultTicketPrice * adultTickets) + (kidTicketPrice * kidTickets);

    let profit = total * 0.20;


    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);

}

agencyProfit(['WizzAir',
    '15',
    '5',
    '120',
    '40'
])