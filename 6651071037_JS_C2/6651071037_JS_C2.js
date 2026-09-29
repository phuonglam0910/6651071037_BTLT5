var nam = Number(prompt("Nhập năm cần kiểm tra:"));
var ketQua = document.getElementById("ketqua");

if (!Number.isInteger(nam) || nam <= 0) {
	ketQua.textContent = "Vui lòng nhập một năm hợp lệ.";
} else if (nam % 400 === 0 || (nam % 4 === 0 && nam % 100 !== 0)) {
	ketQua.textContent = nam + " là năm nhuận.";
} else {
	ketQua.textContent = nam + " không phải là năm nhuận.";
}
