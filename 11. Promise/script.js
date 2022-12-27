// Promise => seperti namanya adalah janji.
// jadi promise adalah object yang mempresentasikan keberhasilan atau kegagalan
// sebuah event asynchronous di masa yang akan datang


// janji(terpenuhi / ingkar janji)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / cath)


// cth 1 

//let janji = false;

//const janji1 = new Promise((resolve, reject) => {
//     if (janji) {
//         resolve('Ditepati');
//     }else{
//         reject('Ingkar Janji');
//     }
// });

//console.log(janji1); //ini akan menampilkan dalam bentuk promise. jika ingin mengambil isinya, maka lakukan :

// janji1
//  .then(result => console.log(result)) //.then akan dijalankan jika promiseStatenya itu 'Fulfilled'
//  .catch(result => console.log(result)); //sedangkan catch akan dijalankan jika promiseStatenya 'Rejected'




//  cth 2
// setTimeout(()=>{
//     console.log(`\nCth Ke- 2`);
// },200);

// let jnji = false;

// const janji2 = new Promise((resolve, reject) => {
//     if(jnji){
//         setTimeout(()=>{
//             resolve(`Janji Terpenuhi setelah beberapa waktu`);
//         }, 2000);
//     }else{
//         setTimeout(() => {
//             reject(`Ingkar janji setelah beberapa waktu`);
//         }, 2000);
//     }
// });


// console.log('Mulai');
// console.log(janji2); //akan menghasilkan promise dengan keterangan pending. ini dikarenakan kita menggunakan waktu yang kita tentukan.

// janji2
// .finally(()=> console.log('Waktu Pending Telah Selesai')) // seperti namanya, untuk menjalankan aksi yang kita mau setelah waktu tunggu pendingnya selesai. biasanya untuk menghentikan animasi seperti animasi loading ketika mengambil data di html
// .then(result => console.log(result))
// .catch(result => console.log(result));

// console.log("Selesai");


// cth3
// promise.all() => seperti namanya untuk menjalankan semua promise menjadi satu

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Hendrik Ari Purna Irawan',
            actress: 'Tiwi'
        }]);
    }, 1000);
});


const cuaca = new Promise(resolve => {
    setTimeout(()=>{
        resolve([{
            kota: 'Bandung',
            suhu: 34,
            keterangan: 'Berawan'
        }]);
    }, 500);
})


film.then(result => console.log(result)); // ini cara memproses promise satu per satu
cuaca.then(result => console.log(result));


// dibawah cara menggunakan promise.all()
Promise.all([film, cuaca])
 .then(result => console.log(result));  //ini akna menggabungkkan isi dari 2 promise menjadi 1 promise


//  atau dapat juga kita pecah menggunakan object destructuring

Promise.all([film, cuaca])
 .then(result => {
    const [film, cuaca] = result;

    console.log(`Hasil Perpecahan array menggunakan array destruction`);
    console.log(film);
    console.log(cuaca);
 });
