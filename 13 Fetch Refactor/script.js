const btSearch = document.querySelector(".btSearch");

btSearch.addEventListener("click", async function(){
    const keyword = document.querySelector(".keywordMovie");
    const Movies = await getMovies(keyword.value);
    updateUiCardMovie(Movies);

});

// Untuk event pada button show details, kita akan menggunakan  event binding.
// karena bt show detail sebelumnya belum ada.

// event binding
document.addEventListener("click", async function(e){
    if(e.target.classList.contains("btDetails")){
        const detailsMovie = await getDetails(e.target.dataset.idmdb);
        
        document.querySelector(".modalWrapper").innerHTML = updateUiDetailsMovies(detailsMovie);
    }
});

// function to get data from api
function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=5f18c795&s=' + keyword)
     .then(result => result.json())
     .then(result => result.Search);
}


// function to update UI to show card Movies
function updateUiCardMovie(movies){
    let tmplate = ``;
    movies.forEach(m => tmplate += showCard(m));
    document.querySelector(".card-Wrapper").innerHTML = tmplate;
}

// function for movie card
function showCard({Title, Year, imdbID,Poster}){
    return `
    <div class="col-md-4 my-3">
        <div class="card">
            <img src="${Poster}" class="card-img-top" alt="${Title}">
            <div class="card-body">
                <h5 class="card-title">${Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${Year}</h6>
                <a href="#" class="btn btn-primary btDetails" data-idmdb="${imdbID}" data-bs-toggle="modal" data-bs-target="#modalDetails">Show Details</a>
            </div>
        </div>
    </div>`;
}

// function for details movies
function updateUiDetailsMovies({Title, Year, Poster, Actors, Writer, Director, Plot}){
    return `
    <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="modalDetailsLabel">Movies Detail</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <!-- Isi Modals Start -->
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <img src="${Poster}" alt="${Title}" class="img-fluid">
                </div>
                
                <div class="col">
                    <ul class="list-group">
                        <li class="list-group-item"><strong>${Title} (${Year})</strong></li>
                        <li class="list-group-item"><strong>Director : </strong>${Director}</li>
                        <li class="list-group-item"><strong>Actress : </strong>${Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong>${Writer}</li>
                        <li class="list-group-item"><strong>Plot :</strong><br>${Plot}</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- End -->
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>`;
}

// function to get Data Details Movie From API
function getDetails(imdb){
    return fetch('http://www.omdbapi.com/?apikey=5f18c795&i=' + imdb)
        .then(response => response.json())
        .then(response => response);
}