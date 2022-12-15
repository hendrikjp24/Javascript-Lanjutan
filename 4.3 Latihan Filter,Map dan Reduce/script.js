// ambil semua elemen li dan ubah dari kumpulan nodelist ke dalam array
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// const videoJavascriptLanjutan = filter()

let jslanjutan = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))

// ambil durasi dari semua elemen
.map(item => item.dataset.duration)

// ubah ke dalam int dan detik
.map(waktu => {
    // 15:10
    // split => berfungsi untuk men-split isi dari array menjadi 2 bagian berdasarkan arguments yang diberikan.
    // cth dari ["12:10"] akan menjadi ["12","10"]
    const parts = waktu.split(":").map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumlahkan seluruh detik
.reduce((total, detik) => total + detik);

// ubah ke dalam jam, menit dan detik

// Math.floor => adalah fungsi aritmatika untuk pembulatan ke bawah
// Math.ceil => pembulatan keatas
// Math.round => pembulatan yang paling mendekati
const jam = Math.floor(jslanjutan/3600);

jslanjutan = jslanjutan - (jam * 3600);


const menit = Math.floor(jslanjutan / 60);

const detik = jslanjutan - (menit * 60);
// simpan di dom
const displayJmlahVideo = document.querySelector(".jumlah-video");
const totalDurasi = document.querySelector(".total-durasi");

const jmlahVideo = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;

displayJmlahVideo.innerHTML = jmlahVideo + " Video";
totalDurasi.innerHTML = jam + " jam " + menit + " menit " + detik + " detik";