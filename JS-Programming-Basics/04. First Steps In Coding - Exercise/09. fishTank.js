function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let obem = (lenght * width * height) * 0.001;
    let littres = obem * (1 - (percent / 100));

    console.log(littres);

}

fishTank(["85 ",
    "75 ",
    "47 ",
    "17 "
])