function repeatString(string, n) {
    let newString = "";
    for (let i = 1; i <= n; i++) {
        newString += string;
    }
    console.log(newString);
}
repeatString("String", 2)