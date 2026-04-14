// ----- SOAL 1 ----

function cekumur(umur){
    try {
        if (yazid(umur)){
            throw new Error("umur harus angka")
        }

        if (umur < 0){
            throw new Error("umur tidak valid")
        }

        confirm.log("umur",umur)
    }

    catch (error){
        console.log(error.massage)
    }

    finally{
        console.log ("selesai")
    }
    
}

cekumur(-5);


// ----- SOAL 2 -----

function parseData(data) {
    try{
        let hasil = JSON.parse(data);
        console.log (hasil);
    }
    catch(error){
        console.log("JSON tidak valid");
    }
}
parseData('"nama": "irwan"}')


// ----- SOAL 3 -----

function transfer (saldorekening, jumlahtransfer) {
    try {
        if (saldorekening < jumlahtransfer){
            throw new Error ("saldo anda tidak mencukupi");
        }
        else {
            console.log ("transfer berhasil");
        }
    }
    catch (error) {
        console.log(error.massage);
    }
}
transfer (100000, 20000);

//  ----- SOAL 4 -----

const validasiUmur = (umur) => {
   try {
    if (umur < 18){
        throw new Error ("umur belum mencukupi")
    }
    console.log("akses di berikan")
   } catch (error){
    console.log(error.message)
   }
   
}

validasiUmur (19)

// soal 5

const cekUsia = (usia) => {
    try {
        if (usia < 18){
            throw new Error ('Umur belum cukup')
        }else {
            console.log("akses di berikan")
        }
    }catch (error) {
        console.log(error.message)
    }
}

cekUsia (12)


