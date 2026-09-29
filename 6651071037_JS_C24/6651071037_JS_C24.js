var formNgay = document.getElementById("formNgay");
var ketQua = document.getElementById("ketqua");
var cacThu = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

formNgay.addEventListener("submit", function (event) {
	event.preventDefault();

	var ngayNhap = Number(document.getElementById("ngay").value);
	var thangNhap = Number(document.getElementById("thang").value);
	var namNhap = Number(document.getElementById("nam").value);
	var ngayCanTim = new Date(0);
	ngayCanTim.setHours(12, 0, 0, 0);
	ngayCanTim.setFullYear(namNhap, thangNhap - 1, ngayNhap);

	if (
		!Number.isInteger(ngayNhap) ||
		!Number.isInteger(thangNhap) ||
		!Number.isInteger(namNhap) ||
		ngayNhap < 1 || ngayNhap > 31 ||
		thangNhap < 1 || thangNhap > 12 ||
		namNhap < 1 || namNhap > 9999 ||
		ngayCanTim.getDate() !== ngayNhap ||
		ngayCanTim.getMonth() !== thangNhap - 1 ||
		ngayCanTim.getFullYear() !== namNhap
	) {
		ketQua.textContent = "Ngày, tháng hoặc năm không hợp lệ.";
		return;
	}

	ketQua.textContent = "Ngày " + ngayNhap + "/" + thangNhap + "/" + namNhap + " là " + cacThu[ngayCanTim.getDay()] + ".";
});
