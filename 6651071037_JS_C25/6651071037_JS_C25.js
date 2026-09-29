var formOrder = document.getElementById("formOrder");
var currency = new Intl.NumberFormat("vi-VN", {
	style: "currency",
	currency: "VND",
	maximumFractionDigits: 0
});
var daTinhTien = false;

function tinhTien() {
	var cacMonDaChon = Array.from(formOrder.querySelectorAll("input[data-name]:checked"));
	var thongBao = document.getElementById("thongBao");

	if (cacMonDaChon.length === 0) {
		document.getElementById("receipt").hidden = true;
		document.getElementById("emptyState").hidden = false;
		thongBao.textContent = "Vui lòng chọn ít nhất một món.";
		return;
	}

	var tamTinh = cacMonDaChon.reduce(function (tong, mon) {
		return tong + Number(mon.dataset.price);
	}, 0);
	var coPhuThuBanDem = document.getElementById("banDem").checked;
	var phuThu = coPhuThuBanDem ? Math.round(tamTinh * 0.1) : 0;
	var danhSachMon = document.getElementById("danhSachMon");
	danhSachMon.replaceChildren();

	cacMonDaChon.forEach(function (mon) {
		var dong = document.createElement("li");
		dong.className = "receipt-row";
		var tenMon = document.createElement("span");
		var giaMon = document.createElement("span");
		tenMon.textContent = mon.dataset.name;
		giaMon.textContent = currency.format(Number(mon.dataset.price));
		dong.append(tenMon, giaMon);
		danhSachMon.appendChild(dong);
	});

	document.getElementById("emptyState").hidden = true;
	document.getElementById("receipt").hidden = false;
	document.getElementById("tamTinh").textContent = currency.format(tamTinh);
	document.getElementById("phuThu").textContent = currency.format(phuThu);
	document.getElementById("dongPhuThu").hidden = !coPhuThuBanDem;
	document.getElementById("tongTien").textContent = currency.format(tamTinh + phuThu);
	thongBao.textContent = "";
	daTinhTien = true;
}

formOrder.addEventListener("submit", function (event) {
	event.preventDefault();
	tinhTien();
});

formOrder.addEventListener("change", function () {
	if (daTinhTien) {
		tinhTien();
	}
});
