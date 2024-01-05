import { movies } from "./movie.js";
import { latestMovies } from "./latestmovie.js";

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
  detailButton.href = `./movie-gpt/detail.html?title=${encodeURIComponent(
    movie.title
  )}`;
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

// URL ke file movie.js di GitHub
const movieDataUrl =
  "https://raw.githubusercontent.com/irfandwihs/moglog-eiga/master/movie-gpt/assets/js/movie.js";

// Fungsi untuk mengambil data terakhir dari daftar film
async function getLatestMovieData() {
  try {
    // Tambahkan pernyataan console.log untuk memeriksa data yang diterima
    console.log("Data yang diterima:", latestMovies);

    // Ubah data teks menjadi objek JavaScript
    // Anda mungkin perlu mengubah cara ini sesuai dengan format data di dalam movie.js
    //const movieArray = eval(movieData);

    const lastMovieContainer = document.getElementById("new-movie");
    lastMovieContainer.innerHTML = "";

    latestMovies.forEach((movie) => {
      const card = createMovieCard(movie);
      lastMovieContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

// Panggil fungsi untuk mengambil dan menampilkan data terakhir saat halaman dimuat
window.addEventListener("load", getLatestMovieData);

/* // Function to initialize the carousel
function initializeCarousel() {
  const movieContainer = document.getElementById("new-movie");

  // Number of movies to display in the carousel
  const numberOfMovies = 6;

  // Display initial movies
  for (let i = 0; i < numberOfMovies; i++) {
    const card = createMovieCard(latestMovies[i].title);
    movieContainer.appendChild(card);
  }

  // Automatically shift the carousel every 3 seconds
  setInterval(() => {
    // Remove the first movie card
    movieContainer.removeChild(movieContainer.firstChild);

    // Get the next movie title
    const nextMovieTitle = latestMovies[i++ % latestMovies.length].title;

    // Create and append the new movie card
    const card = createMovieCard(nextMovieTitle);
    movieContainer.appendChild(card);
  }, 3000);
}

// Call the function to initialize the carousel when the window loads
window.addEventListener("load", initializeCarousel); */

// Function to initialize the carousel
function initializeCarousel() {
  const movieContainer = document.getElementById("new-movie");
  let i = 0; // Initialize the index

  // Number of movies to display in the carousel
  const numberOfMovies = 6;

  // Function to create a movie card
  function createMovieCard(title) {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.textContent = title;
    return card;
  }

  // Function to update the carousel
  function updateCarousel() {
    // Remove all movie cards
    movieContainer.innerHTML = "";

    // Display the next set of movies
    for (let j = 0; j < numberOfMovies; j++) {
      const index = (i + j) % latestMovies.length;
      const card = createMovieCard(latestMovies[index].title);
      movieContainer.appendChild(card);
    }

    i = (i + numberOfMovies) % latestMovies.length; // Update the index
  }

  // Display initial set of movies
  updateCarousel();

  // Automatically shift the carousel every 3 seconds
  setInterval(updateCarousel, 3000);
}

// Call the function to initialize the carousel when the window loads
window.addEventListener("load", initializeCarousel);
