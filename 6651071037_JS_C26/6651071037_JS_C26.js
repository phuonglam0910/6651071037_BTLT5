var formNam = document.getElementById("formNam");
var oNam = document.getElementById("nam");
var thongBao = document.getElementById("thongBao");
var ketQua = document.getElementById("ketqua");
var cacCan = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
var cacChi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

formNam.addEventListener("submit", function (event) {
	event.preventDefault();
	var giaTriNam = oNam.value.trim();

	if (!/^\d+$/.test(giaTriNam)) {
		thongBao.textContent = "Vui lòng nhập năm bằng chữ số nguyên dương.";
		document.getElementById("canChi").value = "";
		return;
	}

	var nam = Number(giaTriNam);
	if (!Number.isSafeInteger(nam) || nam < 1 || nam > 9999) {
		thongBao.textContent = "Năm phải nằm trong khoảng từ 1 đến 9999.";
		document.getElementById("canChi").value = "";
		return;
	}

	var can = cacCan[nam % 10];
	var chi = cacChi[nam % 12];
	document.getElementById("canChi").value = can + " " + chi;
	thongBao.textContent = "";
});
