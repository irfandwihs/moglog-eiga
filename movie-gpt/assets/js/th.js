// movie-details.js
import { movies } from "./movie.js"; // Import the movies array

function showMovieDetailByTitle(title) {
  const movie = movies.find((movie) => movie.title === title);
  if (movie) {
    const movieDetails = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style>
      a,
      button,
      input,
      select,
      h1,
      h2,
      h3,
      h4,
      h5,
      * {
        margin: 0;
        padding: 0;
        border: none;
        text-decoration: none;
        appearance: none;
        background: none;
      }
    </style>
    <title>${movie.title}</title>
  </head>
  <body>
    <div class="frame-1">
      <div class="frame-2">
        <div class="rectangle-1"></div>
        <div class="group-1">
          <div class="image-2">
                  <iframe
                    width="1185"
                    height="582"
                    src="${movie.embed}"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
        </div>
        <div class="rectangle-3"></div>
        <img
                  class="rectangle-4"
                  src="${movie.poster}" alt="${movie.title}"
                />
        <div class="movie-gpt"><a href="https://pernahnontonfilm.netlify.app/gpt.html">MovieGPT</a></div>
        <div class="black-berry">${movie.title}</div>
        <div class="">/</div>
        <div class="detail-page">Detail Page</div>
        <div class="synopsis">Synopsis</div>
        <div
          class="the-story-of-the-meteoric-rise-and-catastrophic-demise-of-the-world-s-first-smartphone"
        >
          ${movie.synopsis}
        </div>
        <div class="genres">Genres</div>
        <div class="year">Year</div>
        <div class="rating">Rating</div>
        <div class="duration">Duration</div>
        <div class="country">Country</div>
        <div class="biography-comedy-drama">${movie.genre}</div>
        <div class="_2023">${movie.year}</div>
        <div class="_7-4">${movie.rating}</div>
        <div class="_2-h">${movie.duration}</div>
        <div class="usa">USA</div>
        <div class="home">Home</div>
        <div class="rectangle-5"></div>
        <div class="series">Series</div>
      </div>
    </div>
  </body>
</html>

    `;

    // Display the dynamic HTML in the specified div
    document.getElementById("movie-details").innerHTML = movieDetails;
  } else {
    document.getElementById("movie-details").innerHTML =
      "<p>Movie not found.</p>";
  }
}

// Export the function for use in other files
export { showMovieDetailByTitle };
