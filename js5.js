// spread dan rest operator 


//======== 1. spread operator =========//

// contoh spread operator
const obj1 = {
    name:"yazid",
    age:18
};

// penggabungan object
const obj2 = {...obj1};

console.log(obj2);

const mentor = {
    name:"irwan",
    age:20
}

const mapel = {
    mapel:"IT",
    club:"programing"
}

const gabung = {...mentor, ...mapel}
console.log(gabung)

// array 

const buah = ["apel","jeruk","anggur"];
const buahbaru = [...buah]

console.log(buahbaru)

// penggabungan array
const team1 = ["farros","rafie","salim"]
const team2 = ["nahdan","rava","qeis"]
const timgabung = [...team1,...team2]

console.log(timgabung)
console.log(timgabung[5])

// ========= 2. rest operator =======//

const belajarRest = (siswa, ...nama) => {
    console.log (siswa)
    console.log(nama)
}
belajarRest("daftar siswa","farros","rafie","salim")