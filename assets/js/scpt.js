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

//=======================================================//
/* function showMovieDetails(movie) {
  // Populate the HTML elements with the movie details
  // document.getElementById("movie-title").textContent = movie.title;
  //document.getElementById("movie-year").textContent = movie.year;
  //document.getElementById("movie-rating").textContent = movie.rating;
  //document.getElementById("movie-genre").textContent = movie.genre;
  //document.getElementById("movie-duration").textContent = movie.duration;
  //document.getElementById("movie-poster").src = movie.poster;
  //document.getElementById("movie-synopsis").textContent = movie.synopsis;
  //document.getElementById("movie-trailer").src = movie.embed; 
  const movieTitle = document.getElementById("movie-title");
  const movieYear = document.getElementById("movie-year");
  const movieRating = document.getElementById("movie-rating");
  const movieGenre = document.getElementById("movie-genre");
  const moviePoster = document.getElementById("movie-poster");
  const movieSynopsis = document.getElementById("movie-synopsis");
  const movieDuration = document.getElementById("movie-duration");
  const movieEmbed = document.getElementById("trailer");
}
 */
/* movieTitle.textContent = movie.title;
movieYear.textContent = movie.year;
movieRating.textContent = movie.rating;
movieGenre.textContent = movie.genre;
moviePoster.src = movie.poster;
movieSynopsis.textContent = movie.synopsis;
movieDuration.textContent = movie.duration;
movieEmbed.src = movie.embed; */
// Get the movie title from the URL parameter
/* const urlParams = new URLSearchParams(window.location.search);
const movieTitle = urlParams.get("title"); */

// Find the movie object with matching title
/* const movie = movies.find((movie) => movie.title === movieTitle); */

// Update the page content with movie data
/* showMovieDetails(movie); */

// Show the details for the first movie initially
/* showMovieDetails(movies[0]); */

// Add a click event listener to each movie link to show the corresponding details
/* const movieLinks = document.querySelectorAll(".movie-link");
movieLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    showMovieDetails(movies[index]);
  });
}); */

//=====================//

/* function showMovieDetails(title) {
  // Find the movie in the array
  const movie = movies.find((m) => m.title === title);

  // Populate the HTML elements with the movie details
  document.getElementById("movie-dtls").innerHTML = `
    <h1>${movie.title}</h1>
    <div>
      <span>${movie.year}</span> |
      <span>${movie.rating}</span> |
      <span>${movie.genre}</span> |
      <span>${movie.duration}</span>
    </div>
    <img src="${movie.poster}" alt="${movie.title}">
    <p>${movie.synopsis}</p>
    <iframe id="trailer" src="${movie.embed}" frameborder="0" allowfullscreen></iframe>
  `;
} */

/* function filterMovies(selectedGenre, selectedYear) {
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = ""; // Clear previous search results

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    if (
      (selectedGenre === "all" ||
        movie.genre.toLowerCase() === selectedGenre.toLowerCase()) &&
      (selectedYear === "all" || movie.year === parseInt(selectedYear))
    ) {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
      movieElement.innerHTML = `
        <div class="all ${movie.genre.toLowerCase()} ${movie.year}">
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
              <br /><a href="${movie.href}" class="btn-detail">Details</a>
            </div>
          </div>
        </div>
      `;
      searchResults.appendChild(movieElement);
    }
  }
}

genreDropdown.addEventListener("change", (event) => {
  const selectedGenre = event.target.value;
  const selectedYear = yearDropdown.value;
  filterMovies(selectedGenre, selectedYear);
});

yearDropdown.addEventListener("change", (event) => {
  const selectedGenre = genreDropdown.value;
  const selectedYear = event.target.value;
  filterMovies(selectedGenre, selectedYear);
});
 */
