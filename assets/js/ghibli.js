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
  {
    title: "The Cat Returns",
    year: 2004,
    rating: 7.1,
    genre: "Animation/Adventure/Comedy",
    genres: ["animation", "adventure", "comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BYThhZDdiMjItYzRkNy00OTE3LTk5ZDEtMzUwNzE1ZmJkMTYzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/Gp-H_YOcYTM",
    synopsis:
      "After helping a cat, a seventeen-year-old girl finds herselfinvoluntarily engaged to a cat Prince in a magical world where her only hope of freedom lies with a dapper cat statuette come to life.",
    duration: "1h 15m",
  },
  {
    title: "Spirited Away",
    year: 2001,
    rating: 8.6,
    genre: "Animation/Adventure/Family",
    genres: ["animation", "adventure", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/ByXuk9QqQkk",
    synopsis:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
    duration: "2h 5m",
  },
  {
    title: "My Neighbors the Yamadas",
    year: 1999,
    rating: 7.1,
    genre: "Animation/Comedy/Family",
    genres: ["animation", "comedy", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDBhYThkMWMtZTBlMi00NzMyLWE3YTktMjVjOWUwOTEyMjNlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/oJD0k7hWc6M",
    synopsis: "The life and misadventures of a family in contemporary Japan.",
    duration: "1h 44m",
  },
  {
    title: "Princess Mononoke",
    year: 1997,
    rating: 8.3,
    genre: "Animation/Action/Adventure",
    genres: ["animation", "action", "adventure"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/4OiMOHRDs14",
    synopsis:
      "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    duration: "2h 14m",
  },
  {
    title: "Whisper of the Heart",
    year: 1995,
    rating: 7.8,
    genre: "Animation/Drama/Family",
    genres: ["animation", "drama", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDg0MWNmNjktMGEwZC00ZDlmLWI1MTUtMDBmNjQzMWM2NjBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/0pVkiod6V0U",
    synopsis:
      "A love story between a girl who loves reading books, and a boy who has previously checked out all of the library books she chooses.",
    duration: "1h 51m",
  },
  {
    title: "Pom Poko",
    year: 1994,
    rating: 7.3,
    genre: "Animation/Comedy/Drama",
    genres: ["animation", "comedy", "drama"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjBkODU2MjEtMjRhZi00M2M2LTg4ZjgtMGM0NjFiZTdjMzZhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/_7cowIHjCD4",
    synopsis:
      "A community of magical shape-shifting raccoon dogs struggle to prevent their forest home from being destroyed by urban development.",
    duration: "1h 59m",
  },
  {
    title: "Ocean Waves",
    year: 1993,
    rating: 6.6,
    genre: "Animation/Drama/Romance",
    genres: ["animation", "drama", "romance"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDkzODhjMTktOTkwZS00MGQ3LTg4MGUtMDA5NWI2Y2ZiMzhjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/tfkHiHjrqa8",
    synopsis:
      "As a young man returns home after his first year away at college he recalls his senior year of high school and the iron-willed, big city girl that turned his world upside down.",
    duration: "1h 16m",
  },
  {
    title: "Porco Rosso",
    year: 1992,
    rating: 7.7,
    genre: "Animation/Adventure/Comedy",
    genres: ["animation", "adventure", "comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTZjMDc2N2UtZTdjZi00ODljLTgyZmEtNDljZDAwODY4NDVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/awEC-aLDzjs",
    synopsis:
      "In 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig.",
    duration: "1h 34m",
  },
  {
    title: "Only Yesterday",
    year: 1991,
    rating: 7.6,
    genre: "Animation/Drama/Romance",
    genres: ["animation", "drama", "romance"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTY5NjI2MjQxMl5BMl5BanBnXkFtZTgwMDA2MzM2NzE@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/OfkQlZArxw0",
    synopsis:
      "A twenty-seven-year-old office worker travels to the countryside while reminiscing about her childhood in Tokyo.",
    duration: "1h 59m",
  },
  {
    title: "Kiki's Delivery Service",
    year: 1989,
    rating: 7.8,
    genre: "Animation/Family/Fantasy",
    genres: ["animation", "family", "fantasy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTQ1ZTM1ZTgtN2Q2Ny00YjFkLTliNjEtN2I1ZmY5ZTY1OTEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/4bG17OYs-GA",
    synopsis:
      "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    duration: "1h 43m",
  },
  {
    title: "My Neighbor Totoro",
    year: 1988,
    rating: 8.1,
    genre: "Animation/Comedy/Family",
    genres: ["animation", "comedy", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/92a7Hj0ijLs",
    synopsis:
      "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
    duration: "1h 26m",
  },
  {
    title: "Grave of the Fireflies",
    year: 1988,
    rating: 8.5,
    genre: "Animation/Drama/War",
    genres: ["animation", "drama", "war"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/4vPeTSRd580",
    synopsis:
      "A young boy and his little sister struggle to survive in Japan during World War II.",
    duration: "1h 29m",
  },
  {
    title: "Castle in the Sky",
    year: 1986,
    rating: 8.0,
    genre: "Animation/Adventure/Family",
    genres: ["animation", "adventure", "family"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDFhZmY2NTgtMzljYy00MTlhLTgyMjItNTEwZWJkYThhYzkyXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/8ykEy-yPBFc",
    synopsis:
      "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
    duration: "2h 5m",
  },
  {
    title: "Nausicaä of the Valley of the Wind",
    year: 1984,
    rating: 8.0,
    genre: "Animation/Adventure/Sci-Fi",
    genres: ["animation", "adventure", "sci-fi"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./detailghibli.html",
    embed: "https://www.youtube.com/embed/6zhLBe319KE",
    synopsis:
      "Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
    duration: "1h 57m",
  },
  // Add more movie data as needed
  //https://drive.google.com/uc?export=view&id=1Hc_CfZoB8iC2SneMN0RrTOi-AIHpR3DH
];

export { ghibliFilms };
