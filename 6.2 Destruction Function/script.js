// Destruction Function

// Return Destruction Value

// Array Destructuring
function kalkulasi(a,b){
    return [a + b, a * b, a / b, a - b];
}

const [jumlah, perkalian, pembagian, perkurangan] = kalkulasi(2,3);


console.log(`\nArray Destructuring
${jumlah}`);

console.log(perkalian);
console.log(pembagian);
console.log(perkurangan);


// NB : Dengan menggunakan Array Destructuring, isi yang direturn oleh function
// akan diisi sesuai urutan arraynya.

// Object Destructuring Object

function kalkulasi2(a,b){
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    };
}


const {kali, bagi, tambah, kurang} = kalkulasi2(2,3);

console.log(`\nObject Destrcuturing`);
console.log(tambah);
console.log(kali);
console.log(bagi);
console.log(kurang);



// Arguments Destruction

// cth

const mhs = {
    nama: 'Hendrik Ari Purna Irawan',
    umur: 24,
    email: 'Hendrikzerojp@gmail.com',
    nilai: {
        uas: 80,
        uts: 90,
        latihan: 75
    }
};

// dibawah adalah contoh  pemecahan / destruction argumens

function tampilData({nama, umur, nilai: {uas, uts, latihan}}){
    return `Nama saya ${nama}, umur saya ${umur} dan saya mendapatkan nilai :
    uas: ${uas}
    uts: ${uts}
    latihan: ${latihan}`;
}

console.log(tampilData(mhs));

