const box = document.querySelector(".box");


box.addEventListener("click", function(){
    let satu = "size";
    let dua = "caption"

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];  // cara terbaru untuk mengubah isi variabel satu dengan nilai variabel dua dan variabel dua dengan niali variabel satu.

    }

    this.classList.toggle(satu);

    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});

// terkadang pada arrow function tidak ada yang namanya konsep this jadi sebelum memakai arrow function atau expression silahkan cek dengan menggunakan console.log(this).

// jika hasilnya mengacu ke window berarti harus pakai yang satunya