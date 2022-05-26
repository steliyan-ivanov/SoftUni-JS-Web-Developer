function solve(arg1, arg2, arg3) {
    let fruit = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    let totalPrice = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            totalPrice = quantity * 2.50;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "apple") {
            totalPrice = quantity * 1.20;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "orange") {
            totalPrice = quantity * 0.85;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapefruit") {
            totalPrice = quantity * 1.45;
        } else if (fruit === "kiwi") {
            totalPrice = quantity * 2.70;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "pineapple") {
            totalPrice = quantity * 5.50;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapes") {
            totalPrice = quantity * 3.85;
            console.log(totalPrice.toFixed(2));
        } else {
            console.log("error")
        }
    } else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            totalPrice = quantity * 2.70;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "apple") {
            totalPrice = quantity * 1.25;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "orange") {
            totalPrice = quantity * 0.90;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapefruit") {
            totalPrice = quantity * 1.60;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "kiwi") {
            totalPrice = quantity * 3.00;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "pineapple") {
            totalPrice = quantity * 5.60;
            console.log(totalPrice.toFixed(2));
        } else if (fruit === "grapes") {
            totalPrice = quantity * 4.20;
            console.log(totalPrice.toFixed(2));
        }
    } else {
        console.log("error")
    }
}