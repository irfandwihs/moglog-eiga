import { movies } from "./movie.js";

// Function to count movies by year
function countMoviesByYear(year) {
  let count = 0;
  for (const movie of movies) {
    if (movie.year === year) {
      count++;
    }
  }
  return count;
}

// Function to update the movie count display
function updateMovieCountDisplay(year, count) {
  const yearOption = year === 0 ? "All Years" : year;
  const yearOptionElement = document.querySelector(`option[value="${year}"]`);
  if (yearOptionElement) {
    yearOptionElement.textContent = `${yearOption} (${count})`;
  }
}

// Get the select element for the year filter
const yearSelect = document.getElementById("year-filter");

// Event listener for when the year filter is changed
yearSelect.addEventListener("change", function () {
  const selectedYear = parseInt(yearSelect.value);
  if (selectedYear === 0) {
    // All years selected, count movies for all years
    const totalMovieCount = movies.length;
    updateMovieCountDisplay(0, totalMovieCount);
  } else {
    // Count movies for the selected year
    const movieCount = countMoviesByYear(selectedYear);
    updateMovieCountDisplay(selectedYear, movieCount);
  }
});

// Function to filter and display movie cards
function displayMovies() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const genreFilter = document.getElementById("genre-filter").value;
  const countryFilter = document.getElementById("country-filter").value;
  const yearFilter = document.getElementById("year-filter").value;

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(searchInput);
    const genreMatch =
      genreFilter === "all" || movie.genre.toLowerCase().includes(genreFilter);
    const countryMatch =
      countryFilter === "all" || movie.country.toLowerCase() === countryFilter;
    const yearMatch =
      yearFilter === "all" || movie.year.toString() === yearFilter;
    return titleMatch && genreMatch && countryMatch && yearMatch;
  });

  const movieContainer = document.getElementById("movie-container");
  movieContainer.innerHTML = "";

  filteredMovies.forEach((movie) => {
    const card = createMovieCard(movie);
    movieContainer.appendChild(card);
  });
}

//card with icon
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  // Create the poster image
  const poster = document.createElement("img");
  poster.classList.add("poster");
  poster.src = movie.poster;
  card.appendChild(poster);

  // Create the year overlay with icon
  const yearOverlay = document.createElement("div");
  yearOverlay.classList.add("overlay-year");
  yearOverlay.innerHTML = `
    <ion-icon name="calendar-outline"></ion-icon>
    ${movie.year}
  `;
  card.appendChild(yearOverlay);

  // Create the rating overlay with icon
  const ratingOverlay = document.createElement("div");
  ratingOverlay.classList.add("overlay-rating");
  ratingOverlay.innerHTML = `
    <ion-icon name="star-outline"></ion-icon>
    ${movie.rating}
  `;
  card.appendChild(ratingOverlay);

  // Create the movie title
  const title = document.createElement("h3");
  title.textContent = movie.title;
  title.classList.add("ellipsis");
  card.appendChild(title);

  // Create the movie details
  const details = document.createElement("div");
  details.classList.add("movie-details");
  details.innerHTML = `
    <p class="ellipsis">${movie.genre}</p>
  `;
  card.appendChild(details);

  // Create the detail button
  const detailButton = document.createElement("a");
  detailButton.href = `./detail.html?title=${encodeURIComponent(movie.title)}`;
  detailButton.textContent = "Details";
  detailButton.setAttribute("data-movie-title", movie.title); // Use movie title as data attribute
  detailButton.classList.add("btn-detail");
  card.appendChild(detailButton);

  return card;
}

// Event listener for search button
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", displayMovies);

// Event listeners for filter dropdowns
const genreFilter = document.getElementById("genre-filter");
const countryFilter = document.getElementById("country-filter");
const yearFilter = document.getElementById("year-filter");
genreFilter.addEventListener("change", displayMovies);
countryFilter.addEventListener("change", displayMovies);
yearFilter.addEventListener("change", displayMovies);

// Display all movies and count on page load
displayMovies();
const totalMovieCount = movies.length;
updateMovieCountDisplay(0, totalMovieCount); // Update "All Years" count

const scrollToTopButton = document.getElementById("scrollToTop");

// Show the button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
