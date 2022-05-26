function vowels(input) {
    let text = input[0];
    let result = 0;

    for (let i = 0; i < text.length; i++) {
        let ch = text[i];

        if (ch == "a") {
            result += 1;
        } else if (ch == "e") {
            result += 2;
        } else if (ch == "i") {
            result += 3;
        } else if (ch == "o") {
            result += 4;
        } else if (ch == "u") {
            result += 5;
        }
    }
    console.log(result);
}

vowels(["hello"])