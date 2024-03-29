const moviess = [
  {
    title: "Brave Story",
    year: 2006,
    rating: 6.5,
    genre: "Animation/Adventure/Mystery",
    genres: ["animation", "adventure", "mystery"],
    country: "Japan",
    countrys: ["japan"],
    poster: "https://iili.io/Hy94EKB.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/fJ_xa11-ip8",
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
    poster: "https://iili.io/Hy96K0B.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/AoXlu1Sly0A",
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
    poster: "https://iili.io/Hy9PKQf.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/SBoxMWZ_Pk8",
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
    poster: "https://iili.io/Hy9PjGR.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/fp24rFE7NmE",
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
    poster: "https://iili.io/Hy9sZhu.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/iQXmlf3Sefg",
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
    poster: "https://iili.io/Hy9i5AX.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/FuC8H8eXZFU",
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
    poster: "https://iili.io/Hy9iSUB.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/8VGbntXd6Fw",
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
    poster: "https://iili.io/Hy9QOVs.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/rKHL5PyAPzs",
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
    poster: "https://iili.io/Hy9r7Bp.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/39uVv3mFsWU",
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
    poster: "https://iili.io/Hy9gkzv.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/Qvc-SsW0Q-0",
    synopsis:
      "A classmate from Ushijima's middle school days, Takemoto, shows up. He was a kind man, but now is jobless and without a home. Adrift and unable to borrow money from Ushijima, Takemoto heads for Seiai Home where he can stay while doing work.",
    duration: "2h 10m",
  },
  {
    title: "Asahinagu",
    year: 2017,
    rating: 6.4,
    genre: "Comedy/Family/Sport",
    genres: ["comedy", "family", "sport"],
    country: "Japan",
    countrys: ["japan"],
    poster: "https://iili.io/Hy3T8PI.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/LdGxDlONz_o",
    synopsis:
      "When it comes time to choose an extracurricular club three high school freshmen pick the naginata one or rather it picks them. Asahi and her friends consistently train and improve including a bout under the supervision of a monk at the monastery.",
    duration: "1h 45m",
  },
  {
    title: "Generasi Kocak: 90an vs Komika",
    year: 2017,
    rating: 7.2,
    genre: "Comedy",
    genres: ["comedy"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster: "https://iili.io/HpeP1Ve.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/3pBbk2mRqVM",
    synopsis:
      "Allan (Afif Xavi) and Dellon (Adi Bing Slamet) are two figures who have different postures and different ages but inseparable companions. Both are members of gangsters led by Si Naga 90s (Kadir) and Naga Komika (Anyun Lisp). One day when Allan is frantic when hefinds out that his father (Jaja Miharja) goes to Jakarta, assisted by a taxi driver (Mandra) His father wants to see Allan’s 24-hour clinic. Allan has claimed to be a doctor and had his own clinic. Allan tells Dellon to gather their friends to pretend to be patients. Allan and Dellon pretending to be doctors and their girlfriends, Susi (Arafat Rianti) and Mia (Resti Wulandari) as nuns.",
    duration: "1h 20m",
  },
  {
    title: "Mata Batin",
    year: 2017,
    rating: 5.1,
    genre: "Drama/Fantasy/Horror",
    genres: ["drama", "fantasy", "horror"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster: "https://iili.io/Hpes4tI.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/d173ahbvzUA",
    synopsis:
      "When her little sister claims she sees the dead, Alia consults a psychic, who opens her own eyes to the vengeful ghosts haunting their childhood home.",
    duration: "1h 47m",
  },
  {
    title: "Posesif",
    year: 2017,
    rating: 7.3,
    genre: "Comedy/Drama/Romance",
    genres: ["comedy", "drama", "romance"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster: "https://iili.io/Hy3zux2.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/G4Ws5uLQuRw",
    synopsis:
      "A platform diving athlete in her final year of high school when she meets a transfer student. The initial romance blossoms, but something about him is unfolding one by one.",
    duration: "1h 42m",
  },
  {
    title: "Sekigahara",
    year: 2017,
    rating: 6.3,
    genre: "Drama/History/War",
    genres: ["drama", "history", "war"],
    country: "Japan",
    countrys: ["japan"],
    poster: "https://iili.io/HpesZcG.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/KU4URaoQZ54",
    synopsis:
      "A depiction of Japan's 17th Century Battle of Sekigahara where the Army of the East takes up arms against the Army of the West.",
    duration: "2h 30m",
  },
  {
    title: "The Battleship Island",
    year: 2017,
    rating: 7.1,
    genre: "Action/Drama/History",
    genres: ["action", "drama", "history"],
    country: "Korea",
    countrys: ["korea"],
    poster: "https://iili.io/HpeLnDB.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/ZgOff3LJhWg",
    synopsis:
      "During the Japanese colonial era, roughly 400 Korean people, who were forced onto Battleship Island ('Hashima Island') to mine for coal, attempt to a dramatic escape.",
    duration: "2h 12m",
  },
  {
    title: "The Doll 2",
    year: 2017,
    rating: 5.2,
    genre: "Horror/Thriller",
    genres: ["horror", "thriler"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster: "https://iili.io/HpeLJV9.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/vtL8rut2544",
    synopsis:
      "A mother uses her deceased daughter's doll as a medium to communicate with her, but the consequences are chilling.",
    duration: "1h 57m",
  },
  {
    title: "The Vanishing of Sidney Hall",
    year: 2017,
    rating: 6.8,
    genre: "Drama/Mystery/Romance",
    genres: ["drama", "mystery", "romance"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HpeLjR4.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/vx5sqKmQdqk",
    synopsis:
      "Sidney Hall finds accidental success and unexpected love at an early age, then disappears without a trace.",
    duration: "2h 10m",
  },
  {
    title: "Alpha",
    year: 2018,
    rating: 6.6,
    genre: "Action/Adventure/Drama",
    genres: ["action", "adventure", "drama"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/Hy9p2cb.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/uIxnTi4GmCo",
    synopsis:
      "In the prehistoric past, a young man struggles to return home after being separated from his tribe during a buffalo hunt. He finds a similarly lost wolf companion and starts a friendship that would change humanity.",
    duration: "1h 36m",
  },
  {
    title: "Annihilation",
    year: 2018,
    rating: 6.8,
    genre: "Adventure/Drama/Horror",
    genres: ["adventure", "drama", "horror"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyK3r92.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/89OP78l9oF0",
    synopsis:
      "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
    duration: "1h 55m",
  },
  {
    title: "A-X-L",
    year: 2018,
    rating: 5.3,
    genre: "Action/Adventure/Drama",
    genres: ["action", "adventure", "drama"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/Hy9y5ru.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/--8nr2kt4uk",
    synopsis:
      "A.X.L. is a top-secret, robotic dog who develops a special friendship with Miles and will go to any length to protect his new companion.",
    duration: "1h 38m",
  },
  {
    title: "Dachra",
    year: 2018,
    rating: 6.2,
    genre: "Horror",
    genres: ["horror"],
    country: "Tunisia",
    countrys: ["tunisia"],
    poster: "https://iili.io/HyH9sKF.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/a5_WTF7KtYQ",
    synopsis:
      "An investigation into witchcraft leads a trio of journalism students to a mysterious town marked by sinister rituals. Inspired by true events.",
    duration: "1h 54m",
  },
  {
    title: "Dying to Survive",
    year: 2018,
    rating: 7.8,
    genre: "Comedy/Drama",
    genres: ["comedy", "drama"],
    country: "Cina",
    countrys: ["cina"],
    poster: "https://iili.io/HyH2xiN.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/k1_b4kFOFy8",
    synopsis:
      "A story on how a small drug store owner became the exclusive selling agent of a cheap Indian generic drug against Chronic Granulocytic Leukemia in China.",
    duration: "1h 57m",
  },
  {
    title: "Greta",
    year: 2018,
    rating: 6.0,
    genre: "Drama/Mystery/Thriller",
    genres: ["drama", "mystery", "thriller"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyH32Ll.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/WAEoJkL_8zU",
    synopsis:
      "A young woman befriends a lonely widow who's harboring a dark and deadly agenda toward her.",
    duration: "1h 38m",
  },
  {
    title: "Suzzanna: Bernapas dalam kubur",
    year: 2018,
    rating: 5.5,
    genre: "Drama/Fantasy/Horror",
    genres: ["drama", "fantasy", "horror"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster: "https://iili.io/Hy2p3OJ.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/4m5yC1BPNpw",
    synopsis:
      "After a pregnant woman is murdered, her spirit seeks revenge against her increasingly terrified killers, who are determined to finish her off for good.",
    duration: "2h 5m",
  },
  {
    title: "T-34",
    year: 2018,
    rating: 6.8,
    genre: "Action/War",
    genres: ["action", "war"],
    country: "Rusia",
    countrys: ["rusia"],
    poster: "https://iili.io/Hy2yG4I.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/jPPglWcJF1U",
    synopsis:
      "SS Panzer Division uses T-34 manned by Soviet POWs as a target in their training field, but the prisoners plot a daring maneuver.",
    duration: "2h 19m",
  },
  {
    title: "The House That Jack Built",
    year: 2018,
    rating: 6.8,
    genre: "Crime/Drama/Horror",
    genres: ["crime", "drama", "horror"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/Hy3nQOQ.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/eA0pI_k-Dmo",
    synopsis:
      "The story follows Jack, a highly intelligent serial killer, over the course of twelve years, and depicts the murders that really develop his inner madman.",
    duration: "2h 32m",
  },
  {
    title: "2040",
    year: 2019,
    rating: 7.1,
    genre: "Documentary",
    genres: ["documentary"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyK03sn.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/p-rTQ443akE",
    synopsis:
      "Practical solutions to environmental concerns are addressed with the hope that the filmmaker's daughter, 21 years old in the year 2040, will face a hopeful future.",
    duration: "1h 32m",
  },
  {
    title: "Ad Astra",
    year: 2019,
    rating: 6.5,
    genre: "Action/Drama/Mystery",
    genres: ["action", "drama", "mystery"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/Hy3RoZv.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/P6AaSMfXHbA",
    synopsis:
      "Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe.",
    duration: "2h 3m",
  },
  {
    title: "Angel Has Fallen",
    year: 2019,
    rating: 6.4,
    genre: "Action/Thriller",
    genres: ["action", "thriller"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/Hy3trrX.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/l4AQchYSxwc",
    synopsis:
      "Mike Banning is framed for the attempted assassination of the President and must evade his own agency and the FBI as he tries to uncover the real threat.",
    duration: "2h 1m",
  },
  {
    title: "Crawl",
    year: 2019,
    rating: 6.1,
    genre: "Action/Adventure/Horror",
    genres: ["action", "adventure", "horror"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/Hy3m5gt.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/H6MLJG0RdDE",
    synopsis:
      "A young woman, while attempting to save her father during a category 5 hurricane, finds herself trapped in a flooding house and must fight for her life against alligators.",
    duration: "1h 27m",
  },
  {
    title: "Dora and the Lost City of Gold",
    year: 2019,
    rating: 6.1,
    genre: "Action/Adventure/Comedy",
    genres: ["action", "adventure", "comedy"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyK20dl.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/gUTtJjV852c",
    synopsis:
      "Teenage explorer Dora leads her friends on an adventure to save her parents and solve the mystery behind a lost city of gold.",
    duration: "1h 42m",
  },
  {
    title: "Hot Gimmick: Girl Meets Boy",
    year: 2019,
    rating: 4.4,
    genre: "Drama",
    genres: ["drama"],
    country: "Japan",
    countrys: ["japan"],
    poster: "https://iili.io/HyKCtKF.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/1Hzbnwx0iJw",
    synopsis:
      "Hatsumi and her family live normal lives until she is used by Ryoki who begins to bully and intimidate her. Azusa is a friend in the area and also good looking. He has the hots for Hatsumi too.",
    duration: "1h 59m",
  },
  {
    title: "Ip Man 4: The Finale",
    year: 2019,
    rating: 7.0,
    genre: "Action/Biography/Drama",
    genres: ["action", "biography", "drama"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/Hy3p3TG.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/oCBGTCNJW2g",
    synopsis:
      "The Kung Fu master travels to the U.S. where his student has upset the local martial arts community by opening a Wing Chun school.",
    duration: "1h 47m",
  },
  {
    title: "Little Love Song",
    year: 2019,
    rating: 6.2,
    genre: "Drama/Music/Romance",
    genres: ["drama", "music", "romance"],
    country: "Japan",
    countrys: ["japan"],
    poster: "https://iili.io/Hy38W91.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/NWMlFj0PPtQ",
    synopsis:
      "Inspired by a hit song by Mongol800, there is a small town in Okinawa where the US occupation forces are stationed and have fenced off their base. A popular high school band is scouted by a Tokyo-based record company. The band is involved in a car accident, however, shattering many hopes. The band receives a demo tape from a girl who lives on the navy base. They are reinvigorated.",
    duration: "2h 3m",
  },
  {
    title: "Mata Batin 2",
    year: 2019,
    rating: 5.4,
    genre: "Drama/Fantasy/Horror",
    genres: ["drama", "fantasy", "horror"],
    country: "Indonesia",
    countrys: ["indonesia"],
    poster: "https://iili.io/Hy3uhfS.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/QqcyvQUnqoY",
    synopsis:
      "Alia is now working and living at an orphanage, where she meets a girl who also possesses inner eyes like her.",
    duration: "1h 56m",
  },
  {
    title: "Midway",
    year: 2019,
    rating: 6.7,
    genre: "Action/Drama/History",
    genres: ["action", "drama", "history"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyF9NkX.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/Z_7eN5iloyk",
    synopsis:
      "The story of the Battle of Midway, told by the leaders and the sailors who fought it.",
    duration: "2h 18m",
  },
  {
    title: "Once Upon a Time in Hollywood",
    year: 2019,
    rating: 7.6,
    genre: "Comedy/Drama",
    genres: ["comedy", "drama"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyFHQSI.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/ELeMaP8EPAA",
    synopsis:
      "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    duration: "2h 41m",
  },
  {
    title: "Polar",
    year: 2019,
    rating: 6.3,
    genre: "Action/Thriller",
    genres: ["action", "thriller"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyF24ou.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/oMHwRal-AR8",
    synopsis:
      "A retiring assassin suddenly finds himself on the receiving end of a hit, contracted by none other than his own employer seeking to cash in on the pensions of aging employees.",
    duration: "1h 58m",
  },
  {
    title: "The Vast of Night",
    year: 2019,
    rating: 6.7,
    genre: "Drama/Mystery/Sci-Fi",
    genres: ["drama", "mystery", "sci-fi"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyF3Yb9.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/ZEiwpCJqMM0",
    synopsis:
      "One night in New Mexico, in the late 1950s, a switchboard operator and radio DJ discover a strange audio frequency which could change the future forever.",
    duration: "1h 31m",
  },
  {
    title: "The Wandering Earth",
    year: 2019,
    rating: 5.9,
    genre: "Action/Adventure/Sci-Fi",
    genres: ["action", "adventure", "sci-fi"],
    country: "Cina",
    countrys: ["cina"],
    poster: "https://iili.io/HyF3t1f.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/0TDII5IkI3Y",
    synopsis:
      "As the sun is dying out, people all around the world build giant planet thrusters to move Earth out of its orbit and sail Earth to a new star system. Yet the 2500-year journey comes with unexpected dangers, and in order to save humanity, a group of young people in this age of a wandering Earth fight hard for the survival of humankind.",
    duration: "2h 5m",
  },
  {
    title: "Bloodshot",
    year: 2020,
    rating: 5.7,
    genre: "Action/Adventure/Sci-Fi",
    genres: ["action", "adventure", "sci-fi"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyK9cAX.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/vOUVVDWdXbo",
    synopsis: "Ray Garrison, a slain soldier, is re-animated with superpowers.",
    duration: "1h 49m",
  },
  {
    title: "Arlo the Alligator Boy",
    year: 2021,
    rating: 6.4,
    genre: "Animation/Adventure/Comedy",
    genres: ["animation", "adventure", "comedy"],
    country: "USA",
    countrys: ["usa"],
    poster: "https://iili.io/HyKNVUP.md.webp",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/DAGdOI-ORxM",
    synopsis:
      "A young humanoid alligator travels to the big city in hopes of reuniting with his estranged father, meeting a colorful cast of characters along the way.",
    duration: "1h 30m",
  },
  {
    title: "Anonymous",
    year: 2011,
    rating: 6.8,
    genre: "Drama/Thriller",
    genres: ["drama", "thriller"],
    country: "USA",
    countrys: ["usa"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxOTA5MTMxOV5BMl5BanBnXkFtZTcwNDI4MzU0NQ@@._V1_.jpg",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/uBmnkk0QW3Q",
    synopsis:
      "The theory that it was in fact Edward De Vere, Earl of Oxford, who penned Shakespeare's plays. Set against the backdrop of the succession of Queen Elizabeth I and the Essex rebellion against her.",
    duration: "2h 9m",
  },
  {
    title: "The King",
    year: 2019,
    rating: 7.3,
    genre: "Biography/Drama/History",
    genres: ["biography", "drama", "history"],
    country: "Inggris",
    countrys: ["inggris"],
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWZkNzNlMzMtMjM5ZS00MWYzLWFmMmUtMjE1ODM3NjBlODA5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    href: "./movie-gpt/detail.html",
    embed: "https://www.youtube.com/embed/svVykTznk9Q",
    synopsis:
      "Hal, wayward prince and heir to the English throne, is crowned King Henry V after his tyrannical father dies. Now the young king must navigate palace politics, the war his father left behind, and the emotional strings of his past life.",
    duration: "2h 20m",
  },

  // Add more movies as desired
];

// Export the movies array to be used in other files
export { moviess };
