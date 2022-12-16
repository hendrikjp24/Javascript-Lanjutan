const videos = Array.from(document.querySelectorAll("[data-duration]"));

// filter video yang janya ada tulisan JAVASCRIPT LANJUT

const videoJs = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"));

// ambil duration dari setiap list yang sudah terfilter
const durationList = videoJs.map(durasi => durasi.dataset.duration);

// ubah durasi list yang sudah di ambil tadi menjadi float

const durasiBaru = durationList.map(coba => {
    return coba.split(":").map(part => parseFloat(part));

});

// jumlahkan durasi per list dan ubah menjadi detik

const durasiPerList = durasiBaru.map(durasi => {
    return (durasi[0] * 60) + durasi[1];
});

// jumlahkan seluruh durasi setiap list menjadi satu

const allDuration = durasiPerList.reduce((acc, curr)=> acc + curr);


// ubah yang menjadi jam, menit dan detik


const jam = Math.floor(allDuration /3600);

const menit = Math.floor((allDuration - (jam * 3600)) / 60);

const detik = allDuration - ((jam * 3600) + (menit * 60));

console.log(jam);
console.log(menit);
console.log(detik);

// tangkap seluruh display yang akan dipakai nantinya

const displayJmlahVideoJs = document.querySelector(".jumlah-video");
const displayTotalDurasi = document.querySelector(".total-durasi");

const jmlah = videoJs.length;

displayJmlahVideoJs.innerHTML = `${jmlah} Video`;
displayTotalDurasi.innerHTML = `${jam} Jam ${menit} Menit ${detik} Detik`;