// Spread Operator
//  => digunakan untuk memecah iterables menjadi single element
// lambang spread operator sama seperti rest parameter. (...namaVariabel)

// beberapa kegunaan spread operator


// a. untuk mengcopy array

// cth 

const daftarNama = ['Khaira', 'Mia', 'Pertiwi'];


const copyNama = [...daftarNama]; //penulisan spread Operator

console.log(copyNama);

copyNama[1] = 'Hendrik'; //maka hanya akaan mengganti nilai dalam copyNama

console.log(copyNama);


// b. Menggabungkan 2 array atau lebih

// cth

const daftarNama1 = ['Hendrik', 'David', 'Aan'];
const daftarNama2 = ['Mia', 'Khaira', 'Pertiwi'];

const daftarMI2 = [...daftarNama1, ...daftarNama2];
console.log(daftarMI2);

// NB: dengan menggunakan spread operator, kita dapat meyisipkan nilai array baru ke dalamnya.
// cth :

const daftarMI2part2 = [...daftarNama1, "Ari", "Lauren", ...daftarNama2];

console.log(daftarMI2part2);

// c. cth penggunaan spread operator pada nodelist

const liNama = document.querySelectorAll("li");

const liAll = [...liNama].map(n => n.textContent);

const nama = document.querySelector(".nama");

const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join("");

nama.innerHTML = huruf;

