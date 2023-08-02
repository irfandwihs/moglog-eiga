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

// Function to handle filtering by genre
function handleFilterByCategory(selectedOption, category) {
  let filteredMovies = movies;

  if (selectedOption !== 'all') {
    filteredMovies = movies.filter(movie => movie[category].includes(selectedOption));
  }

  displayMovies(filteredMovies);
}

// Event listener for the dropdown options
const optionElements = document.querySelectorAll('.option div[data-option]');
optionElements.forEach(option => {
  option.addEventListener('click', () => {
    const selectedOption = option.getAttribute('data-option');
    handleFilterByCategory(selectedOption, 'genres');
  });
});

// Event listener to toggle dropdown visibility
const textBox = document.querySelector('.textBox');
const dropdownOptions = document.querySelector('.option');
textBox.addEventListener('click', () => {
  dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
});

// Hide dropdown when clicking outside
document.addEventListener('click', event => {
  if (!textBox.contains(event.target) && !dropdownOptions.contains(event.target)) {
    dropdownOptions.style.display = 'none';
  }
});

// Initial display of all movies
handleFilterByCategory('all', 'genres');
/* // Function to filter movies based on genre selection
function handleFilterByCategory(category, categoryName) {
  const filteredMovies =
    category === "all"
      ? movies
      : movies.filter((movie) => movie.genres.includes(category));
  displayMovies(filteredMovies);

  // Update the filter text
  const textBox = document.querySelector(".textBox");
  textBox.value = categoryName;
} */

