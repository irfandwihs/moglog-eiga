// Import film data
import { ghibliFilms } from "./ghibli.js";
import { marvelFilms } from "./marvel.js";

// Function to create a movie card
// Function to create a film card using the provided movie data
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("film-card");

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

// Function to populate a movie section
function populateMovieSection(containerId, films) {
  const container = document.getElementById(containerId);

  films.forEach((film) => {
    const card = createMovieCard(film);
    container.appendChild(card);
  });
}

// Populate Ghibli section
populateMovieSection("ghibli-container", ghibliFilms);

// Populate Marvel section
populateMovieSection("marvel-container", marvelFilms);
