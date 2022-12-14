// closure adalah kombinasi dari beberapa fungsi yang dapat mengakses parent functionnya untuk mendapatkan nilai variabel yang diperlukan.
// dengan menggunakan closure, juga dapat me return functionnya

// cth1
function init(){
    let nama = "Hendrik";

    return function(){
        console.log(nama);
    }
}

let tampilNama = init();

tampilNama();

// cth2 
function ucapkanSalam(waktu){

    return function(nama){
        console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!\n\n`);
    }

}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');


selamatPagi('Mia');
selamatSiang("Pertiwi");
selamatMalam("Khaira");

// cth3

let add = (function(){
    let counter = 0;

    return function(){
       return counter++;
    }
})();   //=> adalah cara untuk menjalankan return function secara lngsung tanpa harus di tampung kedalam variabel yanng baru

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());