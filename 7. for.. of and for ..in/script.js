// for .. of and for .. in adalah salah satu bentuk perulangan yang ada dalam javascript.

// for .. of => adalah perulangan yang hanya dapat digunakan
// untuk iterable object.

// cth iterable object :
// String, Array, NodeList/Arguments, TypedArray, map, set


// cth for .. of pada array

const Perkenalan = ['Halo', 'Nama', 'Saya', 'Hendrik'];

console.log(`Perulangan menggunakan forEach`);
Perkenalan.forEach((knl1,i) => console.log(`Isi Index ke-${i} = ${knl1}`));

console.log(`\n\nPerulangan menggunakan for .. of`);
for(knl of Perkenalan){
    console.log(knl);
};

// untuk mendapatkan index saat menggunakan for .. of dapat dilakukan seperti dibawah ini:
console.log(`\nMengambil index dengan menggunakan for .. of`)
for(const [i,m] of Perkenalan.entries()){
    console.log(`Isi Index ke-${i} = ${m}`);
}

// NB : dengan menggunakan forEaach, kita dapat mengambil index array,
// sedangkan dengan menggunakan for .. of kiita tidak dapat mengambil index array secara langsung


// String

// cth :
const saya = "Fathiya AlKhaira";

for(s of saya){
    console.log(s);
}

// NodeList

const liNama = document.querySelectorAll(".nama");


console.log(`\nMengambil isi dari node list`);
for(linm of liNama){
    console.log(linm.textContent);
}


// Arguments
function Perjumlahan(){
    let jmlah = 0;

    for(args of arguments){
        jmlah += args;
    }

    return jmlah;
}

console.log(`\nContoh penggunaan for .. of dalam Arguments`);
console.log(Perjumlahan(1,2,3,4,5));


// for .. in => merupakan perulangan yang dipakai untuk object


// cth

const mhs = {
    nama: "Hendrik Ari Purna Irawan",
    umur: 24,
    email: 'hendrikzerojp@gmail.com'
};


console.log(`\n\nContoh for .. in`);


for(dmhs in mhs){
    console.log(dmhs); //Ini akan mengambil nama propertinya
    console.log(`${mhs[dmhs]}`); // Ini akan mengambil isi dari propertinya
}

