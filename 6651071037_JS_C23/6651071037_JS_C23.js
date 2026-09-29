var formTinhLuong = document.getElementById("formTinhLuong");
var luong = document.getElementById("luong");
var heSoLuong = document.getElementById("heSoLuong");
var luongThang = document.getElementById("luongThang");
var thongBao = document.getElementById("thongBao");

formTinhLuong.addEventListener("submit", function (event) {
	event.preventDefault();

	var mucLuong = Number(luong.value);
	var heSo = Number(heSoLuong.value);
	if (!Number.isFinite(mucLuong) || !Number.isFinite(heSo)) {
		thongBao.textContent = "Vui lòng nhập lương và hệ số lương hợp lệ.";
		luongThang.value = "";
		return;
	}

	luongThang.value = String(mucLuong * heSo);
	thongBao.textContent = "";
});
