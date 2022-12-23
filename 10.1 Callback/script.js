// Callback => memanggil function di dalam function.
// cth: 


// synchronous callback

// function halo(nama){
//     return `Halo, ${nama}`;
// }

// function tampilPesan(fnc){
//     const nama = prompt(`Masukkan Nama`);
//     return fnc(nama);  //ini yang dinamakan dengan callback function
// }

// console.log(tampilPesan(halo));

// cth 2 

const mhs = [
    {
        "nama": "Hendrik",
        'nim': 2018202007,
        'jurusan': 'MI2'
    },
    {
        "nama": "Khaira",
        'nim': 2018202009,
        'jurusan': 'MI2'
    },
    {
        "nama": "Mia",
        'nim': 2018202008,
        'jurusan': 'MI2'
    },
    {
        "nama": "Pertiwi",
        'nim': 20182020011,
        'jurusan': 'MI2'
    },
];


// dibawah masih merupakan ke dalam cth synchronous,
// => yaitu akan mengeksekusi perintah sesuai urutannya.
// jadi, jika ada perintah yang memerlukan waktu yang lama, maka akan ditunggu hingga selesai lalu akan menjalankan perintah berikutnya.

// console.log('Mulai');

// mhs.forEach((dm)=>{
//     let jmlh;
//     for(let i = 0 ; i < 10000000000 ; i++){
//         jmlh = jmlh + i;
//     }
//     console.log(dm.nama);
// });

// console.log('Selesai');




// Asynchronous callback

// Mengambil data dari json menggunakan vanila javascript

// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else{
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();

// }

// console.log('Mulai');
// getDataMahasiswa('./json/Mahasiswa.json', results => {
//     const datamhs = JSON.parse(results);
//     datamhs.forEach(e => console.log(e.nama));
    
// }, ()=>{});

// console.log('Selesai');

// Jdi, dengan asaynchronous, kita dapat melaksanakan perintah selanjutnya walaupun perintah sebelumnya belum selesai di kerjakan.
// karena perintah yang belum siap di kerjakan akan berpindah ke tempat task yang berbeda dan akan masuk ke dalam antrian untuk ditampilkan ke dalam task yang sama jika tidak ada lagi task yang dikerjakan oleh javascript.






// Mengambil data dari json dengan menggunakan Jquery
// cth

console.log('Mulai');

$.ajax({
    url: './json/Mahasiswa.json',
    success: (datamhs)=>{
        datamhs.forEach(e => console.log(e.nama));
    },
    error: (e)=>{
        console.log(e.responseText);
    }
});

console.log('Selesai');


