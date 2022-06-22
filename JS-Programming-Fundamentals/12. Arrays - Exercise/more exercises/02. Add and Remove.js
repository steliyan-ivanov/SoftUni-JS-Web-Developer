function addRemove(params) {

    let newArray = [];
    let counter = 0;

    for (let i = 0; i < params.length; i++) {
        if (params[i] === 'add') {
            counter += 1;
            newArray.push(counter)
        } else if (params[i] === 'remove') {
            counter += 1;
            newArray.pop();
        }
    }

    if (newArray.length == 0) {
        console.log("Empty");
    }

    console.log(newArray.join(" "));

}

addRemove(['remove', 'remove', 'remove'])