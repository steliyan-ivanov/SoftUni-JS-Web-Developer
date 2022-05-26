function renovation(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);
    let percent = Number(input[2]);
    let index = 3;
    let command = input[index];
    let walls = (h * w) * 4;
    let wallsForPaint = Math.ceil(walls - ((percent / 100) * walls));
    let wallsPainted = 0;

    while (command !== "Tired!") {
        let paint = Number(command);
        wallsPainted += paint;

        if (wallsPainted >= wallsForPaint) {
            break;
        }

        index++;
        command = input[index];
    }

    let paintLeft = wallsPainted - wallsForPaint;

    if (command === "Tired!") {
        console.log(`${wallsForPaint - wallsPainted} quadratic m left.`);
    } else if (wallsPainted > wallsForPaint) {
        console.log(`All walls are painted and you have ${paintLeft} l paint left!`);
    } else if (wallsPainted === wallsForPaint) {
        console.log(`All walls are painted! Great job, Pesho!`);
    }

}

renovation(["2",
    "3",
    "25",
    "6",
    "7",
    "8"
])