const films = [
  {
    title: "Suzzanna : Malam Jum'at Kliwon",
    year: 2023,
    rating: 5.7,
    genre: "Drama/Fantasy/Horror",
    genres: ["drama", "fantasy", "horror"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster:
      "https://drive.google.com/uc?export=view&id=1sykoTj02oQbTe79wQuSuPa_B1_K28Z0i",
    href: "/movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/W3OiJi8UyUk",
    synopsis:
      "After a shaman casts a curse on her, a woman is killed by dark sorcery and resurrected as a wrathful spirit who seeks to reunite with her newborn baby.",
    duration: "2h 10m",
  },
  {
    title: "Taeter Burger",
    year: 2023,
    rating: 5.4,
    genre: "Action/Sci-Fi",
    genres: ["action", "scifi"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://drive.google.com/uc?export=view&id=1mPUbJ9swO3SFr8wP29VskBrYaEardX2Y",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/r8IJU9st950",
    synopsis:
      "Year 2161: one android and three employees of a human-meat fast food chain, must fight an army of terrorist created mutants",
    duration: "1h 15m",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    rating: 8.4,
    genre: "Biography/Drama/History",
    genres: ["biography", "drama", "history"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://drive.google.com/uc?export=view&id=10sf-VUSPfs4u3c1xwV3tavHztS7EVc32",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/uYPbbksJxIg",
    synopsis:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    duration: "3h",
  },
  {
    title: "Hell Camp: Teen Nightmare",
    year: 2023,
    rating: 6.0,
    genre: "Documentary",
    genres: ["documentary"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://drive.google.com/uc?export=view&id=1ZRQujj6JJ270Ay3RLFEdhDPV54P_VFsa",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/f6GuNxVvapM",
    synopsis:
      "Out-of-control teens across America were sent to a therapy camp in the harsh Utah desert. The conditions were brutal, but the staff were even worse.",
    duration: "1h 30m",
  },
  {
    title: "Moscow Mission",
    year: 2023,
    rating: 5.8,
    genre: "Action/Crime/Drama",
    genres: ["action", "crime", "drama"],
    country: "Cina",
    countrys: ["cina"],
    poster:
      "https://drive.google.com/uc?export=view&id=1AvHMM6CbaYnyGki6geWoDa6ecEzel83z",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/BgJObRkCupE",
    synopsis:
      "Tough Chinese detectives go on a mission to Moscow to hunt down ruthless robbers who have been plaguing the trans-Siberian railway with violence and chaos.",
    duration: "2h 8m",
  },
  {
    title: "Hard Days",
    year: 2023,
    rating: 6.0,
    genre: "Crime/Drama/Thriller",
    genres: ["crime", "drama", "thriller"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://drive.google.com/uc?export=view&id=10__0v8NSSBX74y2lJSwWvkaZM0WTEOC4",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/VwPZ8wCl4Ro",
    synopsis:
      "Detective Yuji Kudo drives his car to see his mother, who is hospitalized with a serious health condition. Yuji then accidentally hits a man with his car and that man dies. At the hospital, Yuji tries to cover up the death of the man.",
    duration: "1h 58m",
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
    const detailPageURL = `./movie-gpt/detail.html?title=${encodeURIComponent(
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
