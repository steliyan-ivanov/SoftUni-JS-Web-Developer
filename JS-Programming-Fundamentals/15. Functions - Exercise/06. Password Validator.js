function passwordValidator(password) {
    let isValid = true;
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    // Проверка дали има само букви и цифри
    function onlyLettersAndNumbers(password) {
        return /^[A-Za-z0-9]*$/.test(password);
    }
    if (onlyLettersAndNumbers(password) == false) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }
    // Проверка дали съществуват 2 цифри в паролата
    let digits = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i] == 0 || password[i] == 1 || password[i] == 2 || password[i] == 3 || password[i] == 4 || password[i] == 5 || password[i] == 6 || password[i] == 7 || password[i] == 8 || password[i] == 9) {
            digits++;
        }
        if (digits == 2) {
            break;
        }
    }
    if (digits != 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }
    if (isValid) {
        console.log("Password is valid");
    }
}
passwordValidator('MyPass123')