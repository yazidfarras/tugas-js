// function adalah blok kode yang bisa di panggil berulang kali untuk menjalan kan suatu tugas.
// function ini seperti "resep" atau "intruksi" yang bisa kita pakai berkali kali.
// knp pakai function?, menghindari kata berulang



// basic function 
function HelloWorld() {
    console.log("Helloo Dunia")
    console.log("Selamat Pagi")
    console.log("Saya Sedang Belajar function")
}
HelloWorld();

// Function parameter
function HelloWorld2(nama) {
    console.log("selamat pagi", nama)
}
HelloWorld2("yazid")
HelloWorld2("farras")
HelloWorld2("fadillah")

function Matematika(x, y){
    console.log(50*x + y);
}
Matematika(5,7)
Matematika(100,90)

// arrow function
const matematika2 = (x,y) => {
    console.log(x+y);
}
matematika2(2, 5)


// return function
// function yang menghasil kan sebuah nilai dan nilai tersebut bisa kita pakai di luar function
function tambah(a, b){
    return a+b
}
let hasil = tambah (3,8) 
console.log(hasil)

// hasil variabel 4
function sapa(nama){
    // const hasil = "selamat pagi " + nama ;
    const hasil = `selamat pagi ${nama}`;
    return hasil ;

}
let tangkap = sapa("yazid")
console.log(tangkap)

// arrow function
const sapa2 = (nama, umur, alamat) => {
    const hasil = `selamat pagi 2 ${nama}, umur prabroro ${umur}, tinggal di ${alamat}`;
    return hasil;
}

let tangkap2 = sapa2("prabroro", 20, "indonesia")
console.log(tangkap2);

