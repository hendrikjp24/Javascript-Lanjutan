function showNews({title, urlToImage, description, url},date){
    return `
            <div class="col-md-3 my-4">
                <div class="card">
                    <img src="${urlToImage}" class="card-img-top" alt="${title}">
                    <div class="card-body">
                      <h5 class="card-title">${title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                      <p class="card-text">${description} ...</p>
                      <a href="${url}" class="btn btn-primary">Baca Selengkapnya</a>
                    </div>
                  </div>
            </div>`;
}

$(".btSearch").on("click", function(){
    $.ajax({
        url: 'https://newsapi.org/v2/everything?q=' + $(".value").val() + '&apiKey=371f5466a91940fc8ad4f2a8437e6301',
        success: result => {
            const news = result.articles;
            const date = new Date(news[0].publishedAt);        
            const bulan = [
                'Januari', 'Februari', 'Maret', 'April', 'Mei',
                'Juni', 'Juli', 'Agustus', 'September', 'Oktober',
                'November', 'Desember'
            ];

            
            const month = bulan.filter((e,i)=>{
                return i == date.getMonth();
            });
            
            const templateDate = `${date.getDate()} ${month} ${date.getFullYear()}`;
            // console.log(date.getDate()); //Tgl
            
            // console.log(date.getMonth()); //Bulan
            
            // console.log(date.getFullYear()); //Tahun

    
            let template = ``;

            // Membuat sebuah kondisi, jika berita yang didapatkan lebih dari 10, maka hanya akan ditampilkan 10 berita saja
            if(news.length > 10){
                news.forEach((n,i) => {
                    if(i <= 9){
                        template += showNews(n,templateDate);
                    }else{
                        // Nothing To Do
                    }
                });
            }else{
                news.forEach(n => template += showNews(n,templateDate));
            }
    
            $(".wrapper-news").html(template);
        },
        error: er => console.log(er.responseText)
    });
});
