function lunch(input) {
    let movie = input[0]; // Филм
    let movieTime = Number(input[1]); // Продължителност на филма
    let lunchBreak = Number(input[2]); // Обедната почивка

    let lunchTime = lunchBreak / 8; // Време нужно за обяд
    let restTime = lunchBreak / 4; // Време нужно за почивка

    let timeLeftForMovie = lunchBreak - (lunchTime + restTime);

    if (timeLeftForMovie >= movieTime) {
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(timeLeftForMovie - movieTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(movieTime - timeLeftForMovie)} more minutes.`);
    }


}

lunch(["Game of Thrones",
    "60",
    "96"
])