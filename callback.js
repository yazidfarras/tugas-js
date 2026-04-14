// apa itu callbak
// callback adalah sebuah fungsi yang dikirim sebagai argumen ke fungsi lain dan
// dipanggil setelah operasi tertentu selesai. Callback sering digunakan dalam pemrograman
// asinkron untuk menangani hasil dari operasi yang memakan waktu, seperti permintaan jaringan atau pembacaan file


 function ambildata(callback,errorcallback){
    setTimeout(()=>{
        const sukses = true;

        if (sukses){
            callback("data berhasil ");
        }
         else {
            errorcallback("gagal");
        }

 },3000)
 }
 
 function sukses(data){
    console.log('data berhasil : ${data}');

 };

 function error(error){
    console.log('data gagal : ${error}');
 };

 ambildata(sukses,error);

//  contoh real case callback
function getuser(callback, errorcallback){
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((res)=> res.json())
  .then((data)=> callback(data))
  .catch((error)=> errorcallback(error))
}
function tampilkanuser(data){
    console.log('Nama user : ${data}');

}

function handleerror(){
    console.log('errorboss : ${error}');
}

getuser(tampilkanuser, handleerror);