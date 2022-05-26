function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalTicket = 0;
    let studentTicket = 0;
    let kidTicket = 0;
    let standardTicket = 0;
    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let tempCommand = input[index];
        index++;
        let tempTicket = 0;
        while (tempCommand !== "End") {
            tempTicket++;
            switch (tempCommand) {
                case "student":
                    studentTicket++;
                    break;
                case "standard":
                    standardTicket++;
                    break;
                case "kid":
                    kidTicket++;
                    break;
            }
            if (tempTicket >= freeSpace) {
                break;
            }
            tempCommand = input[index];
            index++;
        }
        totalTicket += tempTicket;
        let fullSpace = tempTicket / freeSpace * 100;
        console.log(`${name} - ${fullSpace.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }

    console.log(`Total tickets: ${totalTicket}`);

    let studentP = studentTicket / totalTicket * 100;
    let standardP = standardTicket / totalTicket * 100;
    let kidP = kidTicket / totalTicket * 100;

    console.log(`${studentP.toFixed(2)}% student tickets.`);
    console.log(`${standardP.toFixed(2)}% standard tickets.`);
    console.log(`${kidP.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])