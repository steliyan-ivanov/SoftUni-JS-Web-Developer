function concatenate(input) {
    let firstName = input[0];
    let lastName = input[1];
    let name = `${firstName} ${lastName}`;
    let age = Number(input[2]);
    let city = input[3];
    console.log(`You are ${name}, a ${age}-years old person from ${city}.`);
}

concatenate(['Maria', 'Ivanova', 20, 'Sofia'])