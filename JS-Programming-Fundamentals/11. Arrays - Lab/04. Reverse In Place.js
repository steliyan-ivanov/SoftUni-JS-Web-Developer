function reverseInPlace(strings) {

    let result = "";
    for (let i = strings.length - 1; i >= 0; i--) {
        result += `${strings[i]} `;
    }

    console.log(result);

}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])