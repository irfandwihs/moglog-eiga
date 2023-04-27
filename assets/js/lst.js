const movies = [
  {
    title: "Hunger",
    year: 2023,
    rating: 6.7,
    genre: "Drama/Thriller",
    poster: "https://iili.io/HvMvuHl.md.webp",
    href: "./page/Hunger.html",
  },
  {
    title: "Inside",
    year: 2023,
    rating: 5.6,
    genre: "Drama/Thriller",
    poster: "https://iili.io/H8IPLuI.md.webp",
    href: "./page/Inside.html",
  },
  {
    title: "Kill Boksoon",
    year: 2023,
    rating: 6.6,
    genre: "Action/Thriller",
    poster: "https://iili.io/H8IivHl.md.webp",
    href: "./page/Kill Boksoon.html",
  },
  {
    title: "Operation Fortune Ruse De Guerre",
    year: 2023,
    rating: 6.3,
    genre: "Action/Comedy/Thriller",
    poster: "https://iili.io/H8IQTAl.md.webp",
    href: "./page/Operation Fortune.html",
  },
  {
    title: "Supercell",
    year: 2023,
    rating: 4.3,
    genre: "Action/Adventure/Drama",
    poster: "https://iili.io/H8cpgSf.md.webp",
    href: "./page/Supercell.html",
  },
  {
    title: "Tetris",
    year: 2023,
    rating: 7.4,
    genre: "Biography/Drama/History",
    poster: "https://iili.io/H8lHEP9.md.webp",
    href: "./page/Tetris.html",
  },
  {
    title: "Unlocked",
    year: 2023,
    rating: 6.4,
    genre: "Crime/Drama/Mystery",
    poster: "https://iili.io/H8ld5hl.md.webp",
    href: "./page/Unlocked.html",
  },
  {
    title: "6/45",
    year: 2022,
    rating: 7.1,
    genre: "Comedy",
    poster: "https://iili.io/psuX9f.md.webp",
    href: "./page/6-45.html",
  },
  {
    title: "11th Hour Cleaning",
    year: 2022,
    rating: 3.6,
    genre: "Horror",
    poster: "https://iili.io/pDF5sn.md.webp",
    href: "./page/11th Hour Cleaning.html",
  },
  {
    title: "20th Century Girl",
    year: 2022,
    rating: 7.3,
    genre: "Drama/Romance",
    poster: "https://iili.io/pDYi5N.md.webp",
    href: "./page/20th Century Girl.html",
  },
  {
    title: "All Quiet on the Western Front",
    year: 2022,
    rating: 7.9,
    genre: "Action/Drama/War",
    poster: "https://iili.io/pDECjf.md.webp",
    href: "./page/All Quiet on the Western Front.html",
  },
  {
    title: "Among the Living",
    year: 2022,
    rating: 3.5,
    genre: "Drama/Horror",
    poster: "https://iili.io/pDMf9f.md.webp",
    href: "./page/Among the Living.html",
  },
  {
    title: "Apollo 10½: A Space Age Childhood",
    year: 2022,
    rating: 7.2,
    genre: "Animation/Adventure/Drama",
    poster: "https://iili.io/yj2FS4.md.webp",
    href: "./page/Apollo 10 A Space Age Childhood.html",
  },
  {
    title: "Bandit",
    year: 2022,
    rating: 6.3,
    genre: "Crime/Drama/Thriller",
    poster: "https://iili.io/H9zUbls.md.webp",
    href: "./page/Bandit.html",
  },
  {
    title: "Blind War",
    year: 2022,
    rating: 5.8,
    genre: "Action",
    poster: "https://iili.io/pDdUzX.md.webp",
    href: "./page/Blind War.html",
  },
  {
    title: "Bodies Bodies Bodies",
    year: 2022,
    rating: 6.3,
    genre: "Comedy/Horror/Thriller",
    poster: "https://iili.io/pDuIee.md.webp",
    href: "./page/Bodies Bodies Bodies.html",
  },
  {
    title: "Bubble",
    year: 2022,
    rating: 6.3,
    genre: "Animation/Action/Adventure",
    poster: "https://iili.io/yjoAg9.md.webp",
    href: "./page/Bubble.html",
  },
  {
    title: "Bullet Train",
    year: 2022,
    rating: 7.3,
    genre: "Action/Comedy/Thriller",
    poster: "https://iili.io/pD40Fa.md.webp",
    href: "./page/Bullet Train.html",
  },
  {
    title: "Chip 'n Dale: Rescue Rangers",
    year: 2022,
    rating: 7.0,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/H9AMszg.md.webp",
    href: "./page/Chip n Dale Rescue Rangers.html",
  },
  {
    title: "Cosmic Dawn",
    year: 2022,
    rating: 4.1,
    genre: "Sci-Fi/Thriller",
    poster: "https://iili.io/yc1G3X.md.webp",
    href: "./page/Cosmic Dawn.html",
  },
  {
    title: "Daeng Phra Khanong",
    year: 2022,
    rating: 5.8,
    genre: "Comedy/Horror/Thriller",
    poster: "https://iili.io/pDiH3g.md.webp",
    href: "./page/Daeng Phra Khanong.html",
  },
  {
    title: "Do Revenge",
    year: 2022,
    rating: 6.3,
    genre: "Comedy/Mystery/Thriller",
    poster: "https://iili.io/Hxozc7I.md.webp",
    href: "./page/Do Revenge.html",
  },
  {
    title: "Don't Worry Darling",
    year: 2022,
    rating: 6.2,
    genre: "Drama/Thriller",
    poster: "https://iili.io/HJwtCB4.md.webp",
    href: "./page/Dont Worry Darling.html",
  },
  {
    title: "Downfall: The Case Against Boeing",
    year: 2022,
    rating: 7.4,
    genre: "Documentary",
    poster: "https://iili.io/pDI6wG.md.webp",
    href: "./page/Downfall - The Case Against Boeing.html",
  },
  {
    title: "Drifting Home",
    year: 2022,
    rating: 6.2,
    genre: "Animation/Adventure/Drama",
    poster: "https://iili.io/pDUZSR.md.webp",
    href: "./page/Drifting Home.html",
  },
  {
    title: "Emergency Declaration",
    year: 2022,
    rating: 7.0,
    genre: "Action/Drama/Thriller",
    poster: "https://iili.io/pbKefe.md.webp",
    href: "./page/Emergency Declaration.html",
  },
  {
    title: "Emily the Criminal",
    year: 2022,
    rating: 6.7,
    genre: "Crime/Drama/Thriller",
    poster: "https://iili.io/pbTf2I.md.webp",
    href: "./page/Emily the Criminal.html",
  },
  {
    title: "Enola Holmes 2",
    year: 2022,
    rating: 6.8,
    genre: "Action/Adventure/Crime",
    poster: "https://iili.io/pbEi9j.md.webp",
    href: "./page/Enola Holmes 2.html",
  },
  {
    title: "Everything Everywhere All at Once",
    year: 2022,
    rating: 6.4,
    genre: "Action/Adventure/Comedy",
    poster: "https://iili.io/pD8ulR.md.webp",
    href: "./page/Everything Everywhere All at Once.html",
  },
  {
    title: "Fall",
    year: 2022,
    rating: 6.4,
    genre: "Thriller",
    poster: "https://iili.io/pb9nYN.md.webp",
    href: "./page/Fall.html",
  },
  {
    title: "Fast & Feel Love",
    year: 2022,
    rating: 6.9,
    genre: "Action/Comedy/Drama",
    poster: "https://iili.io/pbUtkl.md.webp",
    href: "./page/Fast - Feel Love.html",
  },
  {
    title: "Feathers",
    year: 2022,
    rating: 6.4,
    genre: "Comedy/Drama",
    poster: "https://iili.io/pbrXKg.md.webp",
    href: "./page/Feathers.html",
  },
  {
    title: "Fireheart",
    year: 2022,
    rating: 6.2,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/yjAXdN.md.webp",
    href: "./page/Fireheart.html",
  },
  {
    title: "Fresh",
    year: 2022,
    rating: 6.7,
    genre: "Comedy/Horror/Thriller",
    poster: "https://iili.io/VKDa6X.md.webp",
    href: "./page/Fresh.html",
  },
  {
    title: "Gara-Gara Warisan",
    year: 2022,
    rating: 7.3,
    genre: "Comedy/Drama",
    poster: "https://iili.io/HCDqg3l.md.webp",
    href: "./page/Gara Gara Warisan.html",
  },
  {
    title: "Ghislaine Maxwell: Filthy Rich",
    year: 2022,
    rating: 6.0,
    genre: "Crime/Documentary",
    poster: "https://iili.io/HfdE40Q.md.webp",
    href: "./page/Ghislaine Maxwell Filthy Rich.html",
  },
  {
    title: "Gold",
    year: 2022,
    rating: 5.4,
    genre: "Action/Adventure/Thriller",
    poster: "https://iili.io/yXHVKQ.md.webp",
    href: "./page/Gold.html",
  },
  {
    title: "Good Night Oppy",
    year: 2022,
    rating: 7.7,
    genre: "Documentary",
    poster: "https://iili.io/HCPvnqJ.md.webp",
    href: "./page/Good Night Oppy.html",
  },
  {
    title: "Hunt",
    year: 2022,
    rating: 6.9,
    genre: "Action/Drama/Mystery",
    poster: "https://iili.io/HCDo1AN.md.webp",
    href: "./page/Hunt.html",
  },
  {
    title: "I Am Vanessa Guillen",
    year: 2022,
    rating: 6.2,
    genre: "Crime/Documentary",
    poster: "https://iili.io/HC6p2SI.md.webp",
    href: "./page/I Am Vannesa.html",
  },
  {
    title: "Incantation",
    year: 2022,
    rating: 6.2,
    genre: "Horror/Mystery",
    poster: "https://iili.io/pbZKve.md.webp",
    href: "./page/Incantation.html",
  },
  {
    title: "In Our Prime",
    year: 2022,
    rating: 6.7,
    genre: "Drama",
    poster: "https://iili.io/HxkWkk7.md.webp",
    href: "./page/In Our Prime.html",
  },
  {
    title: "Jaifu Story",
    year: 2022,
    rating: 6.8,
    genre: "Comedy/Romance",
    poster: "https://iili.io/HCth6bI.md.webp",
    href: "./page/Jaifu Story.html",
  },
  {
    title: "Jackass Forever",
    year: 2022,
    rating: 6.9,
    genre: "Action/Comedy/Reality-TV",
    poster: "https://iili.io/yWpVKN.md.webp",
    href: "./page/Jackass Forever.html",
  },
  {
    title: "Jurassic World: Dominion",
    year: 2022,
    rating: 5.7,
    genre: "Action/Adventure/Sci-Fi",
    poster: "https://iili.io/pDtGjf.md.webp",
    href: "./page/Jurassic World Dominion.html",
  },
  {
    title: "Killer Design",
    year: 2022,
    rating: 4.7,
    genre: "Thriller",
    poster: "https://iili.io/HoIoCBt.md.webp",
    href: "./page/Killer Design.html",
  },
  {
    title: "KKN di Desa Penari",
    year: 2022,
    rating: 6.0,
    genre: "Horror/Mystery",
    poster: "https://iili.io/pb8Blt.md.webp",
    href: "./page/KKN di Desa Penari.html",
  },
  {
    title: "Life Is Beautiful",
    year: 2022,
    rating: 6.7,
    genre: "Drama/Musical/Romance",
    poster: "https://iili.io/HYSDCtS.md.webp",
    href: "./page/Life Is Beautiful.html",
  },
  {
    title: "Lightyear",
    year: 2022,
    rating: 6.0,
    genre: "Animation/Action/Adventure",
    poster: "https://iili.io/yXJkk7.md.webp",
    href: "./page/Lightyear.html",
  },
  {
    title: "Lou",
    year: 2022,
    rating: 6.1,
    genre: "Action/Crime/Drama",
    poster: "https://iili.io/pmKnEX.md.webp",
    href: "./page/Lou.html",
  },
  {
    title: "Luck",
    year: 2022,
    rating: 6.4,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/yjKFUJ.md.webp",
    href: "./page/Luck.html",
  },
  {
    title: "Mencuri Raden Saleh",
    year: 2022,
    rating: 7.7,
    genre: "Action/Crime/Drama",
    poster: "https://iili.io/HYa7172.md.webp",
    href: "./page/Mencuri Raden Saleh.html",
  },
  {
    title: "Minions: The Rise of Gru",
    year: 2022,
    rating: 6.6,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/yjf7rg.md.webp",
    href: "./page/Minions The Rise of Gru.html",
  },
  {
    title: "Moonfall",
    year: 2022,
    rating: 5.1,
    genre: "Action/Adventure/Sci-Fi",
    poster: "https://iili.io/ycEnAG.md.webp",
    href: "./page/Moonfall.html",
  },
  {
    title: "Ngeri Ngeri Sedap",
    year: 2022,
    rating: 8.1,
    genre: "Comedy/Drama",
    poster: "https://iili.io/pmT0xa.md.webp",
    href: "./page/Ngeri Ngeri Sedap.html",
  },
  {
    title: "No Exit",
    year: 2022,
    rating: 6.1,
    genre: "Drama/Mystery/Thriller",
    poster: "https://iili.io/ycNoNt.md.webp",
    href: "./page/No Exit.html",
  },
  {
    title: "Noktah Merah Perkawinan",
    year: 2022,
    rating: 8.2,
    genre: "Drama",
    poster: "https://iili.io/HYau36Q.md.webp",
    href: "./page/Noktah Merah Perkawinan.html",
  },
  {
    title: "Nope",
    year: 2022,
    rating: 6.9,
    genre: "Horror/Mystery/Sci-Fi",
    poster: "https://iili.io/pmlj5v.md.webp",
    href: "./page/Nope.html",
  },
  {
    title: "Old People",
    year: 2022,
    rating: 5.0,
    genre: "Horror",
    poster: "https://iili.io/pbOzJl.md.webp",
    href: "./page/Old People.html",
  },
  {
    title: "Orphan First Kill",
    year: 2022,
    rating: 7.1,
    genre: "Crime/Drama/Horror",
    poster: "https://iili.io/ycXV87.md.webp",
    href: "./page/Orphan First Kill.html",
  },
  {
    title: "Our Father",
    year: 2022,
    rating: 6.6,
    genre: "Crime/Documentary",
    poster: "https://iili.io/pmH2kB.md.webp",
    href: "./page/Our Father.html",
  },
  {
    title: "Paws of Fury: The Legend of Hank",
    year: 2022,
    rating: 5.7,
    genre: "Animation/Action/Comedy",
    poster: "https://iili.io/yjRpMG.md.webp",
    href: "./page/Paws of Fury The Legend of Hank.html",
  },
  {
    title: "Pearl",
    year: 2022,
    rating: 7.0,
    genre: "Horror",
    poster: "https://iili.io/HHHriSp.md.webp",
    href: "./page/Pearl.html",
  },
  {
    title: "Piggy",
    year: 2022,
    rating: 6.2,
    genre: "Drama/Horror/Thriller",
    poster: "https://iili.io/pLFisj.md.webp",
    href: "./page/Piggy.html",
  },
  {
    title: "Pinocchio",
    year: 2022,
    rating: 5.1,
    genre: "Adventure/Comedy/Drama",
    poster: "https://iili.io/pLAsuj.md.webp",
    href: "./page/Pinocchio.html",
  },
  {
    title: "Project Wolf Hunting",
    year: 2022,
    rating: 6.2,
    genre: "Action/Crime/Sci-Fi",
    poster: "https://iili.io/HCDGfaV.md.webp",
    href: "./page/Project Wolf Hunting.html",
  },
  {
    title: "Samaritan",
    year: 2022,
    rating: 5.7,
    genre: "Action/Drama/Fantasy",
    poster: "https://iili.io/pDW03F.md.webp",
    href: "./page/Samaritan.html",
  },
  {
    title: "Seoul Vibe",
    year: 2022,
    rating: 5.5,
    genre: "Action/Comedy/Crime",
    poster: "https://iili.io/HHJPMQ9.md.webp",
    href: "./page/Seoul Vibe.html",
  },
  {
    title: "Shut In",
    year: 2022,
    rating: 5.9,
    genre: "Thriller",
    poster: "https://iili.io/pbmGxs.md.webp",
    href: "./page/Shut In.html",
  },
  {
    title: "Smile",
    year: 2022,
    rating: 6.7,
    genre: "Horror/Mystery/Thriller",
    poster: "https://iili.io/H9zvZiu.md.webp",
    href: "./page/Smile.html",
  },
  {
    title: "Sniper The White Raven",
    year: 2022,
    rating: 6.2,
    genre: "Drama/War",
    poster: "https://iili.io/pLHCmj.md.webp",
    href: "./page/Sniper The White Raven.html",
  },
  {
    title: "Sonic The Hedgehog 2",
    year: 2022,
    rating: 6.5,
    genre: "Action/Adventure/Comedy",
    poster: "https://iili.io/yX9x4V.md.webp",
    href: "./page/Sonic The Hedgehog 2.html",
  },
  {
    title: "Take Your Pills: Xanax",
    year: 2022,
    rating: 6.0,
    genre: "Documentary",
    poster: "https://iili.io/HodeCil.md.webp",
    href: "./page/Take Your Pill.html",
  },
  {
    title: "The Adam Project",
    year: 2022,
    rating: 6.7,
    genre: "Action/Adventure/Comedy",
    poster: "https://iili.io/ycG0dX.md.webp",
    href: "./page/The Adam Project.html",
  },
  {
    title: "The Bad Guys",
    year: 2022,
    rating: 6.8,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/yjTtwu.md.webp",
    href: "./page/The Bad Guys.html",
  },
  {
    title: "The Good Nurse",
    year: 2022,
    rating: 6.9,
    genre: "Biography/Crime/Drama",
    poster: "https://iili.io/H95PR6v.md.webp",
    href: "./page/The Good Nurse.html",
  },
  {
    title: "The Gray Man",
    year: 2022,
    rating: 6.4,
    genre: "Action/Thriller",
    poster: "https://iili.io/pDxOOj.md.webp",
    href: "./page/The Gray Man.html",
  },
  {
    title: "The Greatest Beer Run Ever",
    year: 2022,
    rating: 6.8,
    genre: "Adventure/Comedy/Drama",
    poster: "https://iili.io/pDZwmJ.md.webp",
    href: "./page/The Greatest Beer Run Ever.html",
  },
  {
    title: "The Immaculate Room",
    year: 2022,
    rating: 5.1,
    genre: "Drama/Thriller",
    poster: "https://iili.io/pstWNV.md.webp",
    href: "./page/The Immaculate Room.html",
  },
  {
    title: "The Last Dolphin King",
    year: 2022,
    rating: 5.6,
    genre: "Documentary",
    poster: "https://iili.io/HfdXwNI.md.webp",
    href: "./page/The Last Dolphin King.html",
  },
  {
    title: "The Lost Lotteries",
    year: 2022,
    rating: 5.4,
    genre: "Comedy/Crime",
    poster: "https://iili.io/HCDWw9p.md.webp",
    href: "./page/The Lost Lotteries.html",
  },
  {
    title: "The Menu",
    year: 2022,
    rating: 7.3,
    genre: "Comedy/Horror/Thriller",
    poster: "https://iili.io/HagjmQe.md.webp",
    href: "./page/The Menu.html",
  },
  {
    title: "The Outfit",
    year: 2022,
    rating: 7.1,
    genre: "Crime/Drama/Mystery",
    poster: "https://iili.io/yWjvGS.md.webp",
    href: "./page/The Outfit.html",
  },
  {
    title: "The Roundup",
    year: 2022,
    rating: 7.1,
    genre: "Action/Crime/Thriller",
    poster: "https://iili.io/pDfRFs.md.webp",
    href: "./page/The Roundup.html",
  },
  {
    title: "The Sea Beast",
    year: 2022,
    rating: 7.1,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/yjBbrF.md.webp",
    href: "./page/The Sea Beast.html",
  },
  {
    title: "The Tinder Swindler",
    year: 2022,
    rating: 7.1,
    genre: "Crime/Documentary",
    poster: "https://iili.io/HC6me87.md.webp",
    href: "./page/The Tinder Swindler.html",
  },
  {
    title: "The Violence Action",
    year: 2022,
    rating: 4.5,
    genre: "Action/Drama",
    poster: "https://iili.io/HCiqRLB.md.webp",
    href: "./page/The Violence Action.html",
  },
  {
    title: "Top Gun Maverick",
    year: 2022,
    rating: 8.4,
    genre: "Action/Drama",
    poster: "https://iili.io/yWp9tf.md.webp",
    href: "./page/Top Gun Maverick.html",
  },
  {
    title: "Troll",
    year: 2022,
    rating: 5.8,
    genre: "Action/Adventure/Drama",
    poster: "https://iili.io/HoClzmb.md.webp",
    href: "./page/Troll.html",
  },
  {
    title: "Turning Red",
    year: 2022,
    rating: 7.0,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/yX2ZWg.md.webp",
    href: "./page/Turning Red.html",
  },
  {
    title: "Uncharted",
    year: 2022,
    rating: 6.3,
    genre: "Action/Adventure",
    poster: "https://iili.io/yXHJoJ.md.webp",
    href: "./page/Uncharted.html",
  },
  {
    title: "Watcher",
    year: 2022,
    rating: 6.3,
    genre: "Drama/Horror/Thriller",
    poster: "https://iili.io/Hxu0LXa.md.webp",
    href: "./page/Watcher.html",
  },
  {
    title: "X",
    year: 2022,
    rating: 6.6,
    genre: "Horror/Mystery/Thriller",
    poster: "https://iili.io/HHHrPlR.md.webp",
    href: "./page/X.html",
  },
  {
    title: "22 vs Earth",
    year: 2021,
    rating: 6.4,
    genre: "Animation/Adventure/Short",
    poster: "https://iili.io/5yOJcJ.md.webp",
    href: "./page/22 vs Earth.html",
  },
  {
    title: "400 Bullets",
    year: 2021,
    rating: 4.4,
    genre: "Action",
    poster: "https://iili.io/5OGP7R.md.webp",
    href: "./page/400 Bullets.html",
  },
  {
    title: "A Classic Horror Story",
    year: 2021,
    rating: 5.7,
    genre: "Drama/Horror/Mystery",
    poster: "https://iili.io/5OpJTJ.md.webp",
    href: "./page/A Classic Horror Story.html",
  },
  {
    title: "Antlers",
    year: 2021,
    rating: 5.9,
    genre: "Drama/Horror/Mystery",
    poster: "https://iili.io/HC6miFV.md.webp",
    href: "./page/Antlers.html",
  },
  {
    title: "Asakusa Kid",
    year: 2021,
    rating: 7.1,
    genre: "Biography/Drama",
    poster: "https://iili.io/YyyDRn.md.webp",
    href: "./page/Asakusa Kid.html",
  },
  {
    title: "Awake",
    year: 2021,
    rating: 4.9,
    genre: "Action/Adventure/Drama",
    poster: "https://iili.io/5e9vBR.md.webp",
    href: "./page/Awake.html",
  },
  {
    title: "Back to the Outback",
    year: 2021,
    rating: 6.5,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/7esNJ2.md.webp",
    href: "./page/Back to the Outback.html",
  },
  {
    title: "Blood Red Sky",
    year: 2021,
    rating: 6.1,
    genre: "Action/Adventure/Drama",
    poster: "https://iili.io/5bjg7S.md.webp",
    href: "./page/Blood Red Sky.html",
  },
  {
    title: "Blue Miracle",
    year: 2021,
    rating: 6.6,
    genre: "Adventure/Biography/Drama",
    poster: "https://iili.io/5e9iIs.md.webp",
    href: "./page/Blue Miracle.html",
  },
  {
    title: "Broadcast Signal Intrusion",
    year: 2021,
    rating: 5.4,
    genre: "Crime/Drama/Horror",
    poster: "https://iili.io/YU9kXV.md.webp",
    href: "./page/Broadcast Signal Intrusion.html",
  },
  {
    title: "Bull",
    year: 2021,
    rating: 6.4,
    genre: "Thriller",
    poster: "https://iili.io/pDr0p2.md.webp",
    href: "./page/Bull.html",
  },
  {
    title: "Candyman",
    year: 2021,
    rating: 5.9,
    genre: "Horror/Thriller",
    poster: "https://iili.io/5eHJTu.md.webp",
    href: "./page/Candyman.html",
  },
  {
    title: "Catman",
    year: 2021,
    rating: 7.7,
    genre: "Comedy/Fantasy/Romance",
    poster: "https://iili.io/5eJkUN.md.webp",
    href: "./page/Catman.html",
  },
  {
    title: "Censor",
    year: 2021,
    rating: 6.0,
    genre: "Horror/Mystery",
    poster: "https://iili.io/Y6VgTl.md.webp",
    href: "./page/Censor.html",
  },
  {
    title: "Chaos Walking",
    year: 2021,
    rating: 5.7,
    genre: "Action/Adventure/Fantasy",
    poster: "https://iili.io/5eJgbn.md.webp",
    href: "./page/Chaos Walking.html",
  },
  {
    title: "Ciao Alberto",
    year: 2021,
    rating: 6.9,
    genre: "Animation/Short/Comedy",
    poster: "https://iili.io/5eJ4xs.md.webp",
    href: "./page/Ciao Alberto.html",
  },
  {
    title: "Clifford the Big Red Dog",
    year: 2021,
    rating: 5.9,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/a9Hzls.md.webp",
    href: "./page/Clifford the Big Red Dog.html",
  },
  {
    title: "Cruella",
    year: 2021,
    rating: 7.3,
    genre: "Adventure/Comedy/Crime",
    poster: "https://iili.io/YfUS2V.md.webp",
    href: "./page/Cruella.html",
  },
  {
    title: "Diary of a Wimpy Kid",
    year: 2021,
    rating: 5.1,
    genre: "Animation/Comedy/Drama",
    poster: "https://iili.io/5yDCWF.md.webp",
    href: "./page/Diary of a Wimpy Kid.html",
  },
  {
    title: "Digging to Death",
    year: 2021,
    rating: 4.6,
    genre: "Horror/Thriller",
    poster: "https://iili.io/a9Hr4p.md.webp",
    href: "./page/Digging to Death.html",
  },
  {
    title: "Don't Breathe 2",
    year: 2021,
    rating: 6.0,
    genre: "Action/Crime/Horror",
    poster: "https://iili.io/5eJ6WG.md.webp",
    href: "./page/Don't Breathe 2.html",
  },
  {
    title: "Don't Look Up",
    year: 2021,
    rating: 7.2,
    genre: "Comedy/Drama/Sci-Fi",
    poster: "https://iili.io/Y6x5WN.md.webp",
    href: "./page/Don't Look Up.html",
  },
  {
    title: "Dune",
    year: 2021,
    rating: 8.0,
    genre: "Action/Adventure/Drama",
    poster: "https://iili.io/5eJPsf.md.webp",
    href: "./page/Dune.html",
  },
  {
    title: "Encanto",
    year: 2021,
    rating: 7.2,
    genre: "Animation/Comedy/Family",
    poster: "https://iili.io/cbcoDF.md.webp",
    href: "./page/Encanto.html",
  },
  {
    title: "Escape Room: Tournament of Champions",
    year: 2021,
    rating: 5.7,
    genre: "Action/Adventure/Horror",
    poster: "https://iili.io/5eJtJS.md.webp",
    href: "./page/Escape Room Tournament of Champions.html",
  },
  {
    title: "Extinct",
    year: 2021,
    rating: 5.4,
    genre: "Animation/Adventure/Comedy",
    poster: "https://iili.io/5eJD57.md.webp",
    href: "./page/Extinct.html",
  },
  {
    title: "F9: The Fast Saga",
    year: 2021,
    rating: 5.2,
    genre: "Action/Crime/Thriller",
    poster: "https://iili.io/5eJbe9.md.webp",
    href: "./page/F9 The Fast Saga.html",
  },
  {
    title: "Forget Me Not",
    year: 2015,
    rating: 6.6,
    genre: "Drama/Romance",
    poster: "https://iili.io/Hx9RW5Q.md.webp",
    href: "./page/Forget Me Not.html",
  },
  {
    title: "Blue Valentine",
    year: 2010,
    rating: 7.3,
    genre: "Drama/Romance",
    poster: "https://iili.io/HYrPMxt.md.webp",
    href: "./page/Blue Valentine.html",
  },
  {
    title: "Revolutionary Road",
    year: 2008,
    rating: 7.3,
    genre: "Drama/Romance",
    poster: "https://iili.io/HYr6fvp.md.webp",
    href: "./page/Revolutionary Road.html",
  },
  // Add more movies as desired
];
/*<h3>${movie.title} (${movie.year})</h3>
        <p> ${movie.rating}</p>
        <p> ${movie.genre}</p>
         <img src="${movie.poster}" alt="${movie.title} poster"> */