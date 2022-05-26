function movie(input) {

    let movies = Number(input[0]);
    let movieCount = 0;
    let index = 1;
    let highestRating = Number.MIN_VALUE;
    let highestName = ``;
    let lowestRating = Number.MAX_VALUE;
    let lowestName = ``;
    let averageRating = 0;

    for (let i = 0; i < movies; i++) {
        let movieName = input[index];
        index++;
        let movieRating = Number(input[index]);
        averageRating += movieRating;

        if (movieRating > highestRating) {
            highestRating = movieRating;
            highestName = movieName;
        } else if (movieRating < lowestRating) {
            lowestRating = movieRating;
            lowestName = movieName;
        }
        index++;
    }
    console.log(`${highestName} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(averageRating / movies).toFixed(1)}`);


}

movie(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"
])