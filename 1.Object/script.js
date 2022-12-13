// Dalam pembuatan object ada 4 cara

// 1, Object Literal

let Mahasiswa1 = {
    "nama" : "Hendrik Ari Purna Irawan",
    "energi" : 10,
    "makan" : function(porsi){
        console.log(`Halo ${this.nama}, Selamat Makan!`);
        return this.energi += porsi;
    }
};


// 2. Function Declaration

function Mahasiswa2(nama,energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = function(porsi){
        console.log(`Halo ${mahasiswa.nama}, Selamat makan!`);
        return mahasiswa.energi += porsi;

    }
    
    return mahasiswa;
}

let pertiwi = Mahasiswa2("Pertiwi", 20);


// 3. Function Construct

function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        console.log(`Halo ${this.nama}, Selamat makan!`);
        return this.energi += porsi;
    }

    this.main = function(jam){
        console.log(`Halo ${this.nama}, Selamat Bermain!`);
        return this.energi -= jam;
    }
}

let khaira = new Mahasiswa("Khaira", 20);

// 4. Object.create