// Template literals hanya dapat digunakan ketika menggunakan tanda back tick (``)

// deklarasi

let Mahasiswa1 = `David Ramadhani`;
console.log(Mahasiswa1);

// multi line tasking
// dengan menggunakan tanda back tick, kita dapat melakukan multi line tasking :

let perkenalan = `Perkenalkan nama saya Hendrik Ari Purna Irawan
Saya merupakan anak pertama dari keluarga yang terdiri dari 4 orang`;

console.log(perkenalan);

// nb : dengan menggunakan tanda back tick, kita tidak perlu lagi menggunakan "\n" untuk menambahkan new line.
// cukup tekan saja enter, karena akan mengikuti dengan apa yang kita tuliskan.


// embedded expression :

let umurMahasiswa = 34;

console.log(`Nama : ${Mahasiswa1}, umur: ${umurMahasiswa}`);

// embedded expression juga dapat digunakan untuk menghitung aritmatika juga, cth:

// cth1
console.log(`Penjumlahan antara 15 dengan 20 adalah ${15 + 20}`);

// cth2
let x = 2;
let y =4;
console.log(`Hasil perkalian 2 dengan 4 adalah ${x * y}`);

// embedded expression juga dapat dimasukkan ternary operation
// cth :

let a = 11;

console.log(`${(a % 2 == 0) ? "Genap" : "Ganjil"}`);

// dengan menggunakan tanda back tick (``), kita dapat membuat html fragment lebih mudah.
// cth :

const dataMhs = {
    nama : "Khaira",
    nrp : "2018202009"
};

const el = `<div class="container">
    <h2>${dataMhs.nama}</h2>
</div>`;

console.log(el);


