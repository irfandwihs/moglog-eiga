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

          <h3>${movie.title} (${movie.year})</h3>
          <p><strong>Director:</strong> ${movie.director}</p>
          <p><strong>Genre:</strong> ${movie.genre}</p>
          <img src="${movie.poster}" alt="${movie.title} poster">
          <div class="all comedy 2022" style="border-radius: 15px !important">
              <div class="movie-card">
                <div class="card-head">
                  <img
                    src="https://iili.io/psuX9f.md.webp"
                    alt=""
                    class="card-img"
                  />

                  <div
                    class="card-overlay"
                    style="border-radius: 15px !important"
                  >
                    <div class="bookmark">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <span>2022</span>
                    </div>

                    <div class="rating">
                      <ion-icon name="star-outline"></ion-icon>
                      <span>7.1</span>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <h3 class="card-title">6/45</h3>

                  <div class="card-info">
                    <span class="genre">Comedy</span>
                  </div>
                  <br />
                  <a href="./page/6-45.html" class="btn-detail">Details</a>
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
