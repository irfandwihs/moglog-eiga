const films = [
  {
    title: "The Creator",
    year: 2023,
    rating: 6.8,
    genre: "Action/Adventure/Drama",
    genres: ["action", "adventure", "drama"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://drive.google.com/uc?export=view&id=1pJ0LvACQUYexmqJxr8FyU5PhJSC53i0_",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/ex3C1-5Dhb8",
    synopsis:
      "Against the backdrop of a war between humans and robots with artificial intelligence, a former soldier finds the secret weapon, a robot in the form of a young child.",
    duration: "2h 15m",
  },
  {
    title: "Sewu Dino",
    year: 2023,
    rating: 6.0,
    genre: "Horror",
    genres: ["horror"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster:
      "https://drive.google.com/uc?export=view&id=1KQtLfqqU0FfWnDCYI_t2OBlflirHPz8y",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/UtJ8n490SwY",
    synopsis:
      "Sri is tasked to do a cleansing ritual for Dela Atmojo, an unconscious girl who is suffering from 1000 days-hex. The terror begins when her friend neglects to finish the ritual. Failing until the 1000th day will result in their demise.",
    duration: "2h 1m",
  },
  {
    title: "Pet Sematary: Bloodlines",
    year: 2023,
    rating: 4.6,
    genre: "Fantasy/Horror",
    genres: ["fantasy", "horror"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://drive.google.com/uc?export=view&id=1NpmIsr-UDLSdtXhfsBP0TYhj08hgvNNh",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/1IgQpRyfwbE",
    synopsis:
      "In 1969 a young Jud Crandall and his childhood friends band together to confront an ancient evil that has gripped their hometown of Ludlow.",
    duration: "1h 27m",
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
    title: "My Precious",
    year: 2023,
    rating: 6.1,
    genre: "Comedy/Drama/Romance",
    genres: ["comedy", "drama", "romance"],
    country: "Thailand",
    countrys: ["thailand"],
    poster:
      "https://drive.google.com/uc?export=view&id=1gFQKrlxPAp5EQO2Tn4hNdtb_oYcI1Jrk",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/Z2nH8nUqhCk",
    synopsis:
      "Tong and his group of friends are in love with the same girl, Lin. Tong is forced to be supervised by another student due to his bad behavior. And his school life changes learning, playing and finding the first love.",
    duration: "2h",
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
