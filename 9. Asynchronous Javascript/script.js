// Javascript => is a single-threaded, non-blocking, asynchronous and concurrent language

// single vs multi threaded
//  => Lingkungan eksekusi 'task'

// blocking vs non-blocking
// => Teknik 'ngoding' (IO(input output))

// synchronous vs asynchronous
// => Teknik 'ngoding' (HTTP request related)

// consurrent vs parallel
// lingkungan eksekusi 'task'



// jadi, asynchronous itu menjalankan task sesuai urutan.
// dan jika ada task yang membutuhkan waktu yang lama, maka javascript akan menunggu sampai task tersebut selesai, lalu akan menjalankan task berikutnya.

// cth :


function kalikan(a,b){
    return a*b;
}

function hitungLuas(sisi){
    return kalikan(sisi,sisi);
}

function cetakLuasKotak(sisi){
    const luasSisi = hitungLuas(sisi);
    console.log(luasSisi);
}

cetakLuasKotak(5);

// untuk diatas dia urutan yang akan dijalankan adalah


// cetakLuasKotak
// hitungLuas
// kalikan

// kemudian tasknya akan dihilangkan sesuai dengan task mana yang telah diselesaikan.


// untuk mengakali jika ada task yang memerlukan waktu yang lama,
// kita dapat menggunakan setTimeOut untuk dapat melompati ke task berikutnya.
// sehingga codingan kita tidak mengalami blocking.

// cth

console.log('Satu');

setTimeout(function(){
   console.log('Dua');
}, 3000);// 5000 disamping merupakan durasi yang ditentukan untuk menentukan waktu tunggu yang diperlukan.
//jika waktu sudah hbis, maka function pada setTimeOut akan dijalankan.


console.log('Tiga');

// tampilan diatas akan menjadi :
// Satu
// Tiga
// Dua => ini akan dijalankan atau ditampilkan setelah melewati durasi yang ditentukan

