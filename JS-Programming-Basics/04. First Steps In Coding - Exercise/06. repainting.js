function repainting(input) {
    let nailon = Number(input[0]);
    let boya = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    let nailonAmount = (nailon + 2) * 1.5;
    let boyaAmount = (boya + (boya * 0.1)) * 14.50;
    let razreditelAmount = razreditel * 5;

    let materialsAmount = (nailonAmount + boyaAmount + razreditelAmount) + 0.40;
    let maistoriAmountForHour = materialsAmount * 0.30;

    let total = materialsAmount + (maistoriAmountForHour * hours);

    console.log(total);

}

repainting(["10 ",
    "11 ",
    "4 ",
    "8 "
])