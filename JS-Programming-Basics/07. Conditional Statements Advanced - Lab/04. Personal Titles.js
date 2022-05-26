function personal(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (sex === "m" && age >= 16) {
        console.log("Mr.");
    } else if (sex === "m" && age < 16) {
        console.log("Master");
    } else if (sex === "f" && age >= 16) {
        console.log("Ms.");
    } else if (sex === "f" && age < 16) {
        console.log("Miss");
    }
}