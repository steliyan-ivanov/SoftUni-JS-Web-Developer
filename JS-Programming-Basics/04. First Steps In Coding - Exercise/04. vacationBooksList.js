function vacationBookList(input) {
    let pagesBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalHours = pagesBook / pagesPerHour;
    let hoursPerDay = totalHours / days;

    console.log(hoursPerDay);

}

vacationBookList(["212 ",
    "20 ",
    "2 "
])