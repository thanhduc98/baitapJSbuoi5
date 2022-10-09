function tong(){
    let diemChuan = Number(document.getElementById('diemchuan').value);
    let diemMon1 = Number(document.getElementById('diemMon1').value);
    let diemMon2 = Number(document.getElementById('diemMon2').value);
    let diemMon3 = Number(document.getElementById('diemMon3').value);
    let khuVuc = document.getElementById('khuvuc').value;
    let doiTuong = document.getElementById('doituong').value;
    let kqBai1 = document.getElementById('result1');
    let diemTong = 0;
    let tong3Mon = diemMon1 + diemMon2 + diemMon3;
//---------------------------------------------------------------->
    diemTong = tongDiem(diemMon1,diemMon2,diemMon3,khuVuc,doiTuong,tong3Mon);
    if(diemTong == 0){
        kqBai1.innerHTML = 'Thí sinh thi trượt !';
        kqBai1.style.color = 'red';
    }else if(diemTong >= diemChuan){
        kqBai1.innerHTML = 'Thí sinh thi Đậu';
    }else{
        kqBai1.innerHTML = 'Thí sinh thi trượt !';
        kqBai1.style.color = 'red';
    }
}
function tongDiem(diemMon1,diemMon2,diemMon3,khuvuc,doituong,tong){
    var result;
//-------------->
    if(diemMon1==0 || diemMon2==0 || diemMon3==0){
        result = 0;
    }else if(khuvuc == 'khuVucA'){
        result = tong + 2;
    }else if(khuvuc == 'khuVucB'){
        result = tong + 1;
    }else if(khuvuc == 'khuVucC'){
        result = tong + 0.5;
    }else{
        result = tong = 0;
    }

    if(result == 0){
        return 0;
    }else if(doituong == '1'){
        return result + 2.5;
    }else if(doituong == '2'){
        return result + 1.5;
    }else if(doituong == '3'){
        return result + 1;
    }else{
        return result = 0;
    }
}
// Bài 2: Tính tiền điện
function tinhTienDien(){
    let name = document.getElementById('name').value;
    let soKW = Number(document.getElementById('soKW').value);
    let resultBai2 = document.getElementById('result2');
    if(soKW < 0){
        resultBai2.innerHTML = 'Nhập số KW lớn hơn 0 !'
        resultBai2.style.color = 'red';
    }else if(name == ''){
        resultBai2.innerHTML = 'Nhập đầy đủ tên !'
        resultBai2.style.color = 'red';
    }else{
        resultBai2.innerHTML = 'Tiền điện ' + name + ' phải trả là: ' + tienDien(soKW).toLocaleString() + 'VND';
    }
}
function tienDien(kw){
    var gia50KWDau = 50*500;
    var giaKw50_100 = 50*650;
    var giaKw100_200 = 85000;
    var giaKw200_350 = 1100*150;
    if(kw <= 50){
        return kw * 500;
    }else if(kw <= 100){
        return gia50KWDau + (kw-50)*650;
    }else if(kw <=200){
        return gia50KWDau + giaKw50_100 + (kw-100)*850;
    }
    else if(kw <= 350){
        return gia50KWDau + giaKw50_100 + giaKw100_200 + (kw-200)*1100;
    }else{
        return  gia50KWDau + giaKw50_100 + giaKw100_200 + giaKw200_350 + (kw-350)*1300;
    }
}