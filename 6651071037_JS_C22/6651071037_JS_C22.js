var soThuNhat = document.getElementById("soThuNhat");
var soThuHai = document.getElementById("soThuHai");
var ketQua = document.getElementById("ketqua");

function docHaiSo() {
	var a = Number(soThuNhat.value);
	var b = Number(soThuHai.value);

	if (soThuNhat.value === "" || soThuHai.value === "" || !Number.isInteger(a) || !Number.isInteger(b)) {
		ketQua.textContent = "Vui lòng nhập đầy đủ hai số nguyên.";
		return null;
	}

	return { a: a, b: b };
}

document.getElementById("multiply").addEventListener("click", function () {
	var haiSo = docHaiSo();
	if (haiSo !== null) {
		ketQua.textContent = "Kết quả phép nhân: " + haiSo.a * haiSo.b;
	}
});

document.getElementById("divide").addEventListener("click", function () {
	var haiSo = docHaiSo();
	if (haiSo === null) {
		return;
	}

	if (haiSo.b === 0) {
		ketQua.textContent = "Không thể chia cho 0.";
		return;
	}

	ketQua.textContent = "Kết quả phép chia: " + haiSo.a / haiSo.b;
});
