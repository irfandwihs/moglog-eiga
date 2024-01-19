import { movies } from "./movie.js"; // Import movieData from movie.js

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieTitle = urlParams.get("title"); // Get movie title from URL parameter

// Function to display movie detail
function displayMovieDetail(movie) {
  const detailContainer = document.querySelector(".detail-container");
  detailContainer.innerHTML = ""; // Clear previous content

  const detailHtml = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <title>${movie.title}</title>
  </head>
  <body>
    <div class="extra-extra-large-1400-px">
      <div class="logo">
        <img
          style="width: 32px; height: 32px"
          src="https://iili.io/Ht4kAhv.md.webp"
          alt=""
        />
      </div>
      <div class="navbar">
        <div class="home"><a href="https://pernahnontonfilm.netlify.app/index.html" style="text-decoration: none; color: #767d94;">Home</a></div>
      </div>
      <div class="trailer">
        <div class="rectangle-2">
          <iframe
            width="1185"
            height="582"
            style="border-radius: 20px"
            src="${movie.embed}"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="title">
        <div class="movie-gpt"><a href="https://pernahnontonfilm.netlify.app/index.html" style="text-decoration: none; color: #abdceb;">MovieGPT</a></div>
        <div style="color: #abdceb;">/</div>
        <div class="detail-page">Detail Page</div>
        <div class="black-berry">${movie.title}</div>
      </div>
      <img class="poster2" src="${movie.poster}" alt="${movie.title}" />
      <div class="synopsis">
        <div class="synopsis2">Synopsis</div>
        <div class="synopsis-content">${movie.synopsis}</div>
      </div>
      <div class="genres">
        <div class="genres2">Genres</div>
        <div class="genres-content">${movie.genre}</div>
      </div>
      <div class="years">
        <div class="year">Year</div>
        <div class="year-content">${movie.year}</div>
      </div>
      <div class="rating">
        <div class="rating2">Rating</div>
        <div class="rating-content">${movie.rating}</div>
      </div>
      <div class="duration">
        <div class="duration2">Duration</div>
        <div class="duration-content">${movie.duration}</div>
      </div>
      <div class="country">
        <div class="country2">Country</div>
        <div class="country-content">${movie.country}</div>
      </div>
    </div>
  </body>
</html>
  `;

  // Set the generated HTML content to the detailContainer
  detailContainer.innerHTML = detailHtml;
}

// Find the selected movie by title
const selectedMovie = movies.find((movie) => movie.title === movieTitle);
if (selectedMovie) {
  displayMovieDetail(selectedMovie);
} else {
  // Display an error message if movie is not found
  const detailContainer = document.querySelector(".detail-container");
  detailContainer.innerHTML = "<p>Movie not found</p>";
}
