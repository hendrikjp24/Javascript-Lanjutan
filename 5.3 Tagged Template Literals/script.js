// Tagged Template Literals

const nama = "Hendrik Ari Purna Irawan";
const umur = 23;


// string => menyimpan seluruh string yang didalam tanda back tick dan dipecahkandengan pemisahnya ${}

// sedangkan ...values => bertindak sebagai rest args or value. jadi seluruh isi dari ${} akan ditampung dalam bentuk array
function coba(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');

}

// or diatas (||) dipakai sebagai pengganti ternary operator.
// jadi, jika values dengan index i tidak ada, maka akan menjadi '', tetapi jika ada maka isi dari values akan ditampilkan

// berhubung reduce yang sekarang digunakan untuk tipe data string, maka nilai awalnya kita set juga menjadi '', karena tidak perhitungan



const Tampil = coba`Halo, Nama saya ${nama}, Umur saya ${umur} Tahun`;


console.log(Tampil);





// cth 2 Tagged Template Literals


const namaMahasiswa = "Fathiya Al-Khaira";

const umurMahasiswa = 27;

const email = "Fathiyaalkhaira27@gmail.com";



function showResult(strings, ...values){
    // return strings.reduce((resultValue, str, i) => `${resultValue}${str} <span class="higlight">${values[i] || ''}</span>`,'');


    return strings.reduce((result, str, i) => {
        return `${result}${str} <span class="higlight">${values[i] || ''}</span>`;    
    },'');

}



const result =  showResult`Halo, Nama Saya ${namaMahasiswa}, Umur Saya ${umurMahasiswa} Tahun dan email saya ${email}`;



document.body.innerHTML = result;