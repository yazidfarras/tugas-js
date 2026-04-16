function ambilData() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const sukses = true;

            if (sukses) {
                resolve("data berhasil di simpan");   // kirim ke .then
            }
            else {
                reject("gagal");  // kirim ke .catch
            }

        }, 3000)
    })
}

ambilData()
.then((data) => {
  
    console.log('hasil: ${hasil}');

})

.catch((error) => {

    console.log('error: ${error}');
})

// real case promise
function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => res.json())
}