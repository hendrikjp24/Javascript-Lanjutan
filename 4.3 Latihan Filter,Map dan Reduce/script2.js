// ambil semua list video didalam li

// setelah diambil semua, ubah bentuknya yang awalnya nodelist ke dalam array
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// filter yang mengandung JAVASCRIPT LANJUTAN

const videoJs = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))


// ambil duration setiap video
 .map(durasi => durasi.dataset.duration)


//  split agar menit dan detik terpisah setiap duration
// dan ubah 
 .map(waktu => {
    // split
    const parts = waktu.split(":").map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];  //mengubah durasi ke dalam detik untuk setiap list video yang sudah di filter
 })

//  menjumlahkan semua durasi ke dalam satuan detik
 .reduce((acc,curr) => acc + curr);

//  ubah ke dalam jam

const jam = Math.floor(videoJs/3600);

console.log(videoJs);

const menit = Math.floor((videoJs - (jam * 3600)) / 60);

const detik = videoJs - ((jam * 3600) + (menit * 60));

const jumlahVideo = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;


// menangkap tempat display

const displayJumlah = document.querySelector(".jumlah-video");
const displayDurasi = document.querySelector(".total-durasi");


displayJumlah.innerHTML = jumlahVideo + " Video";
displayDurasi.innerHTML = `${jam} Jam ${menit} Menit ${detik} Detik`;























