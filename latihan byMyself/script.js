// inisialisasi
const btsearch = document.getElementsByTagName("button")[0];
const title = document.querySelector(".title");
const nilaiTr = Array.from(document.querySelectorAll("tbody tr"));
const inputUser = document.getElementById("search");

// KODE DIBAWAH AKAN SAYA TAMPUNG KE DALAM SBUAH FUNCTION

function FilterData(string){   
   // Memfilter Berdaasarkan yang diinput User per tag tr
   const cek = nilaiTr.filter((args) => {
      return args.textContent.includes(string);
   })
   
   // Mem- map hasil filter tadi untuk di ambil seluruh children dari tiap tr yang dapat
   // dan diubah menjadi sebuah array
   .map((args)=>{
      return Array.from(args.children);   
   })

   // jika seluruh tag td tadi sudah diubah menjadi array, selanjutnya akan di map lagi
   // untuk  mengambil isi dari masing" tag td dan dijadikan array
   .map((args)=>{
      let tampungArray = [];
      for(let i = 0 ; i < args.length ; i++){
         tampungArray.push(args[i].innerHTML);
      }
      
      return args = tampungArray;
   });

   return cek;
}  
   
   // event pada button search 
   btsearch.addEventListener("click", ()=>{
      console.log(FilterData(inputUser.value));
      
   });