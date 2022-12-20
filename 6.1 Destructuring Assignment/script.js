// Destructuring Assignment => Untuk memecah array ataupun Object dipecah dan dimasukkan ke dalam variabel yang telah ditentukan


// Destructuring Array

// cth 1
const Perkenalan = ['Halo', 'Nama', 'Saya', 'Hendrik Ari Purna Irawan'];

// dibawah adalah bentuk destructuring Array
const [salam, satu, dua, nama] = Perkenalan;

console.log(salam);
console.log(satu);
console.log(dua);
console.log(`${nama}\n\n`);

// Skipping Items => Kita dapat mengambil dan menempatkan nilai array yang kita mau ke dalam variabel yang baru.
// dengan kata lain kita dapat memilih nilai yang mana yang mau kita ambil.

// cth :

const [salam1, , , nama1] = Perkenalan;
console.log("===============Skipping Items===============")
console.log(salam1);
console.log(nama1);



// Swap Items => Seperti namanya, kita dapat melakukan swapping antar value tanpa harus membuat variabel penampung sementara

//  cth :
console.log("\n=========Swapping=========");
let a = 5;
let b = 2;

console.log(`Nilai a = ${a}`);
console.log(`Nilai b = ${b}`);

[a, b] = [b, a];

console.log(`Nilai a = ${a}`);
console.log(`Nilai b = ${b}`);


// Return value pada function

// cth :

function Number(){
    return [1,4];
}


const [angka1, angka2] = Number();

console.log("\n==========Return Value Pada Function==========")
console.log(angka1);
console.log(angka2);


// rest parameter => seperti yang sudah dipelajari sebelumnya, rest parameter adalah penampungan seluruh nilai args yang belum di definisikan

// cth:

console.log("\n==========REST PARAMETER==========");

const [number1, ...number] = [1,2,3,4,5,6,7];

console.log(number1);
console.log(number);



// Destructuring Object

// cth :

console.log(`\n=========DESTRUCTURING OBJECT=========`)

const mhs = {
    nma: 'Hendrik Ari  Purna Irawan',
    umr: 24
};

// dibawah adalah contoh Destructuring Object.
// NB : untuk nama variabel pada saat Destruction harus sama dengan nama variabel yang ada di dalam object
const {nma, umr} = mhs;

console.log(nma);
console.log(umr);


// assigment tanpa deklarasi
// cth

console.log(`\nAssigment Tanpa Deklarasi`);

({objectNama, objectUmur} = {
    objectNama: 'Pertiwi',
    objectUmur: 24
});


console.log(objectNama);
console.log(objectUmur);

// Assigment ke variabel baru. => digunakan jika kita mau mengubah nama variabel ke nama yang baru.
// dengan kata lain nama variabel yang akan kita pakai berbeda dengan nama variabel yang ada didalam object

// cth


const mhs1  = {
    objectNama1: 'Fathiya Alkhaira',
    objectUmur1: 27
};


const {objectNama1: nmaMhs, objectUmur1: umrMhs} = mhs1;

console.log(`\nAssignment ke dalam Variabel yang baru`);

console.log(nmaMhs);
console.log(umrMhs);



// Memberikan nilai default ke dalam variabel
// cth

const mhs2 = {
    nmaMhs2: 'Pertiwi',
    umrMhs2: 23,
};

// dibawah adalah contoh pemberian default value pada destructuring Object.
// dengan kata lain, jika didalam object yang di destructuring tidak ada variabel email, maka akan menjalankan
// default value yang diberikan. tetapi, jika ada, maka akan menjalankan email yang didalam object dan mengabaikan default value yang diberikan.
const {nmaMhs2: n, umrMhs2: u, email: e = 'Pertiwiharahap@gmail.com'} = mhs2;

console.log("\nMemberikan nilai default ke dalam Variabel");

console.log(n);
console.log(u);
console.log(e);



// Object rest Parameter

// cth

const Mahasiswa = {
    id: 12345,
    namaMhs: "Hendrik Ari Purna Irawan",
    umurMhs: 24
};

const {namaMhs: na, ...values} = Mahasiswa;

console.log("\nObject Rest Parameter");

console.log(na);
console.log(values);


// Mengambil field pada object, setelah object dikirim sebagai parameter dalam function

// cth

const Mahasiswa1 = {
    idMhs1: 123456,
    namaMhs1: "Khaira",
    umurMhs1: 27
};


// dibawah adalah contoh men-destruction object yang dikirimkan sebagai parameter.

function getId({idMhs1, namaMhs1}){
    return namaMhs1;
}


console.log(getId(Mahasiswa1));


