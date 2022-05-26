function oscars(input) {
    let loan = Number(input[0]);
    let stattuettes = loan * 0.70;
    let catering = stattuettes * 0.85;
    let sound = catering * 0.5;

    let total = loan + stattuettes + catering + sound;

    console.log(total.toFixed(2));
}

oscars([3500])