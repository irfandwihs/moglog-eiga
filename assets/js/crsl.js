const films = [
  {
    title: "Monster",
    year: 2023,
    rating: 5.8,
    genre: "Drama/Thriller",
    genres: ["drama", "thriller"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDA3NTQ1YWItZDg4Ny00ZDYxLWJmZDYtODY4MTcwYWFlMDYwXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_.jpg",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/cOpWDxxiwoE",
    synopsis:
      "A mother demands answers from teacher when her son begins acting strangely.",
    duration: "2h 1m",
  },
  {
    title: "Toxic Parents",
    year: 2023,
    rating: 6.3,
    genre: "Drama/Mystery",
    genres: ["drama", "mystery"],
    country: "Korea",
    countrys: ["korea"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjY2NGM0ZWUtMTE3ZC00YmVjLThhNzktMjg5YjU5NzkxYTU4XkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_.jpg",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/axPKkVYkyS8",
    synopsis:
      "A student's death at a campsite prompts questions. Detectives find the mother's actions impacted her daughter as she suspects others close to the girl. The film explores uncovering the complex tragedy.",
    duration: "1h 44m",
  },
  {
    title: "The Baker",
    year: 2023,
    rating: 5.8,
    genre: "Action/Crime/Drama",
    genres: ["action", "crime", "drama"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmQyMWMyYWUtNDFjNC00MmI4LWEwYzgtMDE5ZjJmYmY0MmQ0XkEyXkFqcGdeQXVyNTE0NDY2Ng@@._V1_.jpg",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/LjTAWiC6axA",
    synopsis:
      "An elderly baker must do everything he can to protect his granddaughter from gangsters.",
    duration: "1h 40m",
  },
  {
    title: "The Abandoned",
    year: 2023,
    rating: 6.4,
    genre: "Crime/Mystery/Thriller",
    genres: ["crime", "mystery", "thriller"],
    country: "Taiwan",
    countrys: ["taiwan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzY2NDAwMDItYTgxMS00NGZkLTkxODktMmQ1NDZmMjVjOTBlXkEyXkFqcGdeQXVyNTg5NjQxMjc@._V1_.jpg",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/GAJ9T7qBThc",
    synopsis:
      "When a mysterious corpse is found in a river, a distressed police officer delves into a string of grisly murders as danger quickly approaches.",
    duration: "1h 44m",
  },
  {
    title: "Space Kids",
    year: 2023,
    rating: 5.5,
    genre: "Animation",
    genres: ["animation"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTZlOTQzMWYtZGFkZS00ZjU3LTlmNzgtOGIwZjY2YjVjZTE0XkEyXkFqcGdeQXVyMTE4NTI5NTA@._V1_.jpg",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/dDMZNtGAbl4",
    synopsis:
      "A planet is converted into a desert wasteland because its precious plant, containing essential energy, was destroyed. Three kids believe that hope still exists and face all odds to find the last remaining plant.",
    duration: "1h 16m",
  },
  {
    title: "Chicken Run: Dawn of the Nugget",
    year: 2023,
    rating: 6.4,
    genre: "Animation/Adventure/Comedy",
    genres: ["animation", "adventure", "comedy"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzNhZTkyMWItMTAwZS00ZGJkLTlkMTctNjc5ZDdkMDNmMmE1XkEyXkFqcGdeQXVyMTA5ODEyNTc5._V1_.jpg",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/_-Kz67kea8Q",
    synopsis:
      "Having pulled off an escape from Tweedy's farm, Ginger has found a peaceful island sanctuary for the whole flock. But back on the mainland the whole of chicken-kind faces a new threat, and Ginger and her team decide to break in.",
    duration: "1h 41m",
  },
  // Add more movie data as needed
];

const slider = document.getElementById("movieSlider");

// Function to create a movie card
function createMovieCard(film) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.style.backgroundImage = `url('${film.poster}')`;

  const content = document.createElement("div");
  content.classList.add("content");

  const title = document.createElement("h2");
  title.classList.add("judul");
  title.textContent = `"${film.title}"`;

  const synopsis = document.createElement("p");
  synopsis.classList.add("description");
  synopsis.textContent = film.synopsis;

  /* const button = document.createElement("button");
  button.textContent = "Details"; */
  const button = document.createElement("button");
  button.textContent = "Details";

  // Add an event listener to the button
  button.addEventListener("click", function () {
    // Construct the detail page URL with the movie title
    const detailPageURL = `./detail.html?title=${encodeURIComponent(
      film.title
    )}`;

    // Navigate to the detail page
    window.location.href = detailPageURL;
  });

  // Now append the button to the desired container (for example, your movie card)
  // card.appendChild(button);

  content.appendChild(title);
  content.appendChild(synopsis);
  content.appendChild(button);
  /* card.appendChild(button); */
  li.appendChild(content);

  return li;
}

// Populate slider with movie data
for (const film of films) {
  const card = createMovieCard(film);
  slider.appendChild(card);
}

// Auto-play slider
setInterval(() => {
  slider.append(document.querySelector(".item"));
}, 5000); // Adjust the time interval as needed
