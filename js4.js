// data collection (object dan array)
// object

// variabel
// const name = "farras"
// object
const datafarras = {
    name: "farras",
    age: 18,
    address: "Jl,paus"
};

// cara mengakses data di object
console.log(datafarras.name)
console.log(datafarras.age)
console.log(datafarras.address)

// cara mengakses data menggunakan object destructuring
const { name, age, address } = datafarras;
console.log(name);
console.log(age);
console.log(address);


// array
const fruits = ["apel", "jeruk", "nanas"]
const speklaptop = ["lenovo", 9, 256]

// index array selalu di mulai dari 0
// cara mengakses data di array

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

console.log(speklaptop[0], speklaptop[1], speklaptop[2])

// lanjutan
// array of object 
const datasiswa = [{
    name: "yazid",
    age: 18,
    username: "zidd?",
}, {
    name: "nahdan",
    age: 17,
    username: "nahhhhh",
}, {
    name: "natan",
    age: 18,
    username: "convenant",
}]

console.log(datasiswa[0])
console.log(datasiswa[1])
console.log(datasiswa[2])





// array of array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(matrix[2][1])
console.log(matrix[0][1])