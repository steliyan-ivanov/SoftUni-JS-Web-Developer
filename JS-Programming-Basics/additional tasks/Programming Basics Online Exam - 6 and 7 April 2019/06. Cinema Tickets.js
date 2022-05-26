function cinema(input) {

    let index = 0;
    let command = input[index];
    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0

    while (command !== "Finish") {

        let movieName = command;
        index++;
        let freeSpace = Number(input[index]);
        index++;
        let command2 = input[index];
        let tickets = 0;

        while (command2 !== "End") {
            let ticketType = command2;
            if (ticketType === "standard") {
                standardTickets++;
            } else if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            } else if (ticketType === "Finish") {
                break;
            }
            tickets++;
            if (tickets === freeSpace) {
                break;
            }
            index++;
            command2 = input[index];
        }
        let full = tickets / freeSpace * 100;
        console.log(`${movieName} - ${full.toFixed(2)}% full.`);
        if (command2 === "Finish") {
            break;
        }
        index++;
        command = input[index];


    }
    let totalTickets = standardTickets + studentTickets + kidTickets;
    let studentPercent = studentTickets / totalTickets * 100;
    let standardPercent = standardTickets / totalTickets * 100;
    let kidPercent = kidTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);

}

cinema(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
])