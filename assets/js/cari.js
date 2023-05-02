const movies = [
  {
    title: "Starbuck",
    year: 2011,
    rating: 7.2,
    genre: "Comedy/Drama/Romance",
    duration: "1h 58m",
  },
  {
    title: "Blue Valentine",
    year: 2010,
    rating: 7.3,
    genre: "Drama/Romance",
    duration: "1h 52m",
  },
];

const tableBody = document.querySelector("#movie-table tbody");

movies.forEach((movie) => {
  const row = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.textContent = movie.title;
  row.appendChild(titleCell);

  const yearCell = document.createElement("td");
  yearCell.textContent = movie.year;
  row.appendChild(yearCell);

  const ratingCell = document.createElement("td");
  ratingCell.textContent = movie.rating;
  row.appendChild(ratingCell);

  const genreCell = document.createElement("td");
  genreCell.textContent = movie.genre;
  row.appendChild(genreCell);

  const durationCell = document.createElement("td");
  durationCell.textContent = movie.duration;
  row.appendChild(durationCell);

  tableBody.appendChild(row);
});
