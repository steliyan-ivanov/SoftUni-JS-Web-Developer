function vacantion(groupe, type, day) {

    let dayPrice = 0;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                dayPrice = 8.45;
            } else if (day === 'Saturday') {
                dayPrice = 9.80;
            } else if (day === 'Sunday') {
                dayPrice = 10.46;
            }
            break;

        case 'Business':
            if (day === 'Friday') {
                dayPrice = 10.90;
            } else if (day === 'Saturday') {
                dayPrice = 15.60;
            } else if (day === 'Sunday') {
                dayPrice = 16;
            }
            break;

        case 'Regular':
            if (day === 'Friday') {
                dayPrice = 15;
            } else if (day === 'Saturday') {
                dayPrice = 20;
            } else if (day === 'Sunday') {
                dayPrice = 22.50;
            }
            break;
    }

    let total = dayPrice * groupe;

    if (type === "Students" && groupe >= 30) {
        total *= 0.85;
    } else if (type === "Business" && groupe >= 100) {
        total = (groupe - 10) * dayPrice;
    } else if (type === "Regular" && groupe >= 10 && groupe <= 20) {
        total *= 0.95
    }

    console.log(`Total price: ${total.toFixed(2)}`);

}

vacantion(30,
    "Students",
    "Sunday"
)