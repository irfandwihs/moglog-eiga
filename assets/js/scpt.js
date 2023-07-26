//This function worked
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
            <h3 class="card-title">${movie.title}</h3>

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
