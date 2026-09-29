var cacSoLe = [];

for (var so = 1; so < 100; so += 2) {
    if (so !== 5 && so !== 7 && so !== 93) {
        cacSoLe.push(so);
    }
}

document.getElementById("ketqua").textContent = cacSoLe.join(", ");