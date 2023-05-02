fetch("output.json")
  .then((response) => response.json())
  .then((data) => {
    // Do something with the JSON data
  })
  .catch((error) => console.error(error));

const container = document.getElementById("movies-container");

// Load the JSON file
const xhr = new XMLHttpRequest();
xhr.open("GET", "movies.json");
xhr.onload = function () {
  if (xhr.status === 200) {
    // Parse the JSON data
    const data = JSON.parse(xhr.responseText);
    const movies = data.movies;

    // Loop through the movies and create HTML elements
    movies.forEach(function (movie) {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");

      // Add the movie data to the HTML elements
      movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.year}</p>
        <p>${movie.rating}</p>
        <p>${movie.genre}</p>
        <img src="${movie.poster}" alt="${movie.title}">
        <a href="${movie.href}">More info</a>
      `;

      container.appendChild(movieElement);
    });
  }
};
xhr.send();
