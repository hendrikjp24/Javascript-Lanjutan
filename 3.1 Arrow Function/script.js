// dibawah adalah penulisan function expression


let tampilNama = function(nama){
    return `Halo ${nama}`;
}

console.log(tampilNama('Hendrik'));


// dibawah adalah penulisan function arrow dari penulisan function expression diatas


let tampilNama2 = (nama)=>{ return `Halo ${nama}` };

console.log(tampilNama2('Pertiwi'));

// Jika arguments yang dimasukkan 1, tidak perlu digunakan tanda () dan juga return dan tanda {} tidak perlu dituliskan jika hanya 1 baris saja yang dieksekusi didalam functionnya

// itu disebut dengan implisit function. cth :

let implisitFunction = nama =>  `Halo ${nama} `;

console.log(implisitFunction("David"));


// cth penggunaan expression function dengan arrow function

let mahasiswa = ["Hendrik Ari Purna Irawan", "Pertiwi", "Khaira","Mia"];

// expression function
let jumlahHuruf = mahasiswa.map(function(nama){
    return nama.length;
});

console.log(jumlahHuruf);

// arrow function

let jumlahHuruf2 = mahasiswa.map(nama => nama.length); //bentuk arrow function dari yang diatas. karena argumentsnya cuma satu, maka tidak perlu untuk menuliskan tanda () dan juga tanda {} serta returnnya

console.log(jumlahHuruf2);



// untuk mengembalikan nilainya sebagai object, maka memakai cara dibawah ini:

let dataMahasiswa = mahasiswa.map(nama => ({"nama": nama, "jumlahHuruf": nama.length}));

console.table(dataMahasiswa);

console.log(dataMahasiswa[2]['nama']);