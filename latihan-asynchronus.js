// ---- Latihan Asynchronus JavaScript ----

// async function getUser() {
//     try {
        
//         const data = await fetch("https://jsonplaceholder.typicode.com/users")

//         if(!data.ok){
//             throw new Error("Gagal mengambil data");
//         }
//         const hasil = await data.json();
//         hasil.forEach(hasil2 => {
//             console.log(hasil2);
//         });} 
        
//         catch (error) {
//         console.log(error); 
//     }


// }
// getUser();


// --- Soal 2 ----

async function getUserById(id) {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        // if (!data.ok) {
        //     throw new Error("Gagal mengambil data");
        // }
        const hasil = await data.json();
        console.log(hasil.name);
        console.log(hasil.username);
    } catch (error) {
        console.log(error.message);
    }
}
getUserById(5);