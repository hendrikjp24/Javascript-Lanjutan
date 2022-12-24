// Template untuk card movienya
function showCard(m){
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary btn-modal" data-bs-toggle="modal" data-bs-target="#DetailMovies" data-idm="${m.imdbID}">Detail</a>
                    </div>
                </div>
            </div>`;
}


// membuat function untuk template detail movie
function showDetail(m){
    return `<div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="DetailMoviesLabel">Movie Detail</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${m.Poster}" class="img-fluid">
                        </div>

                        <div class="col-md">
                            <ul class="list-group">
                                <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                                <li class="list-group-item"><strong>Actress : </strong>${m.Actors}</li>
                                <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                                <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>`;
}

$(".btn-search").on("click", function(){
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=5f18c795&s=' + $(".valueSearch").val(), //Alamat url api dan juga key yang sudah kita dapatkan
        success: result => {
            const data = result.Search;
            let template = ``;
    
            data.forEach(dt => {
                template += showCard(dt);
            });
    
            $(".card-wrapper").html(template);
    
            $(".btn-modal").on("click", function(){
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=5f18c795&i=' + $(this).data('idm'),
                    success: result => {
                        $(".detail-wrapper").html(showDetail(result));
                    },
                    error: e => {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: e =>{
            console.log(e.responseText);
        }
    });
});

// Mengambil data menggunakan api melalui jquery