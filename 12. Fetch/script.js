// mengambil data dari API menggunakan fetch



const btSearch = document.querySelector(".btnSearch");

btSearch.addEventListener("click", ()=>{
    const inputUser = document.querySelector(".inputSearch");

    fetch('http://www.omdbapi.com/?apikey=5f18c795&s=' + inputUser.value)
    .then(result => result.json())
    .then(result => {
        const movies = result.Search;
        let tmplate = ``;
        movies.forEach(e => tmplate += showCard(e));

        document.querySelector(".cardWrapper").innerHTML = tmplate;
        
        const btDetail = document.querySelectorAll(".btDetail");

        btDetail.forEach(bt => {
            bt.addEventListener("click", function(){
                const idM = this.dataset.id;


                console.log(idM);
                fetch('http://www.omdbapi.com/?apikey=5f18c795&i=' + idM)
                .then(result => result.json())
                .then(result => {
                    const detail = showDetail(result);

                    document.querySelector(".modalWrapper").innerHTML = detail;
                });

            });
        });

    });
});



// template untuk card movies

function showCard({Title, Year, imdbID, Poster}){
    return `
    <div class="col-md-4 my-3">
        <div class="card">
            <img src="${Poster}" class="card-img-top" alt="Avengers">
            <div class="card-body">
                <h5 class="card-title">${Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${Year}</h6>
                <a href="#" class="btn btn-primary btDetail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${imdbID}">Detail</a>
            </div>
        </div>
    </div>`;
}


function showDetail({Title, Year, Actors, Writer, Plot, Poster, Director}){
    return `
    <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Movie Detail</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="container-fluid">
            <div class="row">
            <div class="col-md-4">
                <img src="${Poster}" alt="${Title}" class="img-fluid">
            </div>

            <div class="col">
                <ul class="list-group">
                <li class="list-group-item"><strong>${Title}(${Year})</strong></li>
                <li class="list-group-item"><strong>Director : </strong>${Director}</li>
                <li class="list-group-item"><strong>Actress : </strong>${Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong><br>${Plot}</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>`
}