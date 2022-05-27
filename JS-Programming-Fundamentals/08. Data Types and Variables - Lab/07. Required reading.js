function requiredReading(pagesBook, pagesPerHour, daysToRead) {

    let hoursForBook = pagesBook / pagesPerHour;
    let totalDays = hoursForBook / daysToRead;

    console.log(totalDays);

}

requiredReading(212,
    20,
    2
)