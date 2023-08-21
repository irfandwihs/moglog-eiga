const moviess = [
  {
    title: "Brave Story",
    year: 2006,
    rating: 6.5,
    genre: "Animation/Adventure/Mystery",
    genres: ["animation", "adventure", "mystery"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTY0MmZiNTMtZTY3ZS00MzdjLWIwMzgtMTAxZmJiMDJlMTZlXkEyXkFqcGdeQXVyNDAzMzgyMTI@._V1_.jpg",
    href: "./movie-gpt/page/Brave Story.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "When eleven-year-old Wataru is told he can change his destiny by entering a magic gateway into another world, he jumps at the chance. But on his quest to find the Tower of Fortune and be granted any wish, he must conjure up all his bravery to battle a world of demons, his own friends and ultimately himself.",
    duration: "1h 52m",
  },
  {
    title: "Ushijima the Loan Shark",
    year: 2012,
    rating: 6.0,
    genre: "Crime/Drama",
    genres: ["crime", "drama"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTI0YTI0MjAtZDZlZi00NzQ3LWIxODMtM2IxMmI5NzcwMDA2XkEyXkFqcGdeQXVyNjgwNTk4Mg@@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "The lives of some people who fall into the clutches of a brutal loan shark.",
    duration: "2h 11m",
  },
  {
    title: "Killer Toon",
    year: 2013,
    rating: 6.2,
    genre: "Horror/Thriller",
    genres: ["horror", "thriller"],
    country: "Korea",
    countrys: ["korea"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNzEzNTc1OV5BMl5BanBnXkFtZTgwNzMzNjcyMjE@._V1_.jpg",
    href: "./movie-gpt/page/Killer Toon.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "Popular horror web-comic artist Ji Yoon finds life imitating her own work when her publisher turns up dead in a way, precisely mirrors the images in her latest comic.",
    duration: "1h 44m",
  },
  {
    title: "Ushijima the Loan Shark 2",
    year: 2014,
    rating: 6.6,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWE5Mzc2ZTQtMjA5OC00ZDgzLWJlM2MtNDIzMmMzODg2MDBlXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark 2.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "Ushijima runs Kaukau Fiance, a black market lending agency which scourges its clients with interest rates as high as 50% for 10 days. Ushijima chases down his debtors, who normally come from the bottom of society, with ruthless efficacy.",
    duration: "2h 13m",
  },
  {
    title: "The Witch",
    year: 2015,
    rating: 7.0,
    genre: "Drama/Fantasy/Horror",
    genres: ["drama", "fantasy", "horror"],
    country: "Inggris",
    countrys: ["inggris"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_.jpg",
    href: "./movie-gpt/page/The Witch.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "A family in 1630s New England is torn apart by the forces of witchcraft, black magic and possession.",
    duration: "1h 32m",
  },
  {
    title: "My Stupid Boss",
    year: 2016,
    rating: 7.1,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzk1YzRkNmMtMTEzMC00MzhiLThhMWQtNzE2YzgzYWVmYzZhXkEyXkFqcGdeQXVyNjIwMTgzMTg@._V1_.jpg",
    href: "./movie-gpt/page/My Stupid Boss.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "Diana (Bunga Citra Lestari) lives in Kuala Lumpur following her husband who works there. Diana then applied to work at a company owned by Bossman. Bossman happened to be her husband's college friend while in America.",
    duration: "1h 48m",
  },
  {
    title: "The Doll",
    year: 2016,
    rating: 5.2,
    genre: "Horror/Thriller",
    genres: ["horror", "thriller"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzU4MzM1ZjItNmE2Yi00NTRjLWFhNjMtZjdlZGRmZjA4NjAxXkEyXkFqcGdeQXVyMzYzOTYxNzM@._V1_.jpg",
    href: "./movie-gpt/page/The Doll.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "Eerie things begin to happen after a man gives his wife a doll, unaware it once belonged to a girl who was murdered. The first of the 'Doll' films.",
    duration: "1h 47m",
  },
  {
    title: "Underworld: Blood Wars",
    year: 2016,
    rating: 5.7,
    genre: "Action/Adventure/Fantasy",
    genres: ["action", "adventure", "fantasy"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjI5Njk0NTIyNV5BMl5BanBnXkFtZTgwNjU4MjY5MDI@._V1_.jpg",
    href: "./movie-gpt/page/Underworld Blood Wars.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "Vampire death dealer Selene (Kate Beckinsale) fights to end the eternal war between the Lycan clan and the Vampire faction that betrayed her.",
    duration: "1h 31m",
  },
  {
    title: "Ushijima the Loan Shark 3",
    year: 2016,
    rating: 6.4,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGVmN2JlMTctMWM0Yi00MGE0LTk2OWEtZTM5MTdlZGIzNDAwXkEyXkFqcGdeQXVyNjgwNTk4Mg@@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark 3.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "Sawamura , a contract part-timer dragged into a multi-million yen internet business, and Kamo, an office worker who lavished money on a beautiful club hostess, arrive at Cowcow Finance, the office of black-market lender Ushijima .",
    duration: "2h 11m",
  },
  {
    title: "Ushijima the Loan Shark the Final",
    year: 2016,
    rating: 6.4,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTIwODQxMWMtNjRmNi00NDI5LWE0ZTQtNmEyODdjYWQ5NjFiXkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark the Final.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "A classmate from Ushijima's middle school days, Takemoto, shows up. He was a kind man, but now is jobless and without a home. Adrift and unable to borrow money from Ushijima, Takemoto heads for Seiai Home where he can stay while doing work.",
    duration: "2h 10m",
  },
  {
    title: "Ushijima the Loan Shark the Final",
    year: 2016,
    rating: 6.4,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTIwODQxMWMtNjRmNi00NDI5LWE0ZTQtNmEyODdjYWQ5NjFiXkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark the Final.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "A classmate from Ushijima's middle school days, Takemoto, shows up. He was a kind man, but now is jobless and without a home. Adrift and unable to borrow money from Ushijima, Takemoto heads for Seiai Home where he can stay while doing work.",
    duration: "2h 10m",
  },{
    title: "Ushijima the Loan Shark the Final",
    year: 2016,
    rating: 6.4,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTIwODQxMWMtNjRmNi00NDI5LWE0ZTQtNmEyODdjYWQ5NjFiXkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark the Final.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "A classmate from Ushijima's middle school days, Takemoto, shows up. He was a kind man, but now is jobless and without a home. Adrift and unable to borrow money from Ushijima, Takemoto heads for Seiai Home where he can stay while doing work.",
    duration: "2h 10m",
  },{
    title: "Ushijima the Loan Shark the Final",
    year: 2016,
    rating: 6.4,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTIwODQxMWMtNjRmNi00NDI5LWE0ZTQtNmEyODdjYWQ5NjFiXkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark the Final.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "A classmate from Ushijima's middle school days, Takemoto, shows up. He was a kind man, but now is jobless and without a home. Adrift and unable to borrow money from Ushijima, Takemoto heads for Seiai Home where he can stay while doing work.",
    duration: "2h 10m",
  },{
    title: "Ushijima the Loan Shark the Final",
    year: 2016,
    rating: 6.4,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTIwODQxMWMtNjRmNi00NDI5LWE0ZTQtNmEyODdjYWQ5NjFiXkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark the Final.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "A classmate from Ushijima's middle school days, Takemoto, shows up. He was a kind man, but now is jobless and without a home. Adrift and unable to borrow money from Ushijima, Takemoto heads for Seiai Home where he can stay while doing work.",
    duration: "2h 10m",
  },{
    title: "Ushijima the Loan Shark the Final",
    year: 2016,
    rating: 6.4,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTIwODQxMWMtNjRmNi00NDI5LWE0ZTQtNmEyODdjYWQ5NjFiXkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark the Final.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "A classmate from Ushijima's middle school days, Takemoto, shows up. He was a kind man, but now is jobless and without a home. Adrift and unable to borrow money from Ushijima, Takemoto heads for Seiai Home where he can stay while doing work.",
    duration: "2h 10m",
  },{
    title: "Ushijima the Loan Shark the Final",
    year: 2016,
    rating: 6.4,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Japan",
    countrys: ["japan"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTIwODQxMWMtNjRmNi00NDI5LWE0ZTQtNmEyODdjYWQ5NjFiXkEyXkFqcGdeQXVyNTM0MDc1ODE@._V1_.jpg",
    href: "./movie-gpt/page/Ushijima the Loan Shark the Final.html",
    embed: "https://www.youtube.com/embed/7VGcHgVnOw4",
    synopsis:
      "A classmate from Ushijima's middle school days, Takemoto, shows up. He was a kind man, but now is jobless and without a home. Adrift and unable to borrow money from Ushijima, Takemoto heads for Seiai Home where he can stay while doing work.",
    duration: "2h 10m",
  },
  // Add more movies as desired
];

// Export the movies array to be used in other files
export { moviess };
