// Latihan penggunaan Template Literals untuk fragment Html

// cth 1 :


const MHS = {
    nama: "Hendrik",
    nrp: "2018202007",
};


let el1 = `<div class="mhs1">
    <h2>Nama: ${MHS.nama}</h2>
    <span class="nrp">Nrp: ${MHS.nrp}</span>

</div>`;

// 2. menambahkan fragment html yang menggunakan ternary operator

const album = {
    judul: "KITA SELAMANYA",
    penyanyi: "BONDAN PRAKOSO",
    feat: "SAYKOJI"
};



let el2 = `<div class="wrapper">
    <h2>Judul Lagu: ${album.judul}</h2>
    <h4>Penyanyi: ${album.penyanyi}</h4>
    <h4>${(album.feat) ? `Feat: ${album.feat}` : ``}</h4>

</div>`



// 3.  melakukan looping menggunakan map pada fragment HTML
const Mahasiswa =  [
    {
        nama: "Hendrik Ari Purna Irawan",
        nrp: 2018202007
    },

    {
        nama: "Fathiya Al-Khaira",
        nrp: 2018202009
    },

    {
        nama: "Pertiwi Harahap",
        nrp: 20182020011
    }
];

let el3 = `<div class="wrapper">
    ${Mahasiswa.map(dt => `<ul>
        <li>${dt.nama}</li>
        <li>${dt.nrp}</li>
    </ul>`).join("")}
</div>`;


// 4. Nested
// HTML Fragment Bersarang

const dataMhsBaru = {
    nama: "Hendrik Ari Purna Irawan",
    nrp: 2018202007,
    semester: 5,
    matakuliah: [
        "Rekayasa Web",
        "Analisis dan Perancangan Web",
        "Pemrograman Sistem Interaktif",
        "Perancangan Sistem Berorientasi Object"
    ]
};


function tampilData(dataMhs){
    return `
    <ol>
        ${dataMhs.map(data => `
            <li>${data}</li>
        `).join("")}
    </ol>
    `;
}


let el4 = `<div class="wrapper">
    <h2>Nama : ${dataMhsBaru.nama}</h2>
    <h2>Nrp : ${dataMhsBaru.nrp}</h2>
    <h4>Semester : ${dataMhsBaru.semester}</h4>
    <h3>MataKuliah : </h3>

    ${tampilData(dataMhsBaru.matakuliah)}

</div>`; //$tampil data dengan memanggil function yang sudah dibuat sebelumnya


document.body.innerHTML = el4;



