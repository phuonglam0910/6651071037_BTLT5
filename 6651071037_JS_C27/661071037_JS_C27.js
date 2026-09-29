var danhSach = document.getElementById("danhSach");
var thongBao = document.getElementById("thongBao");
var soLuong = document.getElementById("soLuong");

function capNhatDanhSach() {
	var cacDong = Array.from(danhSach.querySelectorAll("tr[data-row]"));
	var dinhDangTien = new Intl.NumberFormat("vi-VN");

	cacDong.forEach(function (dong) {
		var soLuongMatHang = Number(dong.dataset.quantity);
		var donGia = Number(dong.dataset.price);
		dong.querySelector(".line-total").textContent = dinhDangTien.format(soLuongMatHang * donGia) + "đ";
	});
	soLuong.textContent = cacDong.length + " dòng";

	if (cacDong.length === 0) {
		if (danhSach.querySelector(".empty-row") === null) {
			var dongTrong = document.createElement("tr");
			var oTrong = document.createElement("td");
			dongTrong.className = "empty-row";
			oTrong.colSpan = 4;
			oTrong.textContent = "Danh sách hiện chưa có dòng nào.";
			dongTrong.appendChild(oTrong);
			danhSach.appendChild(dongTrong);
		}
	} else {
		var dongTrongHienTai = danhSach.querySelector(".empty-row");
		if (dongTrongHienTai !== null) {
			dongTrongHienTai.remove();
		}
	}
}

capNhatDanhSach();

danhSach.addEventListener("click", function (event) {
	var nutXoa = event.target.closest('button[data-action="delete"]');
	if (nutXoa === null) {
		return;
	}

	var dong = nutXoa.closest("tr");
	var soLuongMatHang = dong.dataset.quantity;
	dong.remove();
	capNhatDanhSach();
	thongBao.textContent = "Đã xóa dòng có số lượng " + soLuongMatHang + ".";
});
