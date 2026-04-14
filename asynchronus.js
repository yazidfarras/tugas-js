//SYNCRONUS
//eksekusi code dari atas ke bawah, 
// jika ada code yang belum selesai 
// dia nggak akan eksekusi code yang ada di bawah

console.log("1");
console.log("2");
console.log("3");

//ASYNCRONUS
//kita bisa skip code yang kita butuhin nanti,
//jadi dia bisa jalan tanpa nunggu code lainnya selesai

console.log("1");
setTimeout(()=>{
    console.log("2")
},10000);
console.log("3");
console.log("Tunggu 10 detik");