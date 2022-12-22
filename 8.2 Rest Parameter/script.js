// Rest Parameter


function Penjumlahan(...angka){

    // memakai for of
    
    let jmlah = 0;
    for(const n of angka){
        jmlah += n;        
    }

    return jmlah;

    // memakai properti reduce pada array
    // return angka.reduce((a,c) => a + c);

}

console.log(Penjumlahan(1,2,3,4,5));


// Pemakaian Rest parameter untuk array destructuring
// cth

const kelompok1 = ["Hendrik", "Ari", "Mia", "Khaira"];

const [ketua, wakil, ...anggota] = kelompok1;

console.log(ketua);
console.log(wakil);
console.log(anggota);


// pemakaian rest parameter dalam object destructuring
// cth

console.log(`\n\n`);
const team = {
    pm: 'Hendrik',
    frontend1: 'Khaira',
    frontend2: 'Mia',
    backend: 'Ari',
    ux: 'Aan',
    devOps: 'David'
};

const {pm, ...myTeams} = team;

console.log(pm);
console.log(myTeams);

// cth

function filterBy(args, ...values){
    return values.filter(v => typeof v === args); // typeof disamping untuk mengambil jenis tipe dari values
}

console.log(filterBy('boolean', 1,2,'Halo', true, 'Hendrik', false));

