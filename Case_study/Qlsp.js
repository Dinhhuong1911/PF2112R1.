//danh sach nha san xuat&san pham
let danhSach = {
    "Nike": [
        "Dior X Nike Air Jordan 1 ", "Nike Air Jordan 6 Retro", "Nike Jordan 1 Low Camo Grey", "Nike Air Force 1",
    ],
    "Adidas": ["Yeezy 350 V2", "Adidas Nomad ", "Stan Smith", "EQT Bask ADV", "Prophere "

    ],
    "Charles & Keith": ["Koa Square Push-Lock Shoulder Bag", "Coda Top Handle Hobo Bag", "Pleated Double Handle Tote Bag", "Wren Acrylic Chain-Handle Trapeze Bag", "Wren Acrylic Chain Handle Bag"],
    "Zara": ["Blazer Oversize có túi", "Đầm Midi Hoạ Tiết", "Chân Váy Midi Dệt Kim", "Áo Sơ Mi Hoạ Tiết", "Áo Gi lê Dệt Kim Hoạ Tiết JACQUARD"

    ],
}
let sanPhamList = [];
let nhaSanXuat = document.getElementById("sanxuat");
for (key in danhSach) {
    nhaSanXuat.innerHTML += `<option value='${key}'>${key}</option>`;
}

//thay đổi dữ liệu ở nhà sản xuất-> dòng sản phẩm cũng thay đổi
function change() {
    key = nhaSanXuat.value;
    dongSanPhamList = danhSach[key];
    console.log(dongSanPhamList);

    let dongSanPham = document.getElementById("dongsanpham")
    dongSanPham.innerHTML = '';
    if (dongSanPhamList != null) {
        for (let i = 0; i < dongSanPhamList.length; i++) {
            dongSanPham.innerHTML += `<option value='${dongSanPhamList[i]}'>${dongSanPhamList[i]}</option>`
        }
    }
}
//bắt sự kiện onkeyup ở price và quantity
function upThanhTien() {
    let giatien = document.getElementById("dongia").value;
    let soLuong = document.getElementById("soluong").value;
    thanhTien = giatien * soLuong;
    document.getElementById("thanhtien").value = thanhTien;
}

//luu
let count = 0;

function luu() {
    let tenSanPham = document.getElementById("tensanpham").value
    let sanXuat = document.getElementById("sanxuat").value
    let dong = document.getElementById("dongsanpham").value
    let gia = document.getElementById("dongia").value
    let soluong = document.getElementById("soluong").value
    let tien = document.getElementById("thanhtien").value

    //moi lan add san pham
    let sanPham = {
        "tenSanPham": tenSanPham,
        "sanXuat": sanXuat,
        "dong": dong,
        "gia": gia,
        "soluong": soluong,
        "tien": tien
    }

    sanPhamList.push(sanPham)

    document.getElementById("result").innerHTML += `<tr>
        <td>${++count}</td>
        <td>${tenSanPham}</td>
        <td>${sanXuat}</td>
        <td>${dong}</td>
        <td>${gia}</td>
        <td>${soluong}</td>
        <td>${tien}</td>
        <td>
            <button  onclick="xoaSanPham(${count -1})">Delete
            </button>
        </td>
     </tr>`
}

//delete
function xoaSanPham(index) {
    alert("bạn muốn xoá sản phẩm này?")
    sanPhamList.splice(index, 1)
    showsSanpham();
}

function showsSanpham() {
    document.getElementById("result").innerHTML = "";
    for (let i = 0; i < sanPhamList.length; i++) {
        document.getElementById("result").innerHTML += `<tr>
        <td>${i+1}</td>
        <td>${sanPhamList[i].tenSanPham}</td>
        <td>${sanPhamList[i].sanXuat}</td>
        <td>${sanPhamList[i].dong}</td>
        <td>${sanPhamList[i].gia}</td>
        <td>${sanPhamList[i].soluong}</td>
        <td>${sanPhamList[i].tien}</td>
        <td>
            <button  onclick="xoaSanPham(${i})">Delete
            </button>
        </td>
     </tr>`
    }
}