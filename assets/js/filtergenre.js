/*const movieList = document.getElementById("movieList");
const genreSelect = document.getElementById("genre");

 function showMovies() {
  let movieHTML = "";
  movies.forEach((movie) => {
    movieHTML += `<div class="all crime drama thriller 2022">
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
  });
  movieList.innerHTML = movieHTML;
}

showMovies();

genreSelect.addEventListener("change", () => {
  const selectedGenre = genreSelect.value;
  if (selectedGenre === "all") {
    showMovies();
  } else {
    let filteredMovies = movies.filter((movie) =>
      movie.genre.includes(selectedGenre)
    );
    let movieHTML = "";
    filteredMovies.forEach((movie) => {
      movieHTML += `<div class="all crime drama thriller 2022">
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
    });
    movieList.innerHTML = movieHTML;
  }
});
 */

/* function filterGenre() {
  let genre = document.getElementById("genre").value;
  let movieContainer = document.getElementById("movie-grid");
  let filteredMovies = movies.filter((movie) => movie.genre.includes(genre));
  movieContainer.innerHTML = "";
  for (let i = 0; i < filteredMovies.length; i++) {
    movieContainer.innerHTML += `
      <div class="all crime drama thriller 2022">
        <div class="movie-card">
          <div class="card-head">
          <img src="${filteredMovies[i].poster}" alt="${filteredMovies[i].title} poster">

            <div class="card-overlay">
              <div class="bookmark">
                <ion-icon name="calendar-outline"></ion-icon>
                <span>${filteredMovies[i].year}</span>
              </div>

              <div class="rating">
                <ion-icon name="star-outline"></ion-icon>
                <span>${filteredMovies[i].rating}</span>
              </div>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">${filteredMovies[i].title}</h3>

            <div class="card-info">
              <span class="genre"><p> ${filteredMovies[i].genre}</p></span>
            </div>
            <br /><a href="${filteredMovies[i].href}" class="btn-detail"
              >Details</a
            >
          </div>
        </div>
      </div>
        
      `;
  }
} */
/* 
// Get the select element and movie grid
const select = document.getElementById("genre-select");
const movieGrid = document.querySelector(".movie-grid");

// Add an event listener to the select element
select.addEventListener("change", () => {
  // Get the selected genre
  const selectedGenre = select.value;

  // Filter the movies by genre
  const filteredMovies = movies.filter((movie) => {
    return movie.genre.toLowerCase().includes(selectedGenre.toLowerCase());
  });

  // Update the movie grid with the filtered movies
  updateMovieGrid(filteredMovies);
});

// Function to update the movie grid with the given movies
function updateMovieGrid(movies) {
  // Clear the movie grid
  movieGrid.innerHTML = "";

  // Loop through the movies and create a movie card for each one
  movies.forEach((movie) => {
    const movieCard = `
      <div class="movie-card">
        <img src="${movie.poster}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p>${movie.year} | ${movie.genre} | ${movie.duration}</p>
        <a href="${movie.href}" class="button">Details</a>
      </div>
    `;
    movieGrid.insertAdjacentHTML("beforeend", movieCard);
  });
}

// Show all movies by default
updateMovieGrid(movies);
 */

/*==================== FILTER ====================*/

/* const genreDropdown = document.getElementById("genre-dropdown");
genreDropdown.addEventListener("change", (event) => {
  const selectedGenre = event.target.value;

  let filteredMovies;
  if (selectedGenre === "all") {
    filteredMovies = movies;
  } else {
    filteredMovies = movies.filter((movie) =>
      movie.genre.includes(selectedGenre)
    );
  }

  renderMovies(filteredMovies);
});

function renderMovies(moviesToRender) {
  const movieGrid = document.querySelector(".movie-grid");
  movieGrid.innerHTML = "";

  moviesToRender.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    moviePoster.alt = `${movie.title} Poster`;
    movieCard.appendChild(moviePoster);

    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie-info");
    movieCard.appendChild(movieInfo);

    const movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie-title");
    movieTitle.textContent = movie.title;
    movieInfo.appendChild(movieTitle);

    const movieYear = document.createElement("span");
    movieYear.classList.add("movie-year");
    movieYear.textContent = movie.year;
    movieInfo.appendChild(movieYear);

    const movieGenre = document.createElement("span");
    movieGenre.classList.add("movie-genre");
    movieGenre.textContent = movie.genre;
    movieInfo.appendChild(movieGenre);

    const movieRating = document.createElement("span");
    movieRating.classList.add("movie-rating");
    movieRating.textContent = movie.rating;
    movieInfo.appendChild(movieRating);

    const movieDuration = document.createElement("span");
    movieDuration.classList.add("movie-duration");
    movieDuration.textContent = movie.duration;
    movieInfo.appendChild(movieDuration);

    movieGrid.appendChild(movieCard);
  });
} */

function filterMovies() {
  const genreSelect = document.getElementById("genre");
  const selectedGenre = genreSelect.value;

  const filteredMovies = movies.filter((movie) => {
    if (selectedGenre === "all") {
      return true; // Show all movies
    } else {
      return movie.genres.includes(selectedGenre);
    }
  });

  displayMovies(filteredMovies);
}

function displayMovies(filteredMovies) {
  const moviesDiv = document.getElementById("movies");
  moviesDiv.innerHTML = "";

  filteredMovies.forEach((movie) => {
    const movieTitle = document.createElement("div");
    movieTitle.classList.add("movie");
    movieTitle.innerHTML = `
      
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
    moviesDiv.appendChild(movieTitle);
  });
}

// Initial display of all movies
displayMovies(movies);
