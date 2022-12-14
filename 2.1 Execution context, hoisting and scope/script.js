// sebelum adanya execution context, ada yang namanya :
// 1. creation phase pada global context
//      => dia akan mencari dan mendefinisikan beberapa hal, :
//          a.) var nama = undifined;
//          b.) function nama = fn();
// 2. hoisting
// 3. window = global object
// 4. this = window


// cth 1

console.log(nama);

var nama = "hendrik";

console.log(nama + '\n\n');


// cth 2

function a(){
    console.log("ini a");

    function b(){
        console.log("ini b");

        function c(){
            console.log("ini c");

        }

        c();
    }

    b();
}

a();


console.log('\n\n');


// cth 3

function satu(){
    var mahasiswa = "dodi";
    return console.log(mahasiswa);
}

function dua(){
    return console.log(mahasiswa);
}

console.log(mahasiswa);
var mahasiswa = "Mia";
satu();
dua();
console.log(mahasiswa);