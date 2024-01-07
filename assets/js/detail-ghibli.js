import { ghibliFilms } from "./ghibli.js"; // Import the movies array

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const movieTitle = urlParams.get("title"); // Get movie title from URL parameter

// Function to display movie detail
function displayMovieDetail(ghibliFilms) {
  const detailContainer = document.querySelector(".detail-container");
  detailContainer.innerHTML = ""; // Clear previous content

  const detailHtml = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <title>${ghibliFilms.title}</title>
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
        <div class="series">Series</div>
      </div>
      <div class="trailer">
        <div class="rectangle-2">
          <iframe
            width="1185"
            height="582"
            style="border-radius: 20px"
            src="${ghibliFilms.embed}"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="title">
        <div class="movie-gpt"><a href="https://pernahnontonfilm.netlify.app/index.html" style="text-decoration: none; color: #abdceb;">MovieGPT</a></div>
        <div style="color: #abdceb;">/</div>
        <div class="detail-page">Detail Page</div>
        <div class="black-berry">${ghibliFilms.title}</div>
      </div>
      <img class="poster2" src="${ghibliFilms.poster}" alt="${ghibliFilms.title}" />
      <div class="synopsis">
        <div class="synopsis2">Synopsis</div>
        <div class="synopsis-content">${ghibliFilms.synopsis}</div>
      </div>
      <div class="genres">
        <div class="genres2">Genres</div>
        <div class="genres-content">${ghibliFilms.genre}</div>
      </div>
      <div class="years">
        <div class="year">Year</div>
        <div class="year-content">${ghibliFilms.year}</div>
      </div>
      <div class="rating">
        <div class="rating2">Rating</div>
        <div class="rating-content">${ghibliFilms.rating}</div>
      </div>
      <div class="duration">
        <div class="duration2">Duration</div>
        <div class="duration-content">${ghibliFilms.duration}</div>
      </div>
      <div class="country">
        <div class="country2">Country</div>
        <div class="country-content">${ghibliFilms.country}</div>
      </div>
    </div>
  </body>
</html>
  `;

  // Set the generated HTML content to the detailContainer
  detailContainer.innerHTML = detailHtml;
}

// Find the selected movie by title
const selectedMovie = ghibliFilms.find(
  (ghibliFilms) => ghibliFilms.title === movieTitle
);
if (selectedMovie) {
  displayMovieDetail(selectedMovie);
} else {
  // Display an error message if movie is not found
  const detailContainer = document.querySelector(".detail-container");
  detailContainer.innerHTML = "<p>Movie not found</p>";
}
