const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const hasilfilter = [];
for(let i = 0; i < angka.length ; i++){
    if(angka[i] >= 3){
        hasilfilter.push(angka[i]);
    }
}

// filter
const tryAnotherOption = angka.filter(a => a >= 3 );

console.log("Hasil Filter");
console.table(tryAnotherOption);
console.table(hasilfilter);
console.log("\n\n");

// map
const hasilMap = angka.map(a => a * 2);

console.log("Hasil Map");
console.table(hasilMap);

// reduce => digunakan untuk menjumlahkan semua isi array
// format reduce => reduce((accumulator, currentValue) => accumulator + cuurentValue, nilaiAwal)

// untuk nilai awal defaultnya adalah 0 dan boleh tidak ditulis jika ingin memakai defaultnya.

const hasilReduce = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(`${hasilReduce} \n\n\n`);

// chaining => sesuai namanya adalah untuk merantai menjadi satu

const hasilChaining = angka.filter(a => a > 5)
.map(a => a * 3)
.reduce((acc,curr) => acc + curr);

console.log(`Hasil Chaining \n\n${hasilChaining}`);