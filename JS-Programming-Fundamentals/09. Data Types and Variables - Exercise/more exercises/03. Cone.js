function cone(r, h) {
    let volume = (1 / 3) * Math.PI * (r * r) * h;
    console.log(`volume = ${volume.toFixed(4)}`);

    let area = Math.PI * r * (r + Math.sqrt(r * r + h * h));
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5);