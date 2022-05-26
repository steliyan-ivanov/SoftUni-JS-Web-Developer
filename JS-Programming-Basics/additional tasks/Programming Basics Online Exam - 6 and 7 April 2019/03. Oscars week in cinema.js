function oscars(input) {

    let movie = input[0];
    let hall = input[1];
    let tickets = Number(input[2]);
    let ticketPrice = 0;

    switch (movie) {
        case "A Star Is Born":
            switch (hall) {
                case "normal":
                    ticketPrice = 7.50;
                    break;
                case "luxury":
                    ticketPrice = 10.50;
                    break;
                case "ultra luxury":
                    ticketPrice = 13.50;
                    break;
            }
            break;

        case "Bohemian Rhapsody":
            switch (hall) {
                case "normal":
                    ticketPrice = 7.35;
                    break;
                case "luxury":
                    ticketPrice = 9.45;
                    break;
                case "ultra luxury":
                    ticketPrice = 12.75;
                    break;
            }
            break;

        case "Green Book":
            switch (hall) {
                case "normal":
                    ticketPrice = 8.15;
                    break;
                case "luxury":
                    ticketPrice = 10.25;
                    break;
                case "ultra luxury":
                    ticketPrice = 13.25;
                    break;
            }
            break;

        case "The Favourite":
            switch (hall) {
                case "normal":
                    ticketPrice = 8.75;
                    break;
                case "luxury":
                    ticketPrice = 11.55;
                    break;
                case "ultra luxury":
                    ticketPrice = 13.95;
                    break;
            }
            break;
    }

    let totalMoney = ticketPrice * tickets;

    console.log(`${movie} -> ${totalMoney.toFixed(2)} lv.`);

}

oscars(["Green Book",
    "normal",
    "63"
])