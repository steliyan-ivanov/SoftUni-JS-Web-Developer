function solve(number, type, day) {
    let price = 0;
    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
                    break;
            }
            break;
        default:
            break;
    }

    price = price.toFixed(2);

    let total = number * price;

    if (number >= 30 && type === 'Students') {
        total *= 0.85;
    } else if (number >= 100 && type === 'Business') {
        total = (number - 10) * price;
    } else if (number >= 10 && number <=20 && type === 'Regular') {
        total *= 0.95;
    }

    console.log(`Total price: ${total.toFixed(2)}`);

}

solve(40,
    "Regular",
    "Saturday"    
    )