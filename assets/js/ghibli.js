// Mock data for Ghibli and Marvel films
const ghibliFilms = [
  {
    title: "The Boy and the Heron",
    year: 2023,
    rating: 7.6,
    genre: "Animation/Adventure/Drama",
    genres: ["animation", "adventure", "drama"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/t5khm-VjEu4",
    synopsis:
      "A young boy named Mahito yearning for his mother ventures into a world shared by the living and the dead. There, death comes to an end, and life finds a new beginning. A semi-autobiographical fantasy from the mind of Hayao Miyazaki.",
    duration: "2h 4m",
  },
  {
    title: "Earwig and the Witch",
    year: 2020,
    rating: 4.8,
    genre: "Animation/Adventure/Family",
    genres: ["animation", "adventure", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTIwYmQyNjctNmJhYi00NDg0LWJlYzktNjE0OGE0OTIxNzAzXkEyXkFqcGdeQXVyMTI0NTE1Njg4._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/_PfhotgXEeQ",
    synopsis:
      "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
    duration: "1h 22m",
  },
  {
    title: "The Red Turtle",
    year: 2016,
    rating: 7.5,
    genre: "Animation/Drama/Family",
    genres: ["animation", "drama", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGZlYzFhNmYtMmJhMS00YTk5LWI3MDAtZmZhZTM0YzFlYjAxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/4lwrzNqEUOM",
    synopsis:
      "A man is shipwrecked on a deserted island and encounters a big red turtle, which changes his life.",
    duration: "1h 20m",
  },
  {
    title: "When Marnie Was There",
    year: 2014,
    rating: 7.6,
    genre: "Animation/Drama/Family",
    genres: ["animation", "drama", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTlmYTJmMWEtNDRhNy00ODc1LTg2OTMtMjk2ODJhNTA4YTE1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/jjmrxqcQdYg",
    synopsis:
      "Anna, a shy 12-year-old girl, is sent to spend time with her aunt and uncle who live in the countryside, where she meets Marnie. The two become best friends. But Anna gradually discovers that Marnie is not quite who she appears to be.",
    duration: "1h 43m",
  },
  {
    title: "The Tale of The Princess Kaguya",
    year: 2013,
    rating: 8.0,
    genre: "Animation/Drama/Family",
    genres: ["animation", "drama", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNThmMWMyMWMtOWRiNy00MGY0LTg1OTUtNjYzODg2MjdlZGU5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/W71mtorCZDw",
    synopsis:
      "Kaguya is a beautiful young woman coveted by five nobles. To try to avoid marrying a stranger she doesn't love, she sends her suitors on seemingly impossible tasks. But she will have to face her fate and punishment for her choices.",
    duration: "2h 17m",
  },
  {
    title: "The Wind Rises",
    year: 2013,
    rating: 7.7,
    genre: "Animation/Biography/Drama",
    genres: ["animation", "biography", "drama"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/PhHoCnRg1Yw",
    synopsis:
      "A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.",
    duration: "2h 6m",
  },
  {
    title: "From Up On Poppy Hill",
    year: 2011,
    rating: 7.4,
    genre: "Animation/Comedy/Drama",
    genres: ["animation", "comedy", "drama"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmFjMTYwODAtMTUzZi00NWUzLWIzMjUtYTNiZTE2MzNlMjNiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/9nzpk_Br6yo",
    synopsis:
      "A group of Yokohama teens look to save their school's clubhouse from the wrecking ball in preparations for the 1964 Tokyo Olympics.",
    duration: "1h 31m",
  },
  {
    title: "The Secret World Of Arrietty",
    year: 2010,
    rating: 7.6,
    genre: "Animation/Adventure/Drama",
    genres: ["animation", "adventure", "drama"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDY3ZGI0ZDAtMThlNy00MzAxLTg4YjAtNjkwYTkxNmQ4MjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/VlMe7PavaRQ",
    synopsis:
      "The Clock family are four-inch-tall people who live anonymously in another family's residence, borrowing simple items to make their home. Life changes for the Clocks when their teenage daughter Arrietty is discovered.",
    duration: "1h 34m",
  },
  {
    title: "Ponyo On The Cliff by The Sea",
    year: 2008,
    rating: 7.6,
    genre: "Animation/Adventure/Comedy",
    genres: ["animation", "adventure", "comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTc3YmM3N2QtODZkMC00ZDE5LThjMTQtYTljN2Y1YTYwYWJkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/CsR3KVgBzSM",
    synopsis:
      "A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.",
    duration: "1h 41m",
  },
  {
    title: "Tales From Earthsea",
    year: 2006,
    rating: 6.3,
    genre: "Animation/Adventure/Fantasy",
    genres: ["animation", "adventure", "fantasy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGFlN2FhYTktZGYzNi00MzllLWFlOTAtY2ExNjRjZjhkZWM2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/8hxYx3Jq3kI",
    synopsis:
      "In a mythical land, a man and a young boy investigate a series of unusual occurrences.",
    duration: "1h 55m",
  },
  {
    title: "Howl Moving Castle",
    year: 2004,
    rating: 8.2,
    genre: "Animation/Adventure/Family",
    genres: ["animation", "adventure", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/iwROgK94zcM",
    synopsis:
      "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
    duration: "1h 59m",
  },
  // Add more movie data as needed
  //https://drive.google.com/uc?export=view&id=1Hc_CfZoB8iC2SneMN0RrTOi-AIHpR3DH
];

export { ghibliFilms };
