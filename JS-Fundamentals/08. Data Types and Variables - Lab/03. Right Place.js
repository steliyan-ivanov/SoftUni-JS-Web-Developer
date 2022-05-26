// ПЪРВИ НАЧИН

function rightPlace(string1, char, string2) {

    let replacedString = string1.replace("_", char);


    if (replacedString === string2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}

rightPlace('Str_ng', 'I', 'Strong')


// ВТОРИ НАЧИН

function rightPlace(string1, char, string2) {

    let replacedString = string1.replace("_", char);


    let result = replacedString === string2 ? "Matched" : "Not Matched";

    console.log(result);

}

rightPlace('Str_ng', 'I', 'Strong')