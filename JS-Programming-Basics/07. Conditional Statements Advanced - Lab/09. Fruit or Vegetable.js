function fruits(input) {
    let fruit = input[0];
    let type = 0;

    if (fruit === "banana" || fruit === "apple" || fruit === "kiwi" || fruit === "cherry" || fruit === "lemon" || fruit === "grapes") {
        type = "fruit";
    } else if (fruit === "tomato" || fruit === "cucumber" || fruit === "pepper" || fruit === "carrot") {
        type = "vegetable";
    } else {
        type = "unknown"
    }
    console.log(type);
}