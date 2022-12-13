// berikut penggunaan object.create

const methodMahasiswa = {
    "makan": function(porsi){
        console.log(`Halo ${this.nama}, Selamat Makan!`);
        return this.energi += porsi;
    },

    "main": function(jam){
        console.log(`Halo ${this.nama}, Selamat Bermain!`);
        return this.energi -= jam;
    },

    "tidur": function(jam){
        console.log(`Halo ${this.nama}, Selamat Tidur`);
        this.energi += jam * 2;
    }
}

// dibawah adalah penggunakan object.create.
function Mahasiswa(nama,energi){
    let mahasiswa = Object.create(methodMahasiswa);

    //dengan menggunakan object.create itu sama saja artinya dengan kita melakukan load dari funtion yang di berikan di dalam kurungnya.

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;

}

let hendrik = Mahasiswa("Hendrik", 20);