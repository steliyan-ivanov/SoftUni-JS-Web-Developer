function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let place = 0;
    let spent = 0;


    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            spent = (budget * 0.3).toFixed(2);
            place = "Camp";
        } else {
            spent = (budget * 0.7).toFixed(2);
            place = "Hotel";
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            spent = (budget * 0.4).toFixed(2);
            place = "Camp";
        } else {
            spent = (budget * 0.8).toFixed(2);
            place = "Hotel";
        }
    } else {
        destination = "Europe";
        spent = (budget * 0.9).toFixed(2);
        place = "Hotel"
    }


    console.log(`Somewhere in ${destination}`);
    console.log(`${place } - ${spent}`);

}

journey(["75", "winter"])