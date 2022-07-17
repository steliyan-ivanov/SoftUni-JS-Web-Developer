function sumAndLast(myArray) {

    // Не ползваме .shift() и .pop(), защото може да имаме само 1 елемент и не трябва да го премахваме от масива
    let firstElement = Number(myArray[0]);
    let lastElement = Number(myArray[myArray.length - 1]);

    let sum = firstElement + lastElement

    console.log(sum);

}

sumAndLast(['20', '30', '40'])