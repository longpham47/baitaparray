


var mangChinh = [];
//! thêm số
function themSo() {
    var num = Number(document.getElementById("nhapso").value);
    mangChinh.push(num)
    document.getElementById("txt").innerHTML = mangChinh;
}
document.getElementById("btn").onclick = themSo;

//! tổn số dương
function tongSoDuong() {
    var tong = 0;
    for (var i = 0; i < mangChinh.length; i++) {
        if (mangChinh[i] > 0) {
            tong += mangChinh[i];
        }

    }
    document.getElementById("txt1").innerHTML = "Tổng số dương : " + tong;
}
document.getElementById("btn1").onclick = tongSoDuong;

//! đém số dương
function demSoDuong() {
    var dem = "";
    for (var i = 0; i < mangChinh.length; i++) {
        if (mangChinh[i] > 0) {
            dem++
        }
    }
    document.getElementById("txt2").innerHTML = "Số dương: có " + dem + " số";

}
document.getElementById("btn2").onclick = demSoDuong;

//! số nhỏ nhất
function soNhoNhat() {
    var min = mangChinh[0];

    for (var i = 1; i < mangChinh.length; i++) {
        if (min > mangChinh[i]) {
            min = mangChinh[i]
        }
    }
    document.getElementById("txt3").innerHTML = "số nhỏ nhât : " + min;
}
document.getElementById("btn3").onclick = soNhoNhat;

//! số duong nhỏ nhất
function soDuongMin() {
    var mangDuong = [];

    for (var i = 0; i < mangChinh.length; i++) {
        if (mangChinh[i] > 0) {
            mangDuong.push(mangChinh[i]);
        } else if (mangDuong[i] < 0) {
            alert("không có số duong")
        }
    }

   
    var MinDuong = mangDuong[0];
    for (var i = 1; i < mangDuong.length; i++) {
        if (MinDuong > mangDuong[i]) {
            MinDuong = mangDuong[i]
        }
    }
    document.getElementById("txt4").innerHTML = MinDuong;
}
document.getElementById("btn4").onclick = soDuongMin;

//! số chẵn cuối cùng
function soChanCuoi() {
    var last = "không có số chẵn , hãy nhập thêm số chẵn";


    for (var i = 0; i < mangChinh.length; i++) {
        if (mangChinh[i] % 2 == 0) {
            last = mangChinh[i]

        }
    }

    document.getElementById("txt5").innerHTML = "số chẵn cuối cùng là : " + last
}
document.getElementById("btn5").onclick = soChanCuoi;

//! đổi chổ




function doiCho() {
  
    var vitri1 = Number(document.getElementById("nhapvitri1").value);
    var vitri2 = Number(document.getElementById("nhapvitri2").value);

    var bientam = [];

    for (var i = 0; i < mangChinh.length; i++) {

        bientam = mangChinh[vitri1]
        mangChinh[vitri1] = mangChinh[vitri2]
        mangChinh[vitri2] = bientam

    }
    document.getElementById("txt6").innerHTML = "Mảng sau khi đổi: " + mangChinh;

}
document.getElementById("btn6").onclick = doiCho;


//! sắp xếp tăng dần

function sapXep() {
    var sx = []
    for (i = 0; i < mangChinh.length; i++) {
        for (j = 0; j < mangChinh.length; j++) {
            if(mangChinh[j]>mangChinh[j+1]){
                var tam = mangChinh[j];
                mangChinh[j]=mangChinh[j+1];
                mangChinh[j+1] = tam;
            }
        
        }
    }
document.getElementById("txt7").innerHTML = mangChinh
}
document.getElementById("btn7").onclick = sapXep;


//! tìm số nguyên đâu tiên
