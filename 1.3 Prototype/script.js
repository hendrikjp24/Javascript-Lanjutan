// contoh Object Prototype

function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;
}


Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan!`;
}

Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat Tidur!`;
}

Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat Bermain!`;
}


let hendrik = new Mahasiswa("Hendrik", 20);


// berikut merupakan versi classnya, dan biasanya untuk membuat object dipakai yang ini.
// untuk prototype merupakan contoh yang terjadi di belakang layar dari class

class MahasiswaBaru{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat Makan!`;
    }

    tidur(jam){
        this.energi += jam * 2;
        return `Halo ${this.nama}, Selamat Tidur!`;
    }

    main(jam){
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat Bermain!`;
    }
}


let mia = new MahasiswaBaru("Mia", 30);