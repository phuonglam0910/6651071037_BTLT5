var a = 5;
var b = 6;
var c = 7;

var p = (a + b + c) / 2;

var S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

// Xuất ra Console
console.log("Diện tích tam giác là: " + S);

// Xuất hộp thoại
alert("Diện tích tam giác là: " + S);

// Xuất ra trang web
document.getElementById("ketqua").innerHTML =
    "Diện tích tam giác là: " + S;
