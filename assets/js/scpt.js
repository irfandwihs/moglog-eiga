function searchMovies() {
  const searchTerm = document.getElementById("search-input").value;
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = ""; // Clear previous search results

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
      movieElement.innerHTML = `
      
        <div class="all crime drama thriller 2022">
        <div class="movie-card">
          <div class="card-head">
          <img src="${movie.poster}" alt="${movie.title} poster">

            <div class="card-overlay">
              <div class="bookmark">
                <ion-icon name="calendar-outline"></ion-icon>
                <span>${movie.year}</span>
              </div>

              <div class="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>${movie.rating}</span>
              </div>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">${movie.title}</h3>

            <div class="card-info">
              <span class="genre"><p> ${movie.genre}</p></span>
            </div>
            <br /><a href="${movie.href}" class="btn-detail"
              >Details</a
            >
          </div>
        </div>
      </div>
        `;
      searchResults.appendChild(movieElement);
    }
  }
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchMovies);

const filmTable = document.getElementById("filmTable");

const movieGrid = document.querySelector(".movie-grid");

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.innerHTML = `<div class="all crime drama thriller 2022">
        <div class="movie-card">
          <div class="card-head">
          <img src="${movie.poster}" alt="${movie.title} poster">

            <div class="card-overlay">
              <div class="bookmark">
                <ion-icon name="calendar-outline"></ion-icon>
                <span>${movie.year}</span>
              </div>

              <div class="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>${movie.rating}</span>
              </div>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title" style="overflow: hidden !important; text-overflow: ellipsis !important;">${movie.title}</h3>

            <div class="card-info">
              <span class="genre"><p> ${movie.genre}</p></span>
            </div>
            <br /><a href="${movie.href}" class="btn-detail"
              >Details</a
            >
          </div>
        </div>
      </div>`;

  movieGrid.appendChild(card);
});
/* function displayImage(src, width, height) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  document.body.appendChild(img);
} */

films.forEach((film) => {
  const row = document.createElement("tr");
  /* const judulCell = document.createElement("h3");
  judulCell.textContent = film.judul;
  const genreCell = document.createElement("span");
  genreCell.textContent = film.genre;
  const tahunCell = document.createElement("span");
  tahunCell.textContent = film.tahun;
  const ratingCell = document.createElement("span");
  ratingCell.textContent = film.rating; */

  /*   const posterCell = document.createElement("td");
  posterCell.textContent = document.displayImage(
    "https://iili.io/HvMvuHl.md.webp",
    320,
    250
  ); */

  /* row.appendChild(judulCell);
  row.appendChild(genreCell);
  row.appendChild(tahunCell);
  row.appendChild(ratingCell); */
  movieElement.classList.add("movie");
  movieElement.innerHTML = `
      
        <div class="all crime drama thriller 2022">
        <div class="movie-card">
          <div class="card-head">
          <img src="${movie.poster}" alt="${movie.title} poster">

            <div class="card-overlay">
              <div class="bookmark">
                <ion-icon name="calendar-outline"></ion-icon>
                <span>${movie.year}</span>
              </div>

              <div class="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>${movie.rating}</span>
              </div>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title" style="overflow: hidden !important; text-overflow: ellipsis !important;">${movie.title}</h3>

            <div class="card-info">
              <span class="genre"><p> ${movie.genre}</p></span>
            </div>
            <br /><a href="${movie.href}" class="btn-detail"
              >Details</a
            >
          </div>
        </div>
      </div><br/><br/>
        `;
  searchResults.appendChild(movieElement);
  /* row.appendChild(posterCell); */

  filmTable.appendChild(row);
});
