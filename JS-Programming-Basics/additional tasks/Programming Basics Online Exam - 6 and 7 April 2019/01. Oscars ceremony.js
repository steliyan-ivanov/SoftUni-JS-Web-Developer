function oscars(input) {
    let loan = Number(input[0]);
    let statuettes = loan * 0.70;
    let cetaring = statuettes * 0.85;
    let sound = cetaring / 2;

    let total = loan + statuettes + cetaring + sound;
    console.log(total.toFixed(2));

}

oscars(["5555"])