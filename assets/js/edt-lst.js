const movies = [
    {
      Title: 'Hunger',
      Year:  '2023',
      Rate: 6.7,
      Type: 'Drama/Thriller',
      Poster: 'https://iili.io/HvMvuHl.md.webp',
      id:1,
      Trailer: 'https://www.youtu.be/h61PbLOmyY0',
      
    },
    {
      Title: 'Inside',
      Year:  '2023',
      Rate: 5.6,
      Type: 'Drama/Thriller',
      Poster: 'https://iili.io/H8IPLuI.md.webp',
      id:2,
      Trailer: 'https://www.youtu.be/DjODCllZj4w',
      
    },
    {
      Title: 'Kill Boksoon',
      Year:  '2023',
      Rate: 6.6,
      Type: 'Action/Thriller',
      Poster: 'https://iili.io/H8IivHl.md.webp',
      id:3,
      Trailer: 'https://www.youtu.be/70e5RjgkHjU',
      
    },
    {
      Title: 'Operation Fortune: Ruse de guerre',
      Year:  '2023',
      Rate: 6.3,
      Type: 'Action/Comedy/Thriller',
      Poster: 'https://iili.io/H8IQTAl.md.webp',
      id:4,
      Trailer: 'https://www.youtu.be/WdZ-BWWQcWQ',
      
    },
    {
      Title: 'Soulmate',
      Year:  '2023',
      Rate: 7.6,
      Type: 'Drama/Romance',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDY3YTZkN2MtMTFhYS00ODE5LTk1MjgtOTkwNTg2ZjBhMmJhXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_FMjpg_UX1000_.jpg',
        id:5,
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      
    },
    {
      Title: 'Supercell',
      year:  '2023',
      Rate: 4.3,
      Type: 'Action/Adventure/Drama',
      Poster: 'https://iili.io/H8cpgSf.md.webp',
      id:6,
      Trailer: 'https://www.youtu.be/6509bINfvQg',
      
    },
    {
      Title: 'Tetris',
      year:  '2023',
      Rate: 7.4,
      Type: 'Biography/Drama/History',
      Poster: 'https://iili.io/H8lHEP9.md.webp',
      id:7,
      Trailer: 'https://www.youtu.be/-BLM1naCfME',
      
    },
    {
      Title: 'Unlocked',
      year:  '2023',
      Rate: 6.4,
      Type: 'Crime/Drama/Mystery',
      Poster: 'https://iili.io/H8ld5hl.md.webp',
      id:8,
      Trailer: 'https://www.youtu.be/WcfbeGoNUqo',
      
    },
    {
      Title: '6/45',
      year: 2022,
      Rate: 7.1,
      Type: 'Comedy',
      Poster: 'https://iili.io/psuX9f.md.webp',
      
      Trailer: 'https://www.youtu.be/L6vay7MfajQ',
      
    },
    {
      Title: '11th Hour Cleaning',
      year: 2022,
      Rate: 3.6,
      Type: 'Horror',
      Poster: 'https://iili.io/pDF5sn.md.webp',
      
      Trailer: 'https://www.youtu.be/QVF-QzS4SpY',
      
    },
    {
      Title: '20th Century Girl',
      year: 2022,
      Rate: 7.3,
      Type: 'Drama/Romance',
      Poster: 'https://iili.io/pDYi5N.md.webp',
      
      Trailer: 'https://www.youtu.be/KFS4_qevE7M',
      
    },
    {
      Title: 'All Quiet on the Western Front',
      year: 2022,
      Rate: 7.8,
      Type: 'Action/Drama/War',
      Poster: 'https://iili.io/pDECjf.md.webp',
      
      Trailer: 'https://www.youtu.be/hf8EYbVxtCY',
      
    },
    {
      Title: 'Among the Living',
      year: 2022,
      Rate: 3.5,
      Type: 'Drama/Horror',
      Poster: 'https://iili.io/pDMf9f.md.webp',
      
      Trailer: 'https://www.youtu.be/BMjwPPJpx78',
      
    },
    {
      Title: 'Apollo 10½: A Space Age Childhood',
      year: 2022,
      Rate: 7.2,
      Type: 'Animation/Adventure/Drama',
      Poster: 'https://iili.io/yj2FS4.md.webp',
      
      Trailer: 'https://www.youtu.be/Dzuz5s_Qk-A',
      
    },
    {
      Title: 'Bandit',
      year: 2022,
      Rate: 6.4,
      Type: 'Crime/Drama/Thriller',
      Poster: 'https://iili.io/H9zUbls.md.webp',
      
      Trailer: 'https://www.youtu.be/sSjYZXVXiaM',
      
    },
    {
      Title: 'Blind War',
      year: 2022,
      Rate: 5.8,
      Type: 'Action',
      Poster: 'https://iili.io/pDdUzX.md.webp',
      
      Trailer: 'https://www.youtu.be/EQ1ZQNISHCk',
      
    },
    {
      Title: 'Bodies Bodies Bodies',
      year: 2022,
      Rate: 6.2,
      Type: 'Comedy/Horror/Thriller',
      Poster: 'https://iili.io/pDuIee.md.webp',
      
      Trailer: 'https://www.youtu.be/cTzGKsZjBOY',
      
    },
    {
      Title: 'Bones and All',
      year: 2022,
      Rate: 6.8,
      Type: 'Drama/Horror/Romance',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDY0ZjUyYTItZmFlYS00MjI5LTljNmItODliMDkwMmY4ZTVkXkEyXkFqcGdeQXVyMTU0ODA5OTE2._V1_.jpg',
       page/Bone 
      Trailer: 'https://www.youtu.be/0Nu7Z9AxGNg',
      synopsis:
        'Maren, a young woman, learns how to survive on the margins of society.',
      duration: '2h 11m',
    },
    {
      Title: 'Bubble',
      year: 2022,
      Rate: 6.3,
      Type: 'Animation/Action/Adventure',
      Poster: 'https://iili.io/yjoAg9.md.webp',
       page/Bubble 
      Trailer: 'https://www.youtu.be/8pbWblLkHHk',
      synopsis:
        'After bubbles that broke the laws of gravity rained down upon the world. Cut off from the outside world, Tokyo has become a playground for a group of young people who have lost their families.',
      duration: '1h 40m',
    },
    {
      Title: 'Bullet Train',
      year: 2022,
      Rate: 7.3,
      Type: 'Action/Comedy/Thriller',
      Poster: 'https://iili.io/pD40Fa.md.webp',
       page/Bullet Train 
      Trailer: 'https://www.youtu.be/0IOsk2Vlc4o',
      synopsis:
        'Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.',
      duration: '2h 7m',
    },
    {
      Title: 'Chip 'n Dale: Rescue Rangers',
      Year: 2022,
      Rate: 7.0,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/H9AMszg.md.webp',
       page/Chip n Dale Rescue Rangers 
      Trailer: 'https://www.youtu.be/F4Z0GHWHe60',
      synopsis:
        'Thirty Years after their popular television show ended, chipmunks Chip and Dale live very different lives. When a cast member from the original series mysteriously disappears, the pair must reunite to save their friend.',
      duration: '1h 37m',
    },
    {
      Title: 'Cosmic Dawn',
      Year: 2022,
      Rate: 4.1,
      Type: 'Sci-Fi/Thriller',
      Poster: 'https://iili.io/yc1G3X.md.webp',
       page/Cosmic Dawn 
      Trailer: 'https://www.youtu.be/fgHlAYFGCY0',
      synopsis:
        'After witnessing the alien abduction of her mother as a child, Aurora joins the UFO cult The Cosmic Dawn. Now moved on from the cult, Aurora is forced to confront her past and pursue the ultimate truth about The Cosmic Dawn.',
      duration: '1h 38m',
    },
    {
      Title: 'Daeng Phra Khanong',
      Year: 2022,
      Rate: 5.2,
      Type: 'Comedy/Horror/Thriller',
      Poster: 'https://iili.io/pDiH3g.md.webp',
       page/Daeng Phra Khanong 
      Trailer: 'https://www.youtu.be/IQHGEq4pC-E',
      synopsis:
        'The legend of Mae Nak Prakanong, about a female spirit in the era of King Rama V, is well known but not much is known about her unborn son Dang. He is the spirit of a child who wants nothing more than to befriend humans.',
      duration: '1h 36m',
    },
    {
      Title: 'Do Revenge',
      Year: 2022,
      Rate: 6.3,
      Type: 'Comedy',
      Poster: 'https://iili.io/Hxozc7I.md.webp',
       page/Do Revenge 
      Trailer: 'https://www.youtu.be/rK-JQU_bShc',
      synopsis: 'Drea and Eleanor agree to go after one another's bullies.',
      duration: '1h 58m',
    },
    {
      Title: 'Don't Worry Darling',
      Year: 2022,
      Rate: 6.2,
      Type: 'Drama/Thriller',
      Poster: 'https://iili.io/HJwtCB4.md.webp',
       page/Dont Worry Darling 
      Trailer: 'https://www.youtu.be/FgmnKsED-jU',
      synopsis:
        'A 1950s housewife living with her husband in a utopian experimental community begins to worry that his glamorous company could be hiding disturbing secrets.',
      duration: '2h 3m',
    },
    {
      Title: 'Downfall: The Case Against Boeing',
      Year: 2022,
      Rate: 7.4,
      Type: 'Documentary',
      Poster: 'https://iili.io/pDI6wG.md.webp',
       page/Downfall - The Case Against Boeing 
      Trailer: 'https://www.youtu.be/vt-IJkUbAxY',
      synopsis:
        'Examining the months since the tragedies, which caused global panic in March 2019 after two new aircrafts crashed within five months, killing 346 people.',
      duration: '1h 29m',
    },
    {
      Title: 'Drifting Home',
      Year: 2022,
      Rate: 6.3,
      Type: 'Animation/Adventure/Drama',
      Poster: 'https://iili.io/pDUZSR.md.webp',
       page/Drifting Home 
      Trailer: 'https://www.youtu.be/BSE2KGU5png',
      synopsis:
        'Follows two childhood friends who drift into a mysterious sea with an entire housing complex.',
      duration: '1h 59m',
    },
    {
      Title: 'Emergency Declaration',
      Year: 2022,
      Rate: 6.8,
      Type: 'Action/Drama/Thriller',
      Poster: 'https://iili.io/pbKefe.md.webp',
       page/Emergency Declaration 
      Trailer: 'https://www.youtu.be/askalDtGepk',
      synopsis:
        'fter a terror incident occurs mid-flight, a passenger jet declares an emergency.',
      duration: '2h 21m',
    },
    {
      Title: 'Emily the Criminal',
      Year: 2022,
      Rate: 6.7,
      Type: 'Crime/Drama/Thriller',
      Poster: 'https://iili.io/pbTf2I.md.webp',
       page/Emily the Criminal 
      Trailer: 'https://www.youtu.be/Xzf1YCEkLDI',
      synopsis:
        'Down on her luck and saddled with debt, Emily gets involved in a credit card scam that pulls her into the criminal underworld of Los Angeles, ultimately leading to deadly consequences.',
      duration: '1h 37m',
    },
    {
      Title: 'Enola Holmes 2',
      Year: 2022,
      Rate: 6.7,
      Type: 'Action/Adventure/Crime',
      Poster: 'https://iili.io/pbEi9j.md.webp',
       page/Enola Holmes 2 
      Trailer: 'https://www.youtu.be/KKXNmYoPkx0',
      synopsis:
        'Fresh off the triumph of solving her first case, Enola Holmes (Millie Bobby Brown) follows in the footsteps of her famous brother, Sherlock (Henry Cavill), and opens her own agency - only to find that life as a female detective-for-hire isn't as easy as it seems. Resigned to accepting the cold realities of adulthood, she is about to close shop when a penniless matchstick girl offers Enola her first official job: to find her missing sister. But this case proves to be far more puzzling than expected, as Enola is thrown into a dangerous new world - from London's sinister factories and colorful music halls, to the highest echelons of society and 221B Baker Street itself. As the sparks of a deadly conspiracy ignite, Enola must call upon the help of friends - and Sherlock himself - to unravel her mystery. The game, it seems, has found its feet again.',
      duration: '2h 9m',
    },
    {
      Title: 'Everything Everywhere All at Once',
      Year: 2022,
      Rate: 7.9,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/pD8ulR.md.webp',
       page/Everything Everywhere All at Once 
      Trailer: 'https://www.youtu.be/wxN1T1uxQ2g',
      synopsis:
        'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
      duration: '2h 19m',
    },
    {
      Title: 'Fall',
      Year: 2022,
      Rate: 6.4,
      Type: 'Thriller',
      Poster: 'https://iili.io/pb9nYN.md.webp',
       page/Fall 
      Trailer: 'https://www.youtu.be/iSspRSGc4Dk',
      synopsis:
        'Best friends Becky and Hunter find themselves at the top of a 2,000-foot radio tower.',
      duration: '1h 47m',
    },
    {
      Title: 'Fast & Feel Love',
      Year: 2022,
      Rate: 6.8,
      Type: 'Action/Comedy/Drama',
      Poster: 'https://iili.io/pbUtkl.md.webp',
       page/Fast - Feel Love 
      Trailer: 'https://www.youtu.be/pg_Ij-3YySM',
      synopsis:
        'When a world champion of sport stacking is dumped by his long-time girlfriend, he has to learn basic adulting skills in order to live alone and take care of himself.',
      duration: '2h 12m',
    },
    {
      Title: 'Fireheart',
      Year: 2022,
      Rate: 6.2,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/yjAXdN.md.webp',
       page/Fireheart 
      Trailer: 'https://www.youtu.be/ZUy_ygJSIag',
      synopsis:
        'Sixteen-Year-old Georgia Nolan dreams of being the world's first-ever female firefighter. When a mysterious arsonist starts burning down Broadway, New York's firemen begin vanishing.',
      duration: '1h 32m',
    },
    {
      Title: 'Fresh',
      Year: 2022,
      Rate: 6.7,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/VKDa6X.md.webp',
       page/Fresh 
      Trailer: 'https://www.youtu.be/wKk5VAK1GZQ',
      synopsis:
        'FRESH follows Noa (Daisy Edgar-Jones), who meets the alluring Steve (Sebastian Stan) at a grocery store and - given her frustration with dating apps - takes a chance and gives him her number.',
      duration: '1h 54m',
    },
    {
      Title: 'Gara-Gara Warisan',
      Year: 2022,
      Rate: 7.4,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/HCDqg3l.md.webp',
       page/Gara Gara Warisan 
      Trailer: 'https://www.youtu.be/bgrJaKR9w-A',
      synopsis:
        'A dying widower gathers his kids to decide who will receive his inheritance. Past secrets are revealed until one is chosen to inherit everything.',
      duration: '1h 57m',
    },
    {
      Title: 'Ghislaine Maxwell: Filthy Rich',
      Year: 2022,
      Rate: 6.0,
      Type: 'Crime/Documentary',
      Poster: 'https://iili.io/HfdE40Q.md.webp',
       page/Ghislaine Maxwell Filthy Rich 
      Trailer: 'https://www.youtu.be/q4-TlylMKh4',
      synopsis:
        'From filmmakers of Jeffrey Epstein: Filthy Rich, this film goes beyond the headlines of the Ghislaine Maxwell case to tell the story of Epstein's mystery accomplice, illuminating how her class and privilege concealed her predatory nature.',
      duration: '1h 41m',
    },
    {
      Title: 'Gold',
      Year: 2022,
      Rate: 5.4,
      Type: 'Action/Adventure/Thriller',
      Poster: 'https://iili.io/yXHVKQ.md.webp',
       page/Gold 
      Trailer: 'https://www.youtu.be/1HqBaI-FV7Y',
      synopsis:
        'In the not too distant future, a drifter travelling through the desert discovers the largest gold nugget ever found. He must guard it from thieves amid harsh conditions and wild dogs while waiting for his partner to return.',
      duration: '1h 37m',
    },
    {
      Title: 'Good Night Oppy',
      Year: 2022,
      Rate: 7.7,
      Type: 'Documentary',
      Poster: 'https://iili.io/HCPvnqJ.md.webp',
       page/Good Night Oppy 
      Trailer: 'https://www.youtu.be/W4t58Yruhds',
      synopsis:
        'The film follows Opportunity, the Mars Exploration Rover affectionately dubbed Oppy by her creators and scientists at NASA. Oppy was originally expected to live for only 90 days but she ultimately explored Mars for nearly 15 Years.',
      duration: '1h 45m',
    },
    {
      Title: 'Hunt',
      Year: 2022,
      Rate: 6.7,
      Type: 'Action/Drama/Mystery',
      Poster: 'https://iili.io/HCDo1AN.md.webp',
       page/Hunt 
      Trailer: 'https://www.youtu.be/1RLlCg-LFKI',
      synopsis:
        'The International Unit and The Domestic Unit of the Korean Spy Agency are tasked with the mission of uncovering a North Korean Spy known as Donglim who is deeply Trailerded within their agency.',
      duration: '2h 11m',
    },
    {
      Title: 'I Am Vanessa Guillen',
      Year: 2022,
      Rate: 6.2,
      Type: 'Crime/Documentary',
      Poster: 'https://iili.io/HC6p2SI.md.webp',
       page/I Am Vannesa 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Incantation',
      Year: 2022,
      Rate: 6.2,
      Type: 'Horror/Mystery',
      Poster: 'https://iili.io/pbZKve.md.webp',
       page/Incantation 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'In Our Prime',
      Year: 2022,
      Rate: 6.7,
      Type: 'Drama',
      Poster: 'https://iili.io/HxkWkk7.md.webp',
       page/In Our Prime 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Jaifu Story',
      Year: 2022,
      Rate: 6.8,
      Type: 'Comedy/Romance',
      Poster: 'https://iili.io/HCth6bI.md.webp',
       page/Jaifu Story 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Jackass Forever',
      Year: 2022,
      Rate: 6.9,
      Type: 'Action/Comedy/Reality-TV',
      Poster: 'https://iili.io/yWpVKN.md.webp',
       page/Jackass Forever 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Jurassic World: Dominion',
      Year: '2022',
      Rate: 5.7,
      Type: 'Action/Adventure/Sci-Fi',
      Poster: 'https://iili.io/pDtGjf.md.webp',
       
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      
      
    },
    {
      Title: 'Killer Design',
      Year: 2022,
      Rate: 4.7,
      Type: 'Thriller',
      Poster: 'https://iili.io/HoIoCBt.md.webp',
       
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      
    },
    {
      Title: 'KKN di Desa Penari',
      Year: 2022,
      Rate: 6.0,
      Type: 'Horror/Mystery/Thriller',
      Poster: 'https://iili.io/pb8Blt.md.webp',
       page/KKN di Desa Penari 
      Trailer: 'https://www.youtu.be/jtDRXPTZT-M',
      synopsis:
        'Six students who had to carry out KKN in a remote village are warned not to cross the boundary of the forbidden gate that leading to the mysterious place that may related to the figure of a beautiful dancer who began to disturb them.',
      duration: '2h 10m',
    },
    {
      Title: 'Lamborghini: The Man Behind the Legend',
      Year: 2022,
      Rate: 5.4,
      Type: 'Biography/Drama/Sport',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjBkMTRkMWQtNzAwYS00MmE2LWI5YzktNDU5OGY2NjIzMzNjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg',
       page/Lamborghini 
      Trailer: 'https://www.youtu.be/kzqwRxorvKE',
      synopsis:
        'The life story of Ferruccio Lamborghini, the founder of Lamborghini.',
      duration: '1h 37m',
    },
    {
      Title: 'Life Is Beautiful',
      Year: 2022,
      Rate: 6.7,
      Type: 'Drama/Musical/Romance',
      Poster: 'https://iili.io/HYSDCtS.md.webp',
       page/Life Is Beautiful 
      Trailer: 'https://www.youtu.be/RedCOgGbnCU',
      synopsis:
        'A musical drama about a wife who asks her husband to help her find her childhood sweetheart as a birthday present. Though reluctant, her husband's only choice is to set out on this journey with her.',
      duration: '2h 2m',
    },
    {
      Title: 'LightYear',
      Year: 2022,
      Rate: 6.1,
      Type: 'Animation/Action/Adventure',
      Poster: 'https://iili.io/yXJkk7.md.webp',
       page/LightYear 
      Trailer: 'https://www.youtu.be/BwZs3H_UN3k',
      synopsis:
        'While spending Years attempting to return home, marooned Space Ranger Buzz LightYear encounters an army of ruthless robots commanded by Zurg who are attempting to steal his fuel source.',
      duration: '1h 45m',
    },
    {
      Title: 'Lou',
      Year: 2022,
      Rate: 6.1,
      Type: 'Action/Crime/Drama',
      Poster: 'https://iili.io/pmKnEX.md.webp',
       page/Lou 
      Trailer: 'https://www.youtu.be/QILhvR4QPsQ',
      synopsis:
        'A storm rages. A young girl is kidnapped. Her mother teams up with the mysterious woman next door to pursue the kidnapper, a journey that tests their limits and exposes shocking secrets from their pasts.',
      duration: '1h 47m',
    },
    {
      Title: 'Luck',
      Year: 2022,
      Rate: 6.4,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/yjKFUJ.md.webp',
       page/Luck 
      Trailer: 'https://www.youtu.be/xSG5UX0EQVg',
      synopsis:
        'The curtain is pulled back on the millennia-old battle between the organizations of good luck and bad luck that secretly affects everyday lives.',
      duration: '1h 45m',
    },
    {
      Title: 'Mencuri Raden Saleh',
      Year: 2022,
      Rate: 7.3,
      Type: 'Action/Crime/Drama',
      Poster: 'https://iili.io/HYa7172.md.webp',
       page/Mencuri Raden Saleh 
      Trailer: 'https://www.youtu.be/DN3sRz_veBU',
      synopsis:
        'To save his father, a master forger sets out to steal an invaluable painting with the help of a motley crew of specialists.',
      duration: '2h 34m',
    },
    {
      Title: 'Minions: The Rise of Gru',
      Year: 2022,
      Rate: 6.5,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/yjf7rg.md.webp',
       page/Minions The Rise of Gru 
      Trailer: 'https://www.youtu.be/6DxjJzmYsXo',
      synopsis:
        'The untold story of one twelve-Year-old's dream to become the world's greatest supervillain.',
      duration: '1h 27m',
    },
    {
      Title: 'Miracle in Cell No. 7',
      Year: 2022,
      Rate: 7.7,
      Type: 'Comedy/Drama/Family',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjU2NGQzMDQtMmM2My00MmFmLTgzY2EtZmFkNWY1N2EyYjA0XkEyXkFqcGdeQXVyNzY4NDQzNTg@._V1_.jpg',
       page/Miracle 
      Trailer: 'https://www.youtu.be/0uf6QUacVgs',
      synopsis:
        'A mentally ill man faces the consequences of a corrupt Indonesian politician as he is wrongly accused of murder, and all he wishes is to see his daughter again.',
      duration: '2h 25m',
    },
    {
      Title: 'Moonfall',
      Year: 2022,
      Rate: 5.1,
      Type: 'Action/Adventure/Sci-Fi',
      Poster: 'https://iili.io/ycEnAG.md.webp',
       page/Moonfall 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Ngeri Ngeri Sedap',
      Year: 2022,
      Rate: 8.1,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/pmT0xa.md.webp',
       page/Ngeri Ngeri Sedap 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'No Exit',
      Year: 2022,
      Rate: 6.1,
      Type: 'Drama/Mystery/Thriller',
      Poster: 'https://iili.io/ycNoNt.md.webp',
       page/No Exit 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Noktah Merah Perkawinan',
      Year: 2022,
      Rate: 8.2,
      Type: 'Drama',
      Poster: 'https://iili.io/HYau36Q.md.webp',
       page/Noktah Merah Perkawinan 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Nope',
      Year: 2022,
      Rate: 6.9,
      Type: 'Horror/Mystery/Sci-Fi',
      Poster: 'https://iili.io/pmlj5v.md.webp',
       page/Nope 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Old People',
      Year: 2022,
      Rate: 5.0,
      Type: 'Horror',
      Poster: 'https://iili.io/pbOzJl.md.webp',
       page/Old People 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Orphan First Kill',
      Year: 2022,
      Rate: 7.1,
      Type: 'Crime/Drama/Horror',
      Poster: 'https://iili.io/ycXV87.md.webp',
       page/Orphan First Kill 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Our Father',
      Year: 2022,
      Rate: 6.6,
      Type: 'Crime/Documentary',
      Poster: 'https://iili.io/pmH2kB.md.webp',
       page/Our Father 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Paws of Fury: The Legend of Hank',
      Year: 2022,
      Rate: 5.7,
      Type: 'Animation/Action/Comedy',
      Poster: 'https://iili.io/yjRpMG.md.webp',
       page/Paws of Fury The Legend of Hank 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Pearl',
      Year: 2022,
      Rate: 7.0,
      Type: 'Horror',
      Poster: 'https://iili.io/HHHriSp.md.webp',
       page/Pearl 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Piggy',
      Year: 2022,
      Rate: 6.2,
      Type: 'Drama/Horror/Thriller',
      Poster: 'https://iili.io/pLFisj.md.webp',
       page/Piggy 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Pinocchio',
      Year: 2022,
      Rate: 5.1,
      Type: 'Adventure/Comedy/Drama',
      Poster: 'https://iili.io/pLAsuj.md.webp',
       page/Pinocchio 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Project Wolf Hunting',
      Year: 2022,
      Rate: 6.2,
      Type: 'Action/Crime/Sci-Fi',
      Poster: 'https://iili.io/HCDGfaV.md.webp',
       page/Project Wolf Hunting 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Samaritan',
      Year: 2022,
      Rate: 5.7,
      Type: 'Action/Drama/Fantasy',
      Poster: 'https://iili.io/pDW03F.md.webp',
       page/Samaritan 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Seoul Vibe',
      Year: 2022,
      Rate: 5.5,
      Type: 'Action/Comedy/Crime',
      Poster: 'https://iili.io/HHJPMQ9.md.webp',
       page/Seoul Vibe 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Shut In',
      Year: 2022,
      Rate: 5.9,
      Type: 'Thriller',
      Poster: 'https://iili.io/pbmGxs.md.webp',
       page/Shut In 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Smile',
      Year: 2022,
      Rate: 6.7,
      Type: 'Horror/Mystery/Thriller',
      Poster: 'https://iili.io/H9zvZiu.md.webp',
       page/Smile 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Sniper The White Raven',
      Year: 2022,
      Rate: 6.2,
      Type: 'Drama/War',
      Poster: 'https://iili.io/pLHCmj.md.webp',
       page/Sniper The White Raven 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Sonic The Hedgehog 2',
      Year: 2022,
      Rate: 6.5,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/yX9x4V.md.webp',
       page/Sonic The Hedgehog 2 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Take Your Pills: Xanax',
      Year: 2022,
      Rate: 6.0,
      Type: 'Documentary',
      Poster: 'https://iili.io/HodeCil.md.webp',
       page/Take Your Pill 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Adam Project',
      Year: 2022,
      Rate: 6.7,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/ycG0dX.md.webp',
       page/The Adam Project 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Bad Guys',
      Year: 2022,
      Rate: 6.8,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/yjTtwu.md.webp',
       page/The Bad Guys 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Good Nurse',
      Year: 2022,
      Rate: 6.9,
      Type: 'Biography/Crime/Drama',
      Poster: 'https://iili.io/H95PR6v.md.webp',
       page/The Good Nurse 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Gray Man',
      Year: 2022,
      Rate: 6.4,
      Type: 'Action/Thriller',
      Poster: 'https://iili.io/pDxOOj.md.webp',
       page/The Gray Man 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Greatest Beer Run Ever',
      Year: 2022,
      Rate: 6.8,
      Type: 'Adventure/Comedy/Drama',
      Poster: 'https://iili.io/pDZwmJ.md.webp',
       page/The Greatest Beer Run Ever 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Immaculate Room',
      Year: 2022,
      Rate: 5.1,
      Type: 'Drama/Thriller',
      Poster: 'https://iili.io/pstWNV.md.webp',
       page/The Immaculate Room 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Last Dolphin King',
      Year: 2022,
      Rate: 5.6,
      Type: 'Documentary',
      Poster: 'https://iili.io/HfdXwNI.md.webp',
       page/The Last Dolphin King 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Lost Lotteries',
      Year: 2022,
      Rate: 5.4,
      Type: 'Comedy/Crime',
      Poster: 'https://iili.io/HCDWw9p.md.webp',
       page/The Lost Lotteries 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Menu',
      Year: 2022,
      Rate: 7.3,
      Type: 'Comedy/Horror/Thriller',
      Poster: 'https://iili.io/HagjmQe.md.webp',
       page/The Menu 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Outfit',
      Year: 2022,
      Rate: 7.1,
      Type: 'Crime/Drama/Mystery',
      Poster: 'https://iili.io/yWjvGS.md.webp',
       page/The Outfit 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Roundup',
      Year: 2022,
      Rate: 7.1,
      Type: 'Action/Crime/Thriller',
      Poster: 'https://iili.io/pDfRFs.md.webp',
       page/The Roundup 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Sea Beast',
      Year: 2022,
      Rate: 7.1,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/yjBbrF.md.webp',
       page/The Sea Beast 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Tinder Swindler',
      Year: 2022,
      Rate: 7.1,
      Type: 'Crime/Documentary',
      Poster: 'https://iili.io/HC6me87.md.webp',
       page/The Tinder Swindler 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Violence Action',
      Year: 2022,
      Rate: 4.5,
      Type: 'Action/Drama',
      Poster: 'https://iili.io/HCiqRLB.md.webp',
       page/The Violence Action 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Top Gun Maverick',
      Year: 2022,
      Rate: 8.4,
      Type: 'Action/Drama',
      Poster: 'https://iili.io/yWp9tf.md.webp',
       page/Top Gun Maverick 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Troll',
      Year: 2022,
      Rate: 5.8,
      Type: 'Action/Adventure/Drama',
      Poster: 'https://iili.io/HoClzmb.md.webp',
       page/Troll 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Turning Red',
      Year: 2022,
      Rate: 7.0,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/yX2ZWg.md.webp',
       page/Turning Red 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Uncharted',
      Year: 2022,
      Rate: 6.3,
      Type: 'Action/Adventure',
      Poster: 'https://iili.io/yXHJoJ.md.webp',
       page/Uncharted 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Watcher',
      Year: 2022,
      Rate: 6.3,
      Type: 'Drama/Horror/Thriller',
      Poster: 'https://iili.io/Hxu0LXa.md.webp',
       page/Watcher 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'X',
      Year: 2022,
      Rate: 6.6,
      Type: 'Horror/Mystery/Thriller',
      Poster: 'https://iili.io/HHHrPlR.md.webp',
       page/X 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: '22 vs Earth',
      Year: 2021,
      Rate: 6.4,
      Type: 'Animation/Adventure/Short',
      Poster: 'https://iili.io/5yOJcJ.md.webp',
       page/22 vs Earth 
      Trailer: 'https://www.youtu.be/VJUnC2j9rgo',
      synopsis:
        'Set before the events of Pixar's Soul (2020), 22 refuses to go to Earth, enlisting a gang of five other new souls in her attempt at rebellion.',
      duration: '6m',
    },
    {
      Title: '400 Bullets',
      Year: 2021,
      Rate: 3.8,
      Type: 'Action',
      Poster: 'https://iili.io/5OGP7R.md.webp',
       page/400 Bullets 
      Trailer: 'https://www.youtu.be/4ZZZiG13Dhg',
      synopsis:
        '400 BULLETS is an edge-of-your-seat Military Action story about what it means to fight for honor instead of profit. The film packs gun battles, epic hand-to-hand fight sequences and witty dialogue into its 90 minute run time.',
      duration: '1h 29m',
    },
    {
      Title: 'A Classic Horror Story',
      Year: 2021,
      Rate: 5.7,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/5OpJTJ.md.webp',
       page/A Classic Horror Story 
      Trailer: 'https://www.youtu.be/PHqyFhrb3uU',
      synopsis:
        'In this gruesome suspense film, strangers traveling in southern Italy become stranded in the woods, where they must fight desperately to get out alive.',
      duration: '1h 35m',
    },
    {
      Title: 'Antlers',
      Year: 2021,
      Rate: 5.9,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/HC6miFV.md.webp',
       page/Antlers 
      Trailer: 'https://www.youtu.be/ng5eyOfL8qM',
      synopsis:
        'In an isolated Oregon town, a middle-school teacher and her sheriff brother become embroiled with her enigmatic student, whose dark secrets lead to terrifying encounters with an ancestral creature.',
      duration: '1h 39m',
    },
    {
      Title: 'Asakusa Kid',
      Year: 2021,
      Rate: 7.1,
      Type: 'Biography/Drama',
      Poster: 'https://iili.io/YyyDRn.md.webp',
       page/Asakusa Kid 
      Trailer: 'https://www.youtu.be/KhzBFfkvn44',
      synopsis:
        'Before he hit it big, Takeshi Kitano got his start apprenticing with comedy legend Fukami of Asakusa. But as his star rises, his mentor's declines.',
      duration: '2h 2m',
    },
    {
      Title: 'Awake',
      Year: 2021,
      Rate: 4.9,
      Type: 'Action/Adventure/Drama',
      Poster: 'https://iili.io/5e9vBR.md.webp',
       page/Awake 
      Trailer: 'https://www.youtu.be/2fuowcxdrYc',
      synopsis:
        'After a devastating global event wiped out all electronics and eliminated people's ability to sleep, a former soldier may have found a solution with her daughter.',
      duration: '1h 36m',
    },
    {
      Title: 'Back to the Outback',
      Year: 2021,
      Rate: 6.5,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/7esNJ2.md.webp',
       page/Back to the Outback 
      Trailer: 'https://www.youtu.be/dDNhtB7L8Lk',
      synopsis:
        'Tired of being locked in a reptile house where humans gawk at them like they're monsters, a group of Australia's deadliest creatures plot a daring escape from their zoo to the Outback.',
      duration: '1h 35m',
    },
    {
      Title: 'Blood Red Sky',
      Year: 2021,
      Rate: 6.1,
      Type: 'Action/Adventure/Drama',
      Poster: 'https://iili.io/5bjg7S.md.webp',
       page/Blood Red Sky 
      Trailer: 'https://www.youtu.be/U8M_1eyrBtQ',
      synopsis:
        'A woman with a mysterious illness is forced into action when a group of terrorists attempt to hijack a transatlantic overnight flight.',
      duration: '2h 1m',
    },
    {
      Title: 'Blue Miracle',
      Year: 2021,
      Rate: 6.6,
      Type: 'Adventure/Biography/Drama',
      Poster: 'https://iili.io/5e9iIs.md.webp',
       page/Blue Miracle 
      Trailer: 'https://www.youtu.be/pXHCBnT3d4k',
      synopsis:
        'To save their cash-strapped orphanage, a guardian and his kids partner with a washed-up boat captain for a chance to win a lucrative fishing competition.',
      duration: '1h 35m',
    },
    {
      Title: 'Broadcast Signal Intrusion',
      Year: 2021,
      Rate: 5.4,
      Type: 'Crime/Drama/Horror',
      Poster: 'https://iili.io/YU9kXV.md.webp',
       page/Broadcast Signal Intrusion 
      Trailer: 'https://www.youtu.be/Y-zCemn5GuE',
      synopsis:
        'In the late 90s, a video archivist unearths a series of sinister pirate broadcasts and becomes obsessed with uncovering the dark conspiracy behind them.',
      duration: '1h 44m',
    },
    {
      Title: 'Bull',
      Year: 2021,
      Rate: 6.4,
      Type: 'Crime/Thriller',
      Poster: 'https://iili.io/pDr0p2.md.webp',
       page/Bull 
      Trailer: 'https://www.youtu.be/tTWYhQQ81f8',
      synopsis:
        'Bull mysteriously returns home after a 10 Year absence to seek revenge on those who double crossed him all those Years ago.',
      duration: '1h 28m',
    },
    {
      Title: 'Candyman',
      Year: 2021,
      Rate: 5.9,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/5eHJTu.md.webp',
       page/Candyman 
      Trailer: 'https://www.youtu.be/TPBH3XO8YEU',
      synopsis:
        'A sequel to the horror film Candyman (1992) that returns to the now-gentrified Chicago neighborhood where the legend began.',
      duration: '1h 31m',
    },
    {
      Title: 'Catman',
      Year: 2021,
      Rate: 7.7,
      Type: 'Comedy/Fantasy/Romance',
      Poster: 'https://iili.io/5eJkUN.md.webp',
       page/Catman 
      Trailer: 'https://www.youtu.be/NVC_uGuWVEc',
      synopsis:
        'Liang Qu is a chic, confident and cold but charming half cat, half human due to a magic spell and he has the ability to melt/heal broken hearts. He lives with Miao Xiao Wan, an honest, confident woman who's created an app that translates cats' sounds and language.',
      duration: '1h 30m',
    },
    {
      Title: 'Censor',
      Year: 2021,
      Rate: 6.0,
      Type: 'Horror/Mystery',
      Poster: 'https://iili.io/Y6VgTl.md.webp',
       page/Censor 
      Trailer: 'https://www.youtu.be/KRrhXjH1M70',
      synopsis:
        'After viewing a strangely familiar video nasty, Enid, a film censor, sets out to solve the past mystery of her sister's disappearance, embarking on a quest that dissolves the line between fiction and reality.',
      duration: '1h 24m',
    },
    {
      Title: 'Chaos Walking',
      Year: 2021,
      Rate: 5.7,
      Type: 'Action/Adventure/Fantasy',
      Poster: 'https://iili.io/5eJgbn.md.webp',
       page/Chaos Walking 
      Trailer: 'https://www.youtu.be/nRf4ZgzHoVw',
      synopsis:
        'Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality where all thoughts are seen and heard by everyone.',
      duration: '1h 49m',
    },
    {
      Title: 'Ciao Alberto',
      Year: 2021,
      Rate: 6.9,
      Type: 'Animation/Short/Comedy',
      Poster: 'https://iili.io/5eJ4xs.md.webp',
       page/Ciao Alberto 
      Trailer: 'https://www.youtu.be/KJZS7oXX5SE',
      synopsis: 'An animated short film that features characters from Luca.',
      duration: '8m',
    },
    {
      Title: 'Clifford the Big Red Dog',
      Year: 2021,
      Rate: 5.9,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/a9Hzls.md.webp',
       page/Clifford the Big Red Dog 
      Trailer: 'https://www.youtu.be/4zH5iYM4wJo',
      synopsis:
        'A young girl's love for a tiny puppy named Clifford makes the dog grow to an enormous size.',
      duration: '1h 36m',
    },
    {
      Title: 'Cruella',
      Year: 2021,
      Rate: 7.3,
      Type: 'Adventure/Comedy/Crime',
      Poster: 'https://iili.io/YfUS2V.md.webp',
       page/Cruella 
      Trailer: 'https://www.youtu.be/gmRKv7n2If8',
      synopsis:
        'A live-action prequel feature film following a young Cruella de Vil.',
      duration: '2h 14m',
    },
    {
      Title: 'Diary of a Wimpy Kid',
      Year: 2021,
      Rate: 5.1,
      Type: 'Animation/Comedy/Drama',
      Poster: 'https://iili.io/5yDCWF.md.webp',
       page/Diary of a Wimpy Kid 
      Trailer: 'https://www.youtu.be/VKhCPUa-glo',
      synopsis:
        'Greg Heffley is an ambitious kid with an active imagination and big plans to be rich and famous. The problem is that he has to survive middle school first.',
      duration: '58m',
    },
    {
      Title: 'Digging to Death',
      Year: 2021,
      Rate: 4.6,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/a9Hr4p.md.webp',
       page/Digging to Death 
      Trailer: 'https://www.youtu.be/o05TRySB6O0',
      synopsis:
        'David Van Owen moves into a mysterious house and discovers a box buried in his backyard, filled with 3 million dollars and a fresh corpse.',
      duration: '1h 36m',
    },
    {
      Title: 'Don't Breathe 2',
      Year: 2021,
      Rate: 6.0,
      Type: 'Action/Crime/Horror',
      Poster: 'https://iili.io/5eJ6WG.md.webp',
       page/Don't Breathe 2 
      Trailer: 'https://www.youtu.be/gRbG2tjHYCA',
      synopsis:
        'The sequel is set in the Years following the initial deadly home invasion, where Norman Nordstrom lives in quiet solace until his past sins catch up to him.',
      duration: '1h 38m',
    },
    {
      Title: 'Don't Look Up',
      Year: 2021,
      Rate: 7.2,
      Type: 'Comedy/Drama/Sci-Fi',
      Poster: 'https://iili.io/Y6x5WN.md.webp',
       page/Don't Look Up 
      Trailer: 'https://www.youtu.be/RbIxYm3mKzI',
      synopsis:
        'Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.',
      duration: '2h 18m',
    },
    {
      Title: 'Dune',
      Year: 2021,
      Rate: 8.0,
      Type: 'Action/Adventure/Drama',
      Poster: 'https://iili.io/5eJPsf.md.webp',
       page/Dune 
      Trailer: 'https://www.youtu.be/8g18jFHCLXk',
      synopsis:
        'A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.',
      duration: '2h 35m',
    },
    {
      Title: 'Encanto',
      Year: 2021,
      Rate: 7.2,
      Type: 'Animation/Comedy/Family',
      Poster: 'https://iili.io/cbcoDF.md.webp',
       page/Encanto 
      Trailer: 'https://www.youtu.be/CaimKeDcudo',
      synopsis:
        'A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.',
      duration: '1h 42m',
    },
    {
      Title: 'Escape Room: Tournament of Champions',
      Year: 2021,
      Rate: 5.7,
      Type: 'Action/Adventure/Horror',
      Poster: 'https://iili.io/5eJtJS.md.webp',
       page/Escape Room Tournament of Champions 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Extinct',
      Year: 2021,
      Rate: 5.4,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5eJD57.md.webp',
       page/Extinct 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'F9: The Fast Saga',
      Year: 2021,
      Rate: 5.2,
      Type: 'Action/Crime/Thriller',
      Poster: 'https://iili.io/5eJbe9.md.webp',
       page/F9 The Fast Saga 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Fathom',
      Year: 2021,
      Rate: 5.7,
      Type: 'Documentary',
      Poster: 'https://iili.io/5eJmbe.md.webp',
       page/Fathom 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Feathers',
      Year: 2021,
      Rate: 6.3,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/pbrXKg.md.webp',
       page/Feathers 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A family is forced into a period of self-discovery after its authoritarian patriarch is accidentally turned into a chicken by a magician during a children's birthday party.',
      duration: '1h 52m',
    },
    {
      Title: 'Finch',
      Year: 2021,
      Rate: 6.9,
      Type: 'Adventure/Drama/Sci-Fi',
      Poster: 'https://iili.io/5eJyzu.md.webp',
       page/Finch 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Free Guy',
      Year: 2021,
      Rate: 7.1,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/5ed9Wb.md.webp',
       page/Free Guy 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Game Changer',
      Year: 2021,
      Rate: 4.3,
      Type: 'Comedy/Crime/Drama',
      Poster: 'https://iili.io/5yNNaf.md.webp',
       page/Game Changer 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Ghost Lab',
      Year: 2021,
      Rate: 5.2,
      Type: 'Drama/Horror/Thriller',
      Poster: 'https://iili.io/5edHsj.md.webp',
       page/Ghost Lab 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Ghostbusters: Afterlife',
      Year: 2021,
      Rate: 7.1,
      Type: 'Adventure/Comedy/Fantasy',
      Poster: 'https://iili.io/cZs2jt.md.webp',
       page/Ghostbusters Afterlife 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Girl in the Basement',
      Year: 2021,
      Rate: 6.3,
      Type: 'Crime/Thriller',
      Poster: 'https://iili.io/5eddqx.md.webp',
       page/Girl in the Basement 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Godzilla vs. Kong',
      Year: 2021,
      Rate: 6.3,
      Type: 'Action/Sci-Fi/Thriller',
      Poster: 'https://iili.io/5ed20Q.md.webp',
       page/Godzilla vs. Kong 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Helmet',
      Year: 2021,
      Rate: 6.5,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/5edKdB.md.webp',
       page/Helmet 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Hilda and the Mountain King',
      Year: 2021,
      Rate: 7.7,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/cbn91e.md.webp',
       page/Hilda and the Mountain King 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Hitman's Wife Bodyguard',
      Year: 2021,
      Rate: 6.1,
      Type: 'Action/Comedy/Crime',
      Poster: 'https://iili.io/78fceS.md.webp',
       page/Hitman's Wife Bodyguard 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Homunculus',
      Year: 2021,
      Rate: 5.5,
      Type: 'Drama/Fantasy/Mystery',
      Poster: 'https://iili.io/cZiQZF.md.webp',
       page/Homunculus 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Hypnotic',
      Year: 2021,
      Rate: 5.3,
      Type: 'Mystery/Thriller',
      Poster: 'https://iili.io/5edSrQ.md.webp',
       page/Hypnotic 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'I Was a Simple Man',
      Year: 2021,
      Rate: 6.0,
      Type: 'Drama',
      Poster: 'https://iili.io/YfUbYN.md.webp',
       page/I Was a Simple Man 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Jungle Cruise',
      Year: 2021,
      Rate: 6.6,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/5edg2V.md.webp',
       page/Jungle Cruise 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Kate',
      Year: 2021,
      Rate: 6.2,
      Type: 'Action/Adventure/Crime',
      Poster: 'https://iili.io/5edrYB.md.webp',
       page/Kate 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Know Fear',
      Year: 2021,
      Rate: 3.9,
      Type: 'Horror',
      Poster: 'https://iili.io/cbxPrF.md.webp',
       page/Know Fear 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Lamb',
      Year: 2021,
      Rate: 6.3,
      Type: 'Drama/Fantasy/Horror',
      Poster: 'https://iili.io/5bjU22.md.webp',
       page/Lamb 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Last Night in Soho',
      Year: 2021,
      Rate: 7.1,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/cbwkzv.md.webp',
       page/Last Night in Soho 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Liar x Liar',
      Year: 2021,
      Rate: 6.4,
      Type: 'Comedy/Romance',
      Poster: 'https://iili.io/cQlqzJ.md.webp',
       page/Liar x Liar 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Lift',
      Year: 2021,
      Rate: 6.6,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/cQRVef.md.webp',
       page/Lift 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Like Dogs',
      Year: 2021,
      Rate: 3.9,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/5bj8rl.md.webp',
       page/Like Dogs 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Luca',
      Year: 2021,
      Rate: 7.4,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5ed4kP.md.webp',
       page/Luca 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Malignant',
      Year: 2021,
      Rate: 6.2,
      Type: 'Crime/Horror/Mystery',
      Poster: 'https://iili.io/5e2c8B.md.webp',
       page/Malignant 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Masquerade Night',
      Year: 2021,
      Rate: 6.2,
      Type: 'Crime/Drama/Mystery',
      Poster: 'https://iili.io/HxJ1HHF.md.webp',
       page/Masquerade Night 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Midnight',
      Year: 2021,
      Rate: 6.4,
      Type: 'Crime/Thriller',
      Poster: 'https://iili.io/5bjv14.md.webp',
       page/Midnight 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Mission Possible',
      Year: 2021,
      Rate: 6.4,
      Type: 'Action/Comedy/Crime',
      Poster: 'https://iili.io/5bjkBf.md.webp',
       page/Mission Possible 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Mohist Mechanism',
      Year: 2021,
      Rate: 6.7,
      Type: 'Action/Adventure/Fantasy',
      Poster: 'https://iili.io/5e2wap.md.webp',
       page/Mohist Mechanism 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Mortal Kombat',
      Year: 2021,
      Rate: 6.1,
      Type: 'Action/Adventure/Fantasy',
      Poster: 'https://iili.io/cb15Ux.md.webp',
       page/Mortal Kombat 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'My Blood & Bones in a Flowing Galaxy',
      Year: 2021,
      Rate: 6.7,
      Type: 'Drama/Fantasy/Romance',
      Poster: 'https://iili.io/Hx9tX8N.md.webp',
       page/My Blood Bones in a Flowing Galaxy 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Naked Singularity',
      Year: 2021,
      Rate: 4.8,
      Type: 'Comedy/Crime/Drama',
      Poster: 'https://iili.io/5e2gMG.md.webp',
       page/Naked Singularity 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'No One Gets Out Alive',
      Year: 2021,
      Rate: 5.3,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/5e3RDX.md.webp',
       page/No One Gets Out Alive 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'No Time To Die',
      Year: 2021,
      Rate: 7.3,
      Type: 'Action/Adventure/Thriller',
      Poster: 'https://iili.io/5e3aiG.md.webp',
       page/No Time To Die 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Nobody Sleeps in the Woods Tonight 2',
      Year: 2021,
      Rate: 3.8,
      Type: 'Comedy/Horror/Thriller',
      Poster: 'https://iili.io/5e2rPf.md.webp',
       page/Nobody Sleeps in the Woods Tonight 2 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Old',
      Year: 2021,
      Rate: 5.8,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/5e31Ul.md.webp',
       page/Old 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Outside the Wire',
      Year: 2021,
      Rate: 5.4,
      Type: 'Action/Adventure/Fantasy',
      Poster: 'https://iili.io/5eECLF.md.webp',
       page/Outside the Wire 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Oxygen',
      Year: 2021,
      Rate: 6.5,
      Type: 'Drama/Fantasy/Sci-Fi',
      Poster: 'https://iili.io/5bjhmX.md.webp',
       page/Oxygen 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Prey',
      Year: 2021,
      Rate: 4.3,
      Type: 'Adventure/Drama/Thriller',
      Poster: 'https://iili.io/5eEqzP.md.webp',
       page/Prey 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Puff: Wonders of the Reef',
      Year: 2021,
      Rate: 7.1,
      Type: 'Documentary/Family',
      Poster: 'https://iili.io/7bJpgp.md.webp',
       page/Puff Wonders of the Reef 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Queenpins',
      Year: 2021,
      Rate: 6.3,
      Type: 'Comedy/Crime',
      Poster: 'https://iili.io/Hx9bFm7.md.webp',
       page/Queenpins 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Raya and the Last Dragon',
      Year: 2021,
      Rate: 7.3,
      Type: 'Animation/Action/Adventure',
      Poster: 'https://iili.io/5eEx1a.md.webp',
       page/Raya and the Last Dragon 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Red Notice',
      Year: 2021,
      Rate: 6.3,
      Type: 'Action/Comedy/Thriller',
      Poster: 'https://iili.io/5eEoqg.md.webp',
       page/Red Notice 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Resident Evil: Welcome to Raccoon City',
      Year: 2021,
      Rate: 5.2,
      Type: 'Action/Horror/Sci-Fi',
      Poster: 'https://iili.io/cQTD7f.md.webp',
       page/Resident Evil Welcome to Raccoon City 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Riverdance : The Animated Adventure',
      Year: 2021,
      Rate: 5.5,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/cbIWl9.md.webp',
       page/Riverdance 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Seal Team',
      Year: 2021,
      Rate: 5.6,
      Type: 'Animation/Action/Comedy',
      Poster: 'https://iili.io/cbqbyl.md.webp',
       page/Seal Team 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Seaspiracy',
      Year: 2021,
      Rate: 8.1,
      Type: 'Adventure/Documentary',
      Poster: 'https://iili.io/5eEzrJ.md.webp',
       page/Seaspiracy 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Secret Magic Control Agency',
      Year: 2021,
      Rate: 6.2,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5eETdv.md.webp',
       page/Secret Magic Control Agency 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Shark: The Beginning',
      Year: 2021,
      Rate: 6.9,
      Type: 'Action/Drama',
      Poster: 'https://iili.io/583Y4s.md.webp',
       page/Shark The Beginning 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Silent Night',
      Year: 2021,
      Rate: 5.7,
      Type: 'Comedy/Drama/Horror',
      Poster: 'https://iili.io/7eiLns.md.webp',
       page/Silent Night 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Sing 2',
      Year: 2021,
      Rate: 7.4,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/cbF6Qe.md.webp',
       page/Sing 2 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Sinkhole',
      Year: 2021,
      Rate: 6.2,
      Type: 'Action/Comedy/Drama',
      Poster: 'https://iili.io/5eERmN.md.webp',
       page/Sinkhole 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Snoopy Presents: For Auld Lang Syne',
      Year: 2021,
      Rate: 6.9,
      Type: 'Animation/Comedy/Family',
      Poster: 'https://iili.io/7eiHCJ.md.webp',
       page/Snoopy Presents 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'StarBeam: Beaming in the New Year',
      Year: 2021,
      Rate: 5.3,
      Type: 'Animation/Family',
      Poster: 'https://iili.io/Y3hMep.md.webp',
       page/StarBeam Beaming in the New Year 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Suicide Forest Village',
      Year: 2021,
      Rate: 5.2,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/c4pkSp.md.webp',
       page/Suicide Forest Village 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Superhost',
      Year: 2021,
      Rate: 5.5,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/HC6pKAX.md.webp',
       page/Superhost 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Boss Baby Family Business',
      Year: 2021,
      Rate: 5.9,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5eEAep.md.webp',
       page/The Boss Baby Family Business 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Feast',
      Year: 2021,
      Rate: 5.5,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/5yNw3G.md.webp',
       page/The Feast 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The King's Man',
      Year: 2021,
      Rate: 6.3,
      Type: 'Action/Adventure/Thriller',
      Poster: 'https://iili.io/HC6mSwu.md.webp',
       page/The Kings Man 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Mitchells vs The Machines',
      Year: 2021,
      Rate: 7.6,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5eEG2f.md.webp',
       page/The Mitchells vs The Machines 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Thiên Than Ho Menh',
      Year: 2021,
      Rate: 5.7,
      Type: 'Crime/Drama/Horror',
      Poster: 'https://iili.io/7bdx7s.md.webp',
       page/Thiên Than Ho Menh 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Ron's Gone Wrong',
      Year: 2021,
      Rate: 7.0,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/7e6AP4.md.webp',
       page/Ron's Gone Wrong 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Conjuring: The Devil Made Me Do It',
      Year: 2021,
      Rate: 6.3,
      Type: 'Horror/Mystery/Thriller',
      Poster: 'https://iili.io/5eE7II.md.webp',
       page/The Conjuring The Devil Made Me Do It 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Forever Purge',
      Year: 2021,
      Rate: 5.4,
      Type: 'Action/Crime/Horror',
      Poster: 'https://iili.io/cb0S8Q.md.webp',
       page/The Forever Purge 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Titane',
      Year: 2021,
      Rate: 6.6,
      Type: 'Drama/Horror/Sci-Fi',
      Poster: 'https://iili.io/H9HD86Q.md.webp',
       page/Titane 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Black Phone',
      Year: 2021,
      Rate: 6.9,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/pDBBhN.md.webp',
       page/The Black Phone 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Cursed',
      Year: 2021,
      Rate: 6.0,
      Type: 'Horror',
      Poster: 'https://iili.io/5eEYXt.md.webp',
       page/The Cursed 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Suicide Squad',
      Year: 2021,
      Rate: 7.2,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/cbELYv.md.webp',
       page/The Suicide Squad 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Vivo',
      Year: 2021,
      Rate: 6.7,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5bjPIe.md.webp',
       page/Vivo 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Rumble',
      Year: 2021,
      Rate: 5.9,
      Type: 'Animation/Comedy/Family',
      Poster: 'https://iili.io/7bdzk7.md.webp',
       page/Rumble 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Ice Road',
      Year: 2021,
      Rate: 5.6,
      Type: 'Action/Adventure/Thriller',
      Poster: 'https://iili.io/5eE01s.md.webp',
       page/The Ice Road 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Tomorrow War',
      Year: 2021,
      Rate: 6.5,
      Type: 'Action/Adventure/Drama',
      Poster: 'https://iili.io/5eE1rG.md.webp',
       page/The Tomorrow War 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Wrath of Man',
      Year: 2021,
      Rate: 7.1,
      Type: 'Action/Crime/Thriller',
      Poster: 'https://iili.io/5eEVkl.md.webp',
       page/Wrath of Man 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Addams Family 2',
      Year: 2021,
      Rate: 5.4,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5eEu7R.md.webp',
       page/The Addams Family 2 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Deep House',
      Year: 2021,
      Rate: 5.4,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/5eEaLX.md.webp',
       page/The Deep House 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Loud House Movie',
      Year: 2021,
      Rate: 6.1,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5bjNXs.md.webp',
       page/The Loud House Movie 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The White Tiger',
      Year: 2021,
      Rate: 7.1,
      Type: 'Crime/Drama',
      Poster: 'https://iili.io/5eEM74.md.webp',
       page/The White Tiger 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'You're Not Normal, Either!',
      Year: 2021,
      Rate: 6.5,
      Type: 'Comedy/Drama/Romance',
      Poster: 'https://iili.io/5eEBX1.md.webp',
       page/You're Not Normal, Either 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Wasteland',
      Year: 2021,
      Rate: 4.6,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/cP9p1a.md.webp',
       page/The Wasteland 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Fable: The Killer Who Doesn't Kill',
      Year: 2021,
      Rate: 6.8,
      Type: 'Action/Comedy/Mystery',
      Poster: 'https://iili.io/5bjOLG.md.webp',
       page/The Fable The Killer Who Doesn't Kill 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Medium',
      Year: 2021,
      Rate: 6.5,
      Type: 'Horror',
      Poster: 'https://iili.io/5eElBn.md.webp',
       page/The Medium 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'The Whole Truth',
      Year: 2021,
      Rate: 5.2,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/7bdCrl.md.webp',
       page/The Whole Truth 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: '#Alive',
      Year: 2020,
      Rate: 6.3,
      Type: 'Action/Drama/Horror',
      Poster: 'https://iili.io/5Lmr8X.md.webp',
       page/Alive 
      Trailer: 'https://www.youtu.be/jQ8CCg1tOqc',
      synopsis:
        'The rapid spread of an unknown infection has left an entire city in ungovernable chaos, but one survivor remains alive in isolation. It is his story.',
      duration: '1h 38m',
    },
    {
      Title: 'A Quiet Place Part II',
      Year: 2020,
      Rate: 7.2,
      Type: 'Drama/Horror/Sci-Fi',
      Poster: 'https://iili.io/5Lm69n.md.webp',
       page/A Quiet Place Part II 
      Trailer: 'https://www.youtu.be/BpdDN9d9Jio',
      synopsis:
        'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.',
      duration: '1h 37m',
    },
    {
      Title: 'A Whisker Away',
      Year: 2020,
      Rate: 6.7,
      Type: 'Animation/Adventure/Drama',
      Poster: 'https://iili.io/5Lmgat.md.webp',
       page/A Whisker Away 
      Trailer: 'https://www.youtu.be/aXc9DVfLTGo',
      synopsis:
        'Miyo Sasaki is in love with her classmate Kento Hinode and tries repeatedly to get Kento's attention by transforming into a cat, but at some point, the boundary between herself and the cat becomes ambiguous.',
      duration: '1h 44m',
    },
    {
      Title: 'AK-47 / Kalashnikov',
      Year: 2020,
      Rate: 6.6,
      Type: 'Biography/War',
      Poster: 'https://iili.io/5LmUFI.md.webp',
       page/Kalashnikov 
      Trailer: 'https://www.youtu.be/ZhTy52KhqQ0',
      synopsis:
        'Wounded as a tank driver in 1941 during WWII, Kalashnikov sees the latest Soviet machine gun fail. As he's also an inventor, he starts looking for improvements and in 1947 ends up with AK-47 assault rifle.',
      duration: '1h 50m',
    },
    {
      Title: 'All the Bright Places',
      Year: 2020,
      Rate: 6.6,
      Type: 'Drama/Romance',
      Poster: 'https://iili.io/HoIUFQs.md.webp',
       page/All the Bright Places 
      Trailer: 'https://www.youtu.be/zfQXKVCudec',
      synopsis:
        'The story of Violet and Theodore, who meet and change each other's lives forever. As they struggle with the emotional and physical scars of their past, they discover that even the smallest places and moments can mean something.',
      duration: '1h 47m',
    },
    {
      Title: 'Anonymous Animals',
      Year: 2020,
      Rate: 4.6,
      Type: 'Fantasy/Thriller',
      Poster: 'https://iili.io/H79JKDx.md.webp',
       page/Anonymous Animal 
      Trailer: 'https://www.youtu.be/Yb1XAvFOfO8',
      synopsis:
        'The balance of power between man and animal has changed. In a remote countryside, any encounter with the dominant can become hostile.',
      duration: '1h 4m',
    },
    {
      Title: 'Birds of Prey',
      Year: 2020,
      Rate: 6.0,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/5LmPus.md.webp',
       page/Birds of Prey 
      Trailer: 'https://www.youtu.be/kGM4uYZzfu0',
      synopsis:
        'After splitting with the Joker, Harley Quinn joins superheroines Black Canary, Huntress, and Renee Montoya to save a young girl from an evil crime lord.',
      duration: '1h 49m',
    },
    {
      Title: 'Black Water : Abyss',
      Year: 2020,
      Rate: 4.6,
      Type: 'Action/Drama/Horror',
      Poster: 'https://iili.io/5LmiwG.md.webp',
       page/Black Water Abyss 
      Trailer: 'https://www.youtu.be/JKNv2YfrM7Y',
      synopsis:
        'Five friends exploring a remote cave system in Northern Australia find themselves threatened by a hungry crocodile.',
      duration: '1h 38m',
    },
    {
      Title: 'Borat Subsequent Moviefilm',
      Year: 2020,
      Rate: 6.6,
      Type: 'Comedy',
      Poster: 'https://iili.io/5Lmstf.md.webp',
       page/Borat Subsequent Moviefilm 
      Trailer: 'https://www.youtu.be/HOwaypo3jC4',
      synopsis:
        'Borat returns to America from Kazakhstan to America, this time to reveal more about the American culture, the COVD-19 pandemic, and the political elections.',
      duration: '1h 35m',
    },
    {
      Title: 'Cyst',
      Year: 2020,
      Rate: 4.3,
      Type: 'Comedy/Horror/Sci-Fi',
      Poster: 'https://iili.io/5LmQn4.md.webp',
       page/Cyst 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Enola Holmes',
      Year: 2020,
      Rate: 6.6,
      Type: 'Action/Adventure/Crime',
      Poster: 'https://iili.io/5LmZMl.md.webp',
       page/Enola Holmes 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Escape from Pretoria',
      Year: 2020,
      Rate: 6.8,
      Type: 'Biography/Crime/Mystery',
      Poster: 'https://iili.io/5LmtP2.md.webp',
       page/Escape from Pretoria 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Father Soldier Son',
      Year: 2020,
      Rate: 7.3,
      Type: 'Documentary/War',
      Poster: 'https://iili.io/5LmbFS.md.webp',
       page/Father Soldier Son 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Fukushima 50',
      Year: 2020,
      Rate: 6.0,
      Type: 'Action/Drama',
      Poster: 'https://iili.io/5Lmmc7.md.webp',
       page/Fukushima 50 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Here We Are: Notes for Living on Planet Earth',
      Year: 2020,
      Rate: 7.4,
      Type: 'Animation/Short',
      Poster: 'https://iili.io/5LmpS9.md.webp',
       page/Here We Are Notes for Living on Planet Earth 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Host',
      Year: 2020,
      Rate: 6.5,
      Type: 'Horror/Mystery',
      Poster: 'https://iili.io/5Lp99e.md.webp',
       page/Host 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Let It Snow',
      Year: 2020,
      Rate: 4.4,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/5LpHAu.md.webp',
       page/Let It Snow 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Limbo',
      Year: 2020,
      Rate: 7.2,
      Type: 'Drama',
      Poster: 'https://iili.io/5LpJwb.md.webp',
       page/Limbo 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Love and Monsters',
      Year: 2020,
      Rate: 6.9,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/5Lp3ox.md.webp',
       page/Love and Monsters 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Love Me, Love Me Not',
      Year: 2020,
      Rate: 6.4,
      Type: 'Drama/Romance',
      Poster: 'https://iili.io/5LpzNa.md.webp',
       page/Love Me Love Me Not 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Low Season',
      Year: 2020,
      Rate: 6.3,
      Type: 'Comedy/Horror/Romance',
      Poster: 'https://iili.io/5Lpdtj.md.webp',
       page/Low Season 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Magic Mountains',
      Year: 2020,
      Rate: 5.2,
      Type: 'Crime/Drama/Thriller',
      Poster: 'https://iili.io/5LpFMQ.md.webp',
       page/Magic Mountains 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Mangkujiwo',
      Year: 2020,
      Rate: 5.1,
      Type: 'Horror',
      Poster: 'https://iili.io/5LpKPV.md.webp',
       page/Mangkujiwo 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Miraculous World New York United HeroeZ',
      Year: 2020,
      Rate: 7.4,
      Type: 'Animation/Action/Adventure',
      Poster: 'https://iili.io/5LpqKB.md.webp',
       page/Miraculous World New York United 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Most Wanted',
      Year: 2020,
      Rate: 6.2,
      Type: 'Crime/Thriller',
      Poster: 'https://iili.io/5LpBcP.md.webp',
       page/Most Wanted 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Mulan',
      Year: 2020,
      Rate: 5.7,
      Type: 'Action/Adventure/Drama',
      Poster: 'https://iili.io/5LpCS1.md.webp',
       page/Mulan 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Nanti Kita Cerita Tentang Hari Ini',
      Year: 2020,
      Rate: 7.4,
      Type: 'Drama/Family',
      Poster: 'https://iili.io/58x2Tb.md.webp',
       page/Nanti Kita Cerita 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis: 'The story.',
      duration: '1h 58m',
    },
    {
      Title: 'Nobody Sleeps in the Woods Tonight',
      Year: 2020,
      Rate: 4.9,
      Type: 'Fantasy/Horror/Mystery',
      Poster: 'https://iili.io/5LpoHF.md.webp',
       page/Nobody Sleeps in the Woods Tonight 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A group of technology-dependent teenagers goes to offline camp and faces a deadly danger lurking in the woods.',
      duration: '1h 42m',
    },
    {
      Title: 'Not Quite Dead Yet',
      Year: 2020,
      Rate: 5.9,
      Type: 'Comedy',
      Poster: 'https://iili.io/5LpxAg.md.webp',
       page/Not Quite Dead Yet 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A pharmaceutical CEO who is pondering thefts and irregularities at his company drinks a drug that temporary suppresses his signs and gives him a deathlike state for a couple of days. Something goes wrong. His daughter, with whom he has had a rocky relationship, attempts to rescue him with help from a company employee.',
      duration: '1h 33m',
    },
    {
      Title: 'Onward',
      Year: 2020,
      Rate: 7.4,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5LpIDJ.md.webp',
       page/Onward 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Two elven brothers embark on a quest to bring their father back for one day.',
      duration: '1h 42m',
    },
    {
      Title: 'Over the Moon',
      Year: 2020,
      Rate: 6.3,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5Lpuov.md.webp',
       page/Over the Moon 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'In this animated musical, a girl builds a rocket ship and blasts off, hoping to meet a mythical moon goddess.',
      duration: '1h 35m',
    },
    {
      Title: 'Pawn',
      Year: 2020,
      Rate: 7.5,
      Type: 'Comedy/Drama/Family',
      Poster: 'https://iili.io/5LpAVR.md.webp',
       page/Pawn 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A human drama about a man who would do anything for money becoming friends with a child who is then taken hostage.',
      duration: '1h 53m',
    },
    {
      Title: 'Peninsula',
      Year: 2020,
      Rate: 5.5,
      Type: 'Action/Horror/Thriller',
      Poster: 'https://iili.io/5LpRPp.md.webp',
       page/Peninsula 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A zombie virus has in the last 4 Years spread to all South Korea. 4 Koreans in Hong Kong sail through the blockade to Incheon for USD20,000,000 on a truck.',
      duration: '1h 56m',
    },
    {
      Title: 'Relic',
      Year: 2020,
      Rate: 6.0,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/5Lp7KN.md.webp',
       page/Relic 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A daughter, mother and grandmother are haunted by a manifestation of dementia that consumes their family's home.',
      duration: '1h 29m',
    },
    {
      Title: 'Riders of Justice',
      Year: 2020,
      Rate: 7.5,
      Type: 'Action/Comedy/Drama',
      Poster: 'https://iili.io/5LpYlI.md.webp',
       page/Riders of Justice 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Markus goes home to his teenage daughter, Mathilde, when his wife dies in a train crash. All appears to be a tragic accident until a mathematics geek, who was also a fellow passenger on the train, and his two colleagues show up.',
      duration: '1h 56m',
    },
    {
      Title: 'Scoob!',
      Year: 2020,
      Rate: 5.6,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5LpaSt.md.webp',
       page/Scoob 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Scooby and the gang face their most challenging mystery ever: a plot to unleash the ghost dog Cerberus upon the world. As they race to stop this dogpocalypse, the gang discovers that Scooby has an epic destiny greater than anyone imagined.',
      duration: '1h 33m',
    },
    {
      Title: 'Serious Men',
      Year: 2020,
      Rate: 6.8,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/5LplHX.md.webp',
       page/Serious Men 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Tormented with his 'under-privileged' societal status, a father capitalizes on his son's newfound fame as a boy-genius. Little does he realize that the secret he harbors will destroy the very thing he loves the most.',
      duration: '1h 54m',
    },
    {
      Title: 'SF8',
      Year: 2020,
      Rate: 6.4,
      Type: 'Action/Comedy/Drama',
      Poster: 'https://iili.io/5Lp0Rn.md.webp',
       page/SF8 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'SF8 revolves around people who dream of a perfect society. It tackles the themes of artificial intelligence, augmented reality, virtual reality, robots, games, fantasy, horror, superpowers and disasters.',
      duration: '1h',
    },
    {
      Title: 'Sonic the Hedgehog',
      Year: 2020,
      Rate: 6.5,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/5LpEDG.md.webp',
       page/Sonic the Hedgehog 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.',
      duration: '1h 39m',
    },
    {
      Title: 'Soul',
      Year: 2020,
      Rate: 8.0,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5Lp1Ns.md.webp',
       page/Soul 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.',
      duration: '1h 40m',
    },
    {
      Title: 'The Croods : A New Age',
      Year: 2020,
      Rate: 6.9,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5LpMxf.md.webp',
       page/The Croods A New Age 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'The prehistoric family the Croods are challenged by a rival family the Bettermans, who claim to be better and more evolved.',
      duration: '1h 35m',
    },
    {
      Title: 'The Hunt',
      Year: 2020,
      Rate: 6.5,
      Type: 'Action/Horror/Thriller',
      Poster: 'https://iili.io/5LpWil.md.webp',
       page/The Hunt 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt.',
      duration: '1h 30m',
    },
    {
      Title: 'The Invisible Man',
      Year: 2020,
      Rate: 7.1,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/5LpVV4.md.webp',
       page/The Invisible Man 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.',
      duration: '2h 4m',
    },
    {
      Title: 'The King of Staten Island',
      Year: 2020,
      Rate: 7.1,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/5Lphf2.md.webp',
       page/The King of Staten Island 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Scott has been a case of arrested development since his firefighter dad died. He spends his days smoking weed and dreaming of being a tattoo artist until events force him to grapple with his grief and take his first steps forward in life.',
      duration: '2h 16m',
    },
    {
      Title: 'The Maid',
      Year: 2020,
      Rate: 5.6,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/5LpjlS.md.webp',
       page/The Maid 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A teenager Joy, work as a domestic maid and being haunted by the previous maid spirit, to discover the secret behind her death.',
      duration: '1h 42m',
    },
    {
      Title: 'The Night Clerk',
      Year: 2020,
      Rate: 5.6,
      Type: 'Crime/Drama/Mystery',
      Poster: 'https://iili.io/5LpwU7.md.webp',
       page/The Night Clerk 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A voyeuristic hotel clerk becomes the subject of a murder investigation.',
      duration: '1h 30m',
    },
    {
      Title: 'The Outpost',
      Year: 2020,
      Rate: 6.8,
      Type: 'Action/Drama/History',
      Poster: 'https://iili.io/5LpOJ9.md.webp',
       page/The Outpost 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A small team of U.S. soldiers battles against hundreds of Taliban fighters in Afghanistan.',
      duration: '2h 3m',
    },
    {
      Title: 'The Secret Garden',
      Year: 2020,
      Rate: 5.6,
      Type: 'Drama/Family/Fantasy',
      Poster: 'https://iili.io/5LpkOu.md.webp',
       page/The Secret Garden 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'An orphaned girl discovers a magical garden hidden at her strict uncle's estate.',
      duration: '1h 39m',
    },
    {
      Title: 'The Silencing',
      Year: 2020,
      Rate: 6.2,
      Type: 'Action/Crime/Mystery',
      Poster: 'https://iili.io/5LpeRe.md.webp',
       page/The Silencing 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A reformed hunter living in isolation on a wildlife sanctuary becomes involved in a deadly game of cat and mouse when he and the local Sheriff set out to track a vicious killer who may have kidnapped his daughter Years ago.',
      duration: '1h 33m',
    },
    {
      Title: 'The Speed Cubers',
      Year: 2020,
      Rate: 7.4,
      Type: 'Documentary/Short/Sport',
      Poster: 'https://iili.io/5LpvDb.md.webp',
       page/The Speed Cubers 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Discover the special bond -- and uncommon competitive spirit -- shared by the world's Rubik's Cube-solving record breakers in this documentary.',
      duration: '39m',
    },
    {
      Title: 'The SpongeBob Movie : Sponge on the Run',
      Year: 2020,
      Rate: 5.9,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5LpSxj.md.webp',
       page/The SpongeBob Movie Sponge on the Run 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home.',
      duration: '1h 31m',
    },
    {
      Title: 'The Way Back',
      Year: 2020,
      Rate: 6.7,
      Type: 'Drama/Sport',
      Poster: 'https://iili.io/5LpUWx.md.webp',
       page/The Way Back 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Jack Cunningham was a high school basketball phenom who walked away from the game, forfeiting his future. Years later, when he reluctantly accepts a coaching job at his alma mater, he may get one last shot at redemption.',
      duration: '1h 48m',
    },
    {
      Title: 'The Willoughbys',
      Year: 2020,
      Rate: 6.3,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5LpgiQ.md.webp',
       page/The Willoughbys 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Convinced they'd be better off raising themselves, the Willoughby children hatch a sneaky plan to send their selfish parents on vacation. The siblings then embark on their own high-flying adventure to find the true meaning of family.',
      duration: '1h 30m',
    },
    {
      Title: 'Thibaan x BNK48',
      Year: 2020,
      Rate: 5.3,
      Type: 'Music',
      Poster: 'https://iili.io/5Lp4fV.md.webp',
       page/Thibaan x BNK48 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'In order to come up with new music, a girl music group has to go to live in the countryside. By putting aside their city lives, perhaps life in the countryside can prove inspirational and help the girl band to produce a fresh, new sound.',
      duration: '2h 8m',
    },
    {
      Title: 'Toko Barang Mantan',
      Year: 2020,
      Rate: 6.0,
      Type: 'Comedy/Drama/Romance',
      Poster: 'https://iili.io/5Lp60B.md.webp',
       page/The Ex-Lover Shop 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Tristan (Reza Rahadian) is the owner of the shop that buys and sells ex-lover items for people who want to move on. Suddenly, Laras (Marsha Timothy), his ex-lover, comes and makes his life turned upside down.',
      duration: '1h 38m',
    },
    {
      Title: 'Trolls World Tour',
      Year: 2020,
      Rate: 6.1,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5LpPUP.md.webp',
       page/Trolls 2 World Tour 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'When the Queen of the Hard Rock Trolls tries to take over all the Troll kingdoms, Queen Poppy and her friends try different ways to save all the Trolls.',
      duration: '1h 31m',
    },
    {
      Title: 'Underwater',
      Year: 2020,
      Rate: 5.9,
      Type: 'Action/Horror/Sci-Fi',
      Poster: 'https://iili.io/5LpsJ1.md.webp',
       page/Underwater 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A crew of oceanic researchers working for a deep sea drilling company try to get to safety after a mysterious earthquake devastates their deepwater research and drilling facility located at the bottom of the Mariana Trench.',
      duration: '1h 35m',
    },
    {
      Title: 'Unpregnant',
      Year: 2020,
      Rate: 6.5,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/5LpL5F.md.webp',
       page/Unpregnant 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A 17-Year old Missouri teen named Veronica discovers she has gotten pregnant, a development that threatens to end her dreams of matriculating at an Ivy League college, and the career that will follow.',
      duration: '1h 43m',
    },
    {
      Title: 'We Bare Bears : The Movie',
      Year: 2020,
      Rate: 6.7,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/5LpQOg.md.webp',
       page/We Bare Bears The Movie 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Grizz, Panda, and Ice Bear embark on an adventure to Canada after an agent from the Department of National Wildlife Control tries to put an end to their hi-jinx.',
      duration: '1h 9m',
    },
    {
      Title: 'Wolfwalkers',
      Year: 2020,
      Rate: 8.0,
      Type: 'Animation/Adventure/Family',
      Poster: 'https://iili.io/Yv0NUX.md.webp',
       page/Wolfwalkers 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A young apprentice hunter and her father journey to Ireland to help wipe out the last wolf pack. But everything changes when she befriends a free-spirited girl from a mysterious tribe rumored to transform into wolves by night.',
      duration: '1h 43m',
    },
    {
      Title: 'Wotakoi: Love Is Hard for Otaku',
      Year: 2020,
      Rate: 5.2,
      Type: 'Comedy/Musical/Romance',
      Poster: 'https://iili.io/5LpDzJ.md.webp',
       page/Wotakoi Love Is Hard for Otaku 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Two office workers, who are also fans of otaku culture, meet and develop a relationship.',
      duration: '1h 54m',
    },
    {
      Title: 'Yakuza and the Family',
      Year: 2020,
      Rate: 7.0,
      Type: 'Crime/Drama',
      Poster: 'https://iili.io/5LpZba.md.webp',
       page/Yakuza and the Family 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Kenji Yamamoto's father died from using a stimulant drug. His life fell into desperation. Kenji then joined a crime syndicate. There, he meets the gang's boss Hiroshi Shibasaki. Hiroshi reaches out to Kenji and they developed a relationship like father and son. As time passes, Kenji has his own family.',
      duration: '2h 16m',
    },
    {
      Title: 'Yowamushi Pedal',
      Year: 2020,
      Rate: 6.5,
      Type: 'Comedy/Drama/Sport',
      Poster: 'https://iili.io/HC6m8ue.md.webp',
       page/Yowamushi Pedal 
      Trailer: 'https://www.youtu.be/WsjYGTy0lLI',
      synopsis:
        'Onoda, a cheerful youth who is a manga and anime fan, discovers he has a talent for cycling.',
      duration: '1h 52m',
    },
    {
      Title: '0.0 Mhz',
      Year: 2019,
      Rate: 4.9,
      Type: 'Horror',
      Poster: 'https://iili.io/58z7Db.md.webp',
       page/0.0 Mhz 
      Trailer: 'https://www.youtu.be/SXuq_sIrWIo',
      synopsis:
        'Members of a supernatural exploration club go into a haunted house.',
      duration: '1h 41m',
    },
    {
      Title: '6 Underground',
      Year: 2019,
      Rate: 6.1,
      Type: 'Action/Thriller',
      Poster: 'https://iili.io/58xyVR.md.webp',
       page/6 Underground 
      Trailer: 'https://www.youtu.be/YLE85olJjp8',
      synopsis:
        'Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.',
      duration: '2h 8m',
    },
    {
      Title: '12 Suicidal Teens',
      Year: 2019,
      Rate: 5.8,
      Type: 'Mystery/Thriller',
      Poster: 'https://iili.io/58xpov.md.webp',
       page/12 Suicidal Teens 
      Trailer: 'https://www.youtu.be/tlXwSOVZMPw',
      synopsis:
        'Twelve kids go into an abandoned hospital to give up on life. In the room where they meet, a boy is already lying dead, and no one knows who he is.',
      duration: '1h 57m',
    },
    {
      Title: '47 Meters Down: Uncaged',
      Year: 2019,
      Rate: 5.0,
      Type: 'Adventure/Drama/Horror',
      Poster: 'https://iili.io/58xbDJ.md.webp',
       page/47 Meters Down Uncaged 
      Trailer: 'https://www.youtu.be/13w5naMdTXg',
      synopsis:
        'Two sisters diving in a ruined underwater city quickly learn they've entered the territory of the deadliest shark species in the claustrophobic labyrinth of submerged caves.',
      duration: '1h 30m',
    },
    {
      Title: '1917',
      Year: 2019,
      Rate: 8.2,
      Type: 'Action/Drama/War',
      Poster: 'https://iili.io/58xDNa.md.webp',
       page/1917 
      Trailer: 'https://www.youtu.be/YqNYrYUiMfg',
      synopsis:
        'April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
      duration: '1h 59m',
    },
    {
      Title: 'A Night of Horror : Nightmare Radio',
      Year: 2019,
      Rate: 5.0,
      Type: 'Horror/Mystery',
      Poster: 'https://iili.io/58z9Pp.md.webp',
       page/A Night of Horror Nightmare Radio 
      Trailer: 'https://www.youtu.be/9RMTYzdMiaU',
      synopsis:
        'Rod, radio DJ, hosts a popular horror-themed show packed with tales of terror for eager listeners. When he receives alarming calls from a horrified child things start to feel off.',
      duration: '1h 44m',
    },
    {
      Title: 'A Rainy Day in New York',
      Year: 2019,
      Rate: 6.5,
      Type: 'Comedy/Romance',
      Poster: 'https://iili.io/58zJKN.md.webp',
       page/A Rainy Day in New York 
      Trailer: 'https://www.youtu.be/yIVRldiVDL8',
      synopsis:
        'A young couple arrives in New York for a weekend where they are met with bad weather and a series of adventures.',
      duration: '1h 32m',
    },
    {
      Title: 'A Shaun the Sheep Movie : Farmageddon',
      Year: 2019,
      Rate: 6.8,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/58zdlI.md.webp',
       page/A Shaun the Sheep Movie Farmageddon 
      Trailer: 'https://www.youtu.be/YxRUSAIYieA',
      synopsis:
        'When an alien with amazing powers crash-lands near Mossy Bottom Farm, Shaun the Sheep goes on a mission to shepherd the intergalactic visitor home before a sinister organization can capture her.',
      duration: '1h 26m',
    },
    {
      Title: 'Abominable',
      Year: 2019,
      Rate: 7.0,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/58z2St.md.webp',
       page/Abominable 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Three teenagers must help a Yeti return to his family while avoiding a wealthy man and a zoologist who want him for their own needs.',
      duration: '1h 37m',
    },
    {
      Title: 'Ashfall',
      Year: 2019,
      Rate: 6.2,
      Type: 'Action/Adventure/Sci-Fi',
      Poster: 'https://iili.io/58zFHX.md.webp',
       page/Ashfall 
      Trailer: 'https://www.youtu.be/24T47vQA0fY',
      synopsis:
        'Stagnant since 1903, at an elevation of 2,744 m, a volcano erupts on the mythical and majestic Baekdu Mountain.',
      duration: '2h 10m',
    },
    {
      Title: 'Boku no Hero Academia : Heroes Rising',
      Year: 2019,
      Rate: 7.8,
      Type: 'Animation/Action/Adventure',
      Poster: 'https://iili.io/58zKRn.md.webp',
       page/My Hero Academia Heroes Rising 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A group of youths aspiring to become professional superheroes, fight in a world full of people with abilities, also known as quirks. Deku and his fellow classmates from Hero Academy face Nine, the strongest villain yet.',
      duration: '1h 44m',
    },
    {
      Title: 'Code 8',
      Year: 2019,
      Rate: 6.1,
      Type: 'Action/Crime/Drama',
      Poster: 'https://iili.io/58zCxf.md.webp',
       page/Code 8 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A super-powered construction worker falls in with a group of criminals in order to raise the funds to help his ill mother.',
      duration: '1h 38m',
    },
    {
      Title: 'Countdown',
      Year: 2019,
      Rate: 5.4,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/58zfNs.md.webp',
       page/Countdown 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'When a nurse downloads an app that claims to predict the moment a person will die, it tells her she only has three days to live. With the clock ticking and a figure haunting her, she must find a way to save her life before time runs out.',
      duration: '1h 30m',
    },
    {
      Title: 'Danger Close',
      Year: 2019,
      Rate: 6.8,
      Type: 'Action/Drama/War',
      Poster: 'https://iili.io/58zqDG.md.webp',
       page/Danger Close 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'In August 1966, in a Vietnamese rubber plantation called Long Tan, 108 young and inexperienced Australian and New Zealand soldiers are fighting for their lives against 2500 North Vietnamese and Viet Cong soldiers.',
      duration: '1h 58m',
    },
    {
      Title: 'Do Not Reply',
      Year: 2019,
      Rate: 4.5,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/HxTyRXp.md.webp',
       page/Do Not Reply 
      Trailer: 'https://www.youtu.be/_fKvK-JIc00',
      synopsis:
        'Chelsea, a teenager, is abducted through a social media app by Brad and is held captive with other girls who are to become victims in his virtual reality filmed murders.',
      duration: '1h 38m',
    },
    {
      Title: 'Dua Garis Biru',
      Year: 2019,
      Rate: 7.8,
      Type: 'Drama',
      Poster: 'https://iili.io/58znV4.md.webp',
       page/Dua Garis Biru 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A young couple violated the boundary without knowing the consequences. They try to take responsibility for their choices and their innocence is tested when the families who really loved them knew, then forced into their chosen journey.',
      duration: '1h 53m',
    },
    {
      Title: 'Escape Room',
      Year: 2019,
      Rate: 6.4,
      Type: 'Action/Adventure/Horror',
      Poster: 'https://iili.io/5ifwDF.md.webp',
       page/Escape Room 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Six strangers find themselves in a maze of deadly mystery rooms and must use their wits to survive.',
      duration: '1h 39m',
    },
    {
      Title: 'Fast & Furious Presents: Hobbs & Shaw',
      Year: 2019,
      Rate: 6.5,
      Type: 'Action/Adventure/Thriller',
      Poster: 'https://iili.io/58zzf2.md.webp',
       page/Fast Furious Presents Hobbs Shaw 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.',
      duration: '2h 17m',
    },
    {
      Title: 'Fighting with My Family',
      Year: 2019,
      Rate: 7.1,
      Type: 'Biography/Comedy/Drama',
      Poster: 'https://iili.io/58zIlS.md.webp',
       page/Fighting with My Family 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A former wrestler and his family make a living performing at small venues around the country while his kids dream of joining World Wrestling Entertainment.',
      duration: '1h 48m',
    },
    {
      Title: 'Ford v Ferrari',
      Year: 2019,
      Rate: 8.1,
      Type: 'Action/Biography/Drama',
      Poster: 'https://iili.io/58zTU7.md.webp',
       page/Ford v Ferrari 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.',
      duration: '2h 32m',
    },
    {
      Title: 'Frozen II',
      Year: 2019,
      Rate: 6.8,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/58zAJ9.md.webp',
       page/Frozen II 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.',
      duration: '1h 43m',
    },
    {
      Title: 'Gemini Man',
      Year: 2019,
      Rate: 5.7,
      Type: 'Action/Sci-Fi/Thriller',
      Poster: 'https://iili.io/58zRRe.md.webp',
       page/Gemini Man 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'An over-the-hill hitman faces off against a younger clone of himself.',
      duration: '1h 57m',
    },
    {
      Title: 'Glass',
      Year: 2019,
      Rate: 6.6,
      Type: 'Drama/Horror/Sci-Fi',
      Poster: 'https://iili.io/58z5Ou.md.webp',
       page/Glass 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities.',
      duration: '2h 9m',
    },
    {
      Title: 'Harpoon',
      Year: 2019,
      Rate: 6.0,
      Type: 'Comedy/Horror/Thriller',
      Poster: 'https://iili.io/58xlat.md.webp',
       page/Harpoon 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Rivalries, dark secrets, and sexual tension emerge when three best friends find themselves stranded on a yacht in the middle of the ocean desperate for survival.',
      duration: '1h 23m',
    },
    {
      Title: 'Hello World',
      Year: 2019,
      Rate: 6.7,
      Type: 'Animation/Comedy/Drama',
      Poster: 'https://iili.io/58x08X.md.webp',
       page/Hello World 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A man travels in time from the Year 2027 to relive his school Years and to correct a bad decision.',
      duration: '1h 37m',
    },
    {
      Title: 'How to Build a Girl',
      Year: 2019,
      Rate: 5.9,
      Type: 'Comedy',
      Poster: 'https://iili.io/58xcFI.md.webp',
       page/How to Build a Girl 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A teenager living with her working-class family on a council estate in Wolverhampton, England, grows up to become a popular but conflicted music journalist.',
      duration: '1h 42m',
    },
    {
      Title: 'I Am Mother',
      Year: 2019,
      Rate: 6.7,
      Type: 'Drama/Mystery/Sci-Fi',
      Poster: 'https://iili.io/58xY6N.md.webp',
       page/I Am Mother 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'In the wake of humanity's extinction, a teenage girl is raised by a robot designed to repopulate the earth. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.',
      duration: '1h 53m',
    },
    {
      Title: 'In the Tall Grass',
      Year: 2019,
      Rate: 5.4,
      Type: 'Horror/Mystery/Sci-Fi',
      Poster: 'https://iili.io/58x7Gp.md.webp',
       page/In the Tall Grass 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'After hearing a young boy's cry for help, a sister and brother venture into a vast field of tall grass in Kansas but soon discover there may be no way out...and that something evil lurks within.',
      duration: '1h 41m',
    },
    {
      Title: 'Inhuman Kiss',
      Year: 2019,
      Rate: 6.4,
      Type: 'Drama/Horror/Romance',
      Poster: 'https://iili.io/58x5nR.md.webp',
       page/Inhuman Kiss 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'In a far-away village, lived an innocent teenage girl, Sai who later discovered herself inheriting the curse of Krasue. At night, her head would detach from her body and hunts for flesh and blood. Villagers are terrified by the deaths of their livestocks and that is when the Krasue hunt begins.',
      duration: '2h 2m',
    },
    {
      Title: 'It Chapter Two',
      Year: 2019,
      Rate: 6.5,
      Type: 'Drama/Fantasy/Horror',
      Poster: 'https://iili.io/58xAZv.md.webp',
       page/It Chapter Two 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Twenty-seven Years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back.',
      duration: '2h 49m',
    },
    {
      Title: 'Jigoku Shoujo',
      Year: 2019,
      Rate: 5.0,
      Type: 'Fantasy/Horror',
      Poster: 'https://iili.io/58xuwJ.md.webp',
       page/Hell Girl 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Tormented and bullied people can access a special website, run by a Hell Girl who will enable them to take revenge on their torturers. The price for such a service is only that the person must join their torturer in damnation.',
      duration: '1h 47m',
    },
    {
      Title: 'Joker',
      Year: 2019,
      Rate: 8.4,
      Type: 'Crime/Drama/Thriller',
      Poster: 'https://iili.io/58xTua.md.webp',
       page/Joker 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gotham's clown prince and leader of the revolution.',
      duration: '2h 2m',
    },
    {
      Title: 'Jumanji : The Next Level',
      Year: 2019,
      Rate: 6.7,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/58xzyg.md.webp',
       page/Jumanji The Next Level 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.',
      duration: '2h 3m',
    },
    {
      Title: 'Killer Sofa',
      Year: 2019,
      Rate: 3.7,
      Type: 'Comedy/Fantasy/Horror',
      Poster: 'https://iili.io/58xx8F.md.webp',
       page/Killer Sofa 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A killer reclining chair becomes enchanted by a girl and starts committing crimes of passion.',
      duration: '1h 21m',
    },
    {
      Title: 'Kiss Me at the Stroke of Midnight',
      Year: 2019,
      Rate: 5.2,
      Type: 'Comedy/Romance',
      Poster: 'https://iili.io/58xoa1.md.webp',
       page/Kiss Me at the Stroke of Midnight 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A stern young girl who Yearns for romance, finds herself involved with a celebrity whose image reveals a hidden persona.',
      duration: '1h 55m',
    },
    {
      Title: 'Knives Out',
      Year: 2019,
      Rate: 7.9,
      Type: 'Comedy/Crime/Drama',
      Poster: 'https://iili.io/58xn3P.md.webp',
       page/Knives Out 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A detective investigates the death of the patriarch of an eccentric, combative family.',
      duration: '2h 10m',
    },
    {
      Title: 'Maleficent : Mistress of Evil',
      Year: 2019,
      Rate: 6.6,
      Type: 'Adventure/Family/Fantasy',
      Poster: 'https://iili.io/58xB6B.md.webp',
       page/Maleficent Mistress of Evil 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      duration: '1h 59m',
    },
    {
      Title: 'Marriage Story',
      Year: 2019,
      Rate: 7.9,
      Type: 'Drama/Romance',
      Poster: 'https://iili.io/58xqGV.md.webp',
       page/Marriage Story 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.',
      duration: '2h 17m',
    },
    {
      Title: 'Mine 9',
      Year: 2019,
      Rate: 6.0,
      Type: 'Drama/Thriller',
      Poster: 'https://iili.io/58xfCQ.md.webp',
       page/Mine 9 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Two miles into the earth, nine Appalachian miners struggle to survive after a methane explosion leaves them with one hour of oxygen.',
      duration: '1h 23m',
    },
    {
      Title: 'Missing Link',
      Year: 2019,
      Rate: 6.7,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/58x3jj.md.webp',
       page/Missing Link 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Mr. Link recruits explorer Sir Lionel Frost to help find his long-lost relatives in the fabled valley of Shangri-La. Along with adventurer Adelina Fortnight, this trio of explorers travel the world to help their new friend.',
      duration: '1h 33m',
    },
    {
      Title: 'Murder At Shijinsou',
      Year: 2019,
      Rate: 5.5,
      Type: 'Crime',
      Poster: 'https://iili.io/58xFZx.md.webp',
       page/Murder At Shijinsou 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Every student is encouraged to join an extracurricular club and this one joins the university's Mystery Club.The club has a couple of veterans, but the real thing - an actual detective - is also in their midst.The club goes on an outing in the wilds of nature and on a mountain.',
      duration: '1h 59m',
    },
    {
      Title: 'Parasite',
      Year: 2019,
      Rate: 8.5,
      Type: 'Drama/Thriller',
      Poster: 'https://iili.io/58xJyu.md.webp',
       page/Parasite 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      duration: '2h 12m',
    },
    {
      Title: 'Pet Sematary',
      Year: 2019,
      Rate: 5.7,
      Type: 'Horror/Mystery/Thriller',
      Poster: 'https://iili.io/58xHve.md.webp',
       page/Pet Sematary 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Dr. Louis Creed and his wife, Rachel, relocate from Boston to rural Maine with their two young children. The couple soon discover a mysterious burial ground hidden deep in the woods near their new home.',
      duration: '1h 41m',
    },
    {
      Title: 'Pets United',
      Year: 2019,
      Rate: 3.7,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/58x9a9.md.webp',
       page/Pets United 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A group of spoilt, selfish pets led by glamour cat Belle are stranded in their luxury hangout 'Pampered Pets,' when the machines that run Robo City, the hypermodern metropolis that they live in, go wild and take over.',
      duration: '1h 29m',
    },
    {
      Title: 'Playing with Fire',
      Year: 2019,
      Rate: 5.1,
      Type: 'Comedy/Family',
      Poster: 'https://iili.io/58oy37.md.webp',
       page/Playing with Fire 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A crew of rugged firefighters meet their match when attempting to rescue three rambunctious kids.',
      duration: '1h 36m',
    },
    {
      Title: 'Playmobil: The Movie',
      Year: 2019,
      Rate: 4.9,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/58om4S.md.webp',
       page/Playmobil The Movie 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'When her younger brother Charlie unexpectedly disappears into the magical, animated universe of PLAYMOBIL®, unprepared Marla must go on a quest of a lifetime to bring him home, setting off on a fantastic journey across stunning new worlds.',
      duration: '1h 39m',
    },
    {
      Title: 'Polaroid',
      Year: 2019,
      Rate: 5.1,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/58oDCl.md.webp',
       page/Polaroid 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'High school loner Bird Fitcher has no idea what dark secrets are tied to the Polaroid camera she finds. It doesn't take long to discover that those who have their picture taken with it, soon die.',
      duration: '1h 28m',
    },
    {
      Title: 'Ready or Not',
      Year: 2019,
      Rate: 6.8,
      Type: 'Action/Comedy/Horror',
      Poster: 'https://iili.io/58obG2.md.webp',
       page/Ready or Not 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.',
      duration: '1h 35m',
    },
    {
      Title: 'Sea Fever',
      Year: 2019,
      Rate: 5.7,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/58oZQ4.md.webp',
       page/Sea Fever 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'The crew of a West of Ireland trawler, marooned at sea, struggle for their lives against a growing parasite in their water supply.',
      duration: '1h 35m',
    },
    {
      Title: 'Spycies',
      Year: 2019,
      Rate: 5.5,
      Type: 'Animation/Action/Comedy',
      Poster: 'https://iili.io/58oQjf.md.webp',
       page/Spycies 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Vladimir and Hector, two secret agents opposite in every way, are trying to recover a top secret material stolen by unknown intruders.',
      duration: '1h 39m',
    },
    {
      Title: 'Swallow',
      Year: 2019,
      Rate: 6.5,
      Type: 'Drama/Thriller',
      Poster: 'https://iili.io/58oLTG.md.webp',
       page/Swallow 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Hunter, a newly pregnant housewife, finds herself increasingly compelled to consume dangerous objects. As her husband and his family tighten their control over her life, she must confront the dark secret behind her new obsession.',
      duration: '1h 34m',
    },
    {
      Title: 'Terminator: Dark Fate',
      Year: 2019,
      Rate: 6.2,
      Type: 'Action/Adventure/Sci-Fi',
      Poster: 'https://iili.io/58oPvn.md.webp',
       page/Terminator Dark Fate 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'An augmented human and Sarah Connor must stop an advanced liquid Terminator from hunting down a young girl, whose fate is critical to the human race.',
      duration: '2h 8m',
    },
    {
      Title: 'The Addams Family',
      Year: 2019,
      Rate: 5.8,
      Type: 'Animation/Comedy/Family',
      Poster: 'https://iili.io/58oips.md.webp',
       page/The Addams Family 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'The eccentrically macabre family moves to a bland suburb where Wednesday Addams' friendship with the daughter of a hostile and conformist local reality show host exacerbates conflict between the families.',
      duration: '1h 26m',
    },
    {
      Title: 'The Aeronauts',
      Year: 2019,
      Rate: 6.6,
      Type: 'Action/Adventure/Drama',
      Poster: 'https://iili.io/58o42t.md.webp',
       page/The Aeronauts 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A balloon pilot and a scientist find themselves in a fight for survival while attempting to make discoveries in a gas balloon in the 1860s.',
      duration: '1h 40m',
    },
    {
      Title: 'The Angry Birds Movie 2',
      Year: 2019,
      Rate: 6.4,
      Type: 'Animation/Action/Adventure',
      Poster: 'https://iili.io/58o6YX.md.webp',
       page/The Angry Birds Movie 2 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'The flightless birds and scheming green pigs take their feud to the next level.',
      duration: '1h 37m',
    },
    {
      Title: 'The Blackout',
      Year: 2019,
      Rate: 6.1,
      Type: 'Action/Sci-Fi/Thriller',
      Poster: 'https://iili.io/58og4I.md.webp',
       page/The Blackout 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Life on Earth is rapidly destroyed except for a small area in Eastern Europe.',
      duration: '2h 7m',
    },
    {
      Title: 'The Curse of La Llorona',
      Year: 2019,
      Rate: 5.2,
      Type: 'Horror/Mystery/Thriller',
      Poster: 'https://iili.io/58oUEN.md.webp',
       page/The Curse of La Llorona 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Ignoring the eerie warning of a troubled mother suspected of child endangerment, a social worker and her own small kids are soon drawn into a frightening supernatural realm.',
      duration: '1h 33m',
    },
    {
      Title: 'The Drone',
      Year: 2019,
      Rate: 4.0,
      Type: 'Comedy/Horror/Sci-Fi',
      Poster: 'https://iili.io/58oSBp.md.webp',
       page/The Drone 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A newlywed couple is terrorized by a consumer drone that has become sentient with the consciousness of a deranged serial killer.',
      duration: '1h 22m',
    },
    {
      Title: 'The Fable',
      Year: 2019,
      Rate: 6.5,
      Type: 'Action/Comedy',
      Poster: 'https://iili.io/5bjOLG.md.webp',
       page/The Fable 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Trained as a ruthless assassin since childhood, a mob hitman is ordered to become a normal law-abiding citizen.',
      duration: '2h 3m',
    },
    {
      Title: 'The Flowers of Evil',
      Year: 2019,
      Rate: 5.8,
      Type: 'Drama/Romance/Thriller',
      Poster: 'https://iili.io/58ovQR.md.webp',
       page/The Flowers of Evil 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A college student steals the panties of a girl he likes and gets witnessed, which sets off a chain of events that send his life and the lives of others around him out of control.',
      duration: '2h 7m',
    },
    {
      Title: 'The Great War of Archimedes',
      Year: 2019,
      Rate: 6.6,
      Type: 'Action/Drama/Mystery',
      Poster: 'https://iili.io/58okhv.md.webp',
       page/The Great War of Archimedes 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'In 1933, a young naval officer and math prodigy uncovers a conspiracy regarding the construction of Japanese warships for the ongoing World War 2.',
      duration: '2h 10m',
    },
    {
      Title: 'The Lighthouse',
      Year: 2019,
      Rate: 7.4,
      Type: 'Drama/Fantasy/Mystery',
      Poster: 'https://iili.io/58oeTJ.md.webp',
       page/The Lighthouse 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.',
      duration: '1h 49m',
    },
    {
      Title: 'The Mortuary Collection',
      Year: 2019,
      Rate: 6.4,
      Type: 'Fantasy/Horror',
      Poster: 'https://iili.io/58oNpa.md.webp',
       page/The Mortuary Collection 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'An eccentric mortician recounts several macabre and phantasmagorical tales that he's encountered in his distinguished career.',
      duration: '1h 48m',
    },
    {
      Title: 'The Personal History of David Copperfield',
      Year: 2019,
      Rate: 6.4,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/58owkg.md.webp',
       page/The Personal History of David Copperfield 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A modern take on Charles Dickens's classic tale of a young orphan who is able to triumph over many obstacles.',
      duration: '1h 59m',
    },
    {
      Title: 'The Room',
      Year: 2019,
      Rate: 6.0,
      Type: 'Drama/Fantasy/Horror',
      Poster: 'https://iili.io/58oh21.md.webp',
       page/The Room 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Matt and Kate buy an isolated house. While moving, they discover a strange room that grants them an unlimited number of material wishes. But since Kate has had two miscarriages, what they long for the most is a child.',
      duration: '1h 40m',
    },
    {
      Title: 'Togo',
      Year: 2019,
      Rate: 7.9,
      Type: 'Adventure/Biography/Drama',
      Poster: 'https://iili.io/58ojYF.md.webp',
       page/Togo 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'The story of Togo, the sled dog who led the 1925 serum run despite being considered too small and weak to lead such an intense race.',
      duration: '1h 53m',
    },
    {
      Title: 'Ugly Dolls',
      Year: 2019,
      Rate: 5.1,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/58oELQ.md.webp',
       page/Ugly Dolls 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'An animated adventure in which the free-spirited UglyDolls confront what it means to be different, struggle with a desire to be loved, and ultimately discover who you truly are is what matters most.',
      duration: '1h 27m',
    },
    {
      Title: 'Vivarium',
      Year: 2019,
      Rate: 5.9,
      Type: 'Horror/Mystery/Sci-Fi',
      Poster: 'https://iili.io/58oMBV.md.webp',
       page/Vivarium 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A young couple looking for the perfect home find themselves trapped in a mysterious labyrinth-like neighborhood of identical houses.',
      duration: '1h 37m',
    },
    {
      Title: 'Weathering with You',
      Year: 2019,
      Rate: 7.5,
      Type: 'Animation/Drama/Fantasy',
      Poster: 'https://iili.io/7iZlcl.md.webp',
       page/Weathering with You 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.',
      duration: '1h 52m',
    },
    {
      Title: 'Where We Belong',
      Year: 2019,
      Rate: 7.0,
      Type: 'Drama/Family/Romance',
      Poster: 'https://iili.io/58oVEB.md.webp',
       page/Where We Belong 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Sue, the crazy girl that feels as if she was born in the wrong place. But the craziest thing she's ever done is that she is about to leave everything behind, including Belle.',
      duration: '2h 10m',
    },
    {
      Title: 'Zombieland: Double Tap',
      Year: 2019,
      Rate: 6.7,
      Type: 'Action/Comedy/Horror',
      Poster: 'https://iili.io/58oWrP.md.webp',
       page/Zombieland Double Tap 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.',
      duration: '1h 39m',
    },
    {
      Title: 'A Quiet Place',
      Year: 2018,
      Rate: 7.5,
      Type: 'Drama/Horror/Sci-Fi',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg',
       page/A Quiet Place 
      Trailer: 'https://www.youtu.be/WR7cc5t7tv8',
      synopsis:
        'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.',
      duration: '1h 30m',
    },
    {
      Title: 'After the Rain',
      Year: 2018,
      Rate: 6.7,
      Type: 'Drama/Romance/Sport',
      Poster: 'https://iili.io/YNZsus.md.webp',
       page/After the Rain 
      Trailer: 'https://www.youtu.be/kwAgjGzt5io',
      synopsis: 'A young student falls in love with her middle-aged boss.',
      duration: '1h 52m',
    },
    {
      Title: 'Alive',
      Year: 2018,
      Rate: 5.3,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/YOgHo7.md.webp',
       page/Alive18 
      Trailer: 'https://www.youtu.be/Krtm-73VDrs',
      synopsis:
        'A severely injured man and woman awake in an abandoned sanitarium only to discover that a sadistic caretaker holds the keys to their freedom and the horrific answers as to their real identity.',
      duration: '1h 31m',
    },
    {
      Title: 'Apostle',
      Year: 2018,
      Rate: 6.3,
      Type: 'Drama/Fantasy/Horror',
      Poster: 'https://iili.io/YOUytS.md.webp',
       page/Apostle 
      Trailer: 'https://www.youtu.be/J1JdWOqc9Q8',
      synopsis:
        'In 1905, a drifter on a dangerous mission to rescue his kidnapped sister tangles with a sinister religious cult on an isolated island.',
      duration: '2h 10m',
    },
    {
      Title: 'Bao',
      Year: 2018,
      Rate: 7.5,
      Type: 'Animation/Short/Drama',
      Poster: 'https://iili.io/YOUpN2.md.webp',
       page/Bao 
      Trailer: 'https://www.youtu.be/A1XWEmtsy8g',
      synopsis:
        'A Chinese-Canadian woman suffering from empty nest syndrome gets a second shot at motherhood when one of her handmade dumplings comes alive.',
      duration: '8m',
    },
    {
      Title: 'Bird Box',
      Year: 2018,
      Rate: 6.6,
      Type: 'Horror/Mystery/Sci-Fi',
      Poster: 'https://iili.io/YelZt2.md.webp',
       page/Bird Box 
      Trailer: 'https://www.youtu.be/o2AsIXSh2xo',
      synopsis:
        'Five Years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.',
      duration: '2h 4m',
    },
    {
      Title: 'Boo!',
      Year: 2018,
      Rate: 3.5,
      Type: 'Drama/Horror/Mystery',
      Poster: 'https://iili.io/YelLu4.md.webp',
       page/Boo 
      Trailer: 'https://www.youtu.be/QNuZbvpX4a4',
      synopsis:
        'A torn suburban family refuses to heed the warning of an innocent prank left upon them which causes an unknown supernatural force to wreak havoc.',
      duration: '1h 31m',
    },
    {
      Title: 'Crayon Shin-chan: Burst Serving! Kung Fu Boys - Ramen Rebellion',
      Year: 2018,
      Rate: 6.2,
      Type: 'Animation/Action/Adventure',
      Poster: 'https://iili.io/YelDnS.md.webp',
       page/Crayon Shin-chan 
      Trailer: 'https://www.youtu.be/hg-VrQiKLSQ',
      synopsis:
        'Shin-chan and the Kasukabe Defense Group are planning to perform an absolutely no-stunt Kung Fu challenge on the stage in Aiya Town, also known as the Chinatown of Kasukabe city.',
      duration: '1h 44m',
    },
    {
      Title: 'Crazy Rich Asians',
      Year: 2018,
      Rate: 6.9,
      Type: 'Comedy/Drama/Romance',
      Poster: 'https://iili.io/YelbM7.md.webp',
       page/Crazy Rich Asians 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.',
      duration: '2h',
    },
    {
      Title: 'Eerie',
      Year: 2018,
      Rate: 4.7,
      Type: 'Horror/Mystery/Thriller',
      Poster: 'https://iili.io/HC6mUZb.md.webp',
       page/Eerie 
      Trailer: 'https://www.youtu.be/XHHtvCft9IU',
      synopsis:
        'When a student's suicide rattles an all-girls Catholic school, a clairvoyant guidance counselor leans on a ghost to uncover the convent's abusive past.',
      duration: '1h 41m',
    },
    {
      Title: 'Every Day',
      Year: 2018,
      Rate: 6.4,
      Type: 'Drama/Fantasy/Romance',
      Poster: 'https://iili.io/YelmP9.md.webp',
       page/Every Day 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A shy teenager falls for a spirit who wakes up in the body of a different person every morning.',
      duration: '1h 37m',
    },
    {
      Title: 'Freaks',
      Year: 2018,
      Rate: 6.7,
      Type: 'Drama/Mystery/Sci-Fi',
      Poster: 'https://iili.io/HC6mpoJ.md.webp',
       page/Freaks 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A bold girl discovers a bizarre, threatening, and mysterious new world beyond her front door after she escapes her father's protective and paranoid control.',
      duration: '1h 45m',
    },
    {
      Title: 'Game Night',
      Year: 2018,
      Rate: 6.9,
      Type: 'Action/Adventure/Comedy',
      Poster: 'https://iili.io/Ye09cu.md.webp',
       page/Game Night 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters.',
      duration: '1h 40m',
    },
    {
      Title: 'Green Book',
      Year: 2018,
      Rate: 8.2,
      Type: 'Biography/Comedy/Drama',
      Poster: 'https://iili.io/Ye0H8b.md.webp',
       page/Green Book 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.',
      duration: '2h 10m',
    },
    {
      Title: 'Hex',
      Year: 2018,
      Rate: 4.1,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/HC6pF9t.md.webp',
       page/Hex 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A couple's holiday romance is thrown into chaos as they are afflicted by a malicious force.',
      duration: '1h 25m',
    },
    {
      Title: 'Inuyashiki',
      Year: 2018,
      Rate: 6.6,
      Type: 'Action/Drama/Mystery',
      Poster: 'https://iili.io/Ye02Ax.md.webp',
       page/Inuyashiki 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'An middle-aged office worker encounters aliens and is gifted with alien technology and limitless powers.',
      duration: '2h 7m',
    },
    {
      Title: 'Kasane',
      Year: 2018,
      Rate: 6.0,
      Type: 'Action/Drama/Fantasy',
      Poster: 'https://iili.io/Ye03wQ.md.webp',
       page/Kasane 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'An ugly but talented actress gains the power to copy the bodies of beautiful actresses temporarily. But how long can she maintain the facade?',
      duration: '1h 52m',
    },
    {
      Title: 'Kursk',
      Year: 2018,
      Rate: 6.6,
      Type: 'Action/Adventure/Drama',
      Poster: 'https://iili.io/Ye0FtV.md.webp',
       page/The Command 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'The 2000 K-141 Kursk submarine disaster is followed by governmental negligence. As the sailors fight for survival, their families desperately battle political obstacles and impossible odds to save them.',
      duration: '1h 57m',
    },
    {
      Title: 'Level 16',
      Year: 2018,
      Rate: 6.1,
      Type: 'Drama/Mystery/Sci-Fi',
      Poster: 'https://iili.io/YehR6l.md.webp',
       page/Level 16 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'In a highly regimented boarding school, a pair of students discover that things are not as they seem.',
      duration: '1h 42m',
    },
    {
      Title: 'Mid90s',
      Year: 2018,
      Rate: 7.3,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/Ye0foB.md.webp',
       page/Mid90s 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Follows Stevie, a thirteen-Year-old in 1990s-era Los Angeles who spends his summer navigating between his troubled home life and a group of new friends that he meets at a Motor Avenue skate shop.',
      duration: '1h 25m',
    },
    {
      Title: 'Mortal Engines',
      Year: 2018,
      Rate: 6.1,
      Type: 'Action/Adventure/Fantasy',
      Poster: 'https://iili.io/Ye0qMP.md.webp',
       page/Mortal Engines 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.',
      duration: '2h 8m',
    },
    {
      Title: 'My Little Monster',
      Year: 2018,
      Rate: 5.9,
      Type: 'Comedy/Drama/Romance',
      Poster: 'https://iili.io/Ye0BP1.md.webp',
       page/My Little Monster 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Haru is a trouble maker absentee. Shizuku is a frigid study geek. They may be a weird combination, but Haru is eager to cling to Shizuku.',
      duration: '1h 45m',
    },
    {
      Title: 'Next Gen',
      Year: 2018,
      Rate: 6.6,
      Type: 'Animation/Action/Adventure',
      Poster: 'https://iili.io/Ye0nKF.md.webp',
       page/Next Gen 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A friendship with a top-secret robot turns a lonely girl's life into a thrilling adventure as they take on bullies, evil bots and a scheming madman.',
      duration: '1h 46m',
    },
    {
      Title: 'Racetime',
      Year: 2018,
      Rate: 5.5,
      Type: 'Animation/Adventure/Musical',
      Poster: 'https://iili.io/Ye0ocg.md.webp',
       page/Racetime 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A spectacular sled race through the village. Frankie-Four-Eyes and his team, including Sophie as the driver, take on the newcomers: the mysterious and conceited Zac and his athletic cousin Charly. The fantastic sled designed by Frankie disintegrates right before crossing the finish line.',
      duration: '1h 29m',
    },
    {
      Title: 'Replicas',
      Year: 2018,
      Rate: 5.4,
      Type: 'Drama/Sci-Fi/Thriller',
      Poster: 'https://iili.io/Ye0xSa.md.webp',
       page/Replicas 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A scientist becomes obsessed with bringing back his family members who died in a traffic accident.',
      duration: '1h 47m',
    },
    {
      Title: 'Sgt. Stubby: An American Hero',
      Year: 2018,
      Rate: 6.9,
      Type: 'Animation/Adventure/Family',
      Poster: 'https://iili.io/Ye0IHJ.md.webp',
       page/Sgt Stubby An American Hero 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'The true story of a stray dog who joins his new master on the battlefields of the First World War. For his valorous actions, Sgt. Stubby is still recognized as the most decorated dog in American history.',
      duration: '1h 24m',
    },
    {
      Title: 'Smallfoot',
      Year: 2018,
      Rate: 6.6,
      Type: 'Animation/Adventure/Comedy',
      Poster: 'https://iili.io/Ye0TAv.md.webp',
       page/Smallfoot 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'High up on a mountain peak surrounded by clouds, a secret Yeti society lives in peace and harmony. One day, a Yeti witnesses an airplane crash; Inside lies Smallfoot, a legendary creature that will rock the society to its core.',
      duration: '1h 36m',
    },
    {
      Title: '#TemanTapiMenikah',
      Year: 2018,
      Rate: 6.7,
      Type: 'Biography/Comedy/Drama',
      Poster: 'https://iili.io/YelyFe.md.webp',
       page/FriendsButMarried 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Ayudia (Vanesha Prescilla) and Ditto (Adipati Dolken) have been best friends for 12 Years. And for all those times, Ditto has been secretly in love with her. Until one day, Ayudia told him that she's gonna get married.',
      duration: '1h 42m',
    },
    {
      Title: 'The Antique : Biblia Koshodô no Jiken Techô',
      Year: 2018,
      Rate: 5.5,
      Type: 'Drama/Mystery',
      Poster: 'https://iili.io/Ye0uNR.md.webp',
       page/Biblia Koshodô no Jiken Techô 
      Trailer: 'https://www.youtu.be/WkqCCMrNFfY',
      synopsis:
        'Kamakura south of Tokyo has a special book store, which is operated by Shioriko. She loves her books, her store and stocks rarities and specialties. Daisuke also works there. A stranger targets the store and seems to be after something specific. The two set out to find out what the figure is after and how they should protect themselves.',
      duration: '2h 1m',
    },
    {
      Title: 'The Final Wish',
      Year: 2018,
      Rate: 4.3,
      Type: 'Horror',
      Poster: 'https://iili.io/Ye0Atp.md.webp',
       page/The Final Wish 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'After the death of his father, Aaron returns home to help his grief-stricken mother and to confront his past. Going through his dad's belongings, he comes across a mysterious item that is more than it seems.',
      duration: '1h 35m',
    },
    {
      Title: 'The First Purge',
      Year: 2018,
      Rate: 5.2,
      Type: 'Action/Horror/Sci-Fi',
      Poster: 'https://iili.io/YkiBGp.md.webp',
       page/The First Purge 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'America's third political party, the New Founding Fathers of America, comes to power and conducts an experiment: no laws for 12 hours on Staten Island. No one has to stay on the island, but $5,000 is given to anyone who does.',
      duration: '1h 37m',
    },
    {
      Title: 'The Grinch',
      Year: 2018,
      Rate: 6.4,
      Type: 'Animation/Comedy/Family',
      Poster: 'https://iili.io/Ye05oN.md.webp',
       page/The Grinch 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A grumpy Grinch plots to ruin Christmas for the village of Whoville.',
      duration: '1h 25m',
    },
    {
      Title: 'The Nutcracker and the Four Realms',
      Year: 2018,
      Rate: 5.6,
      Type: 'Adventure/Family/Fantasy',
      Poster: 'https://iili.io/Ye0YPt.md.webp',
       page/The Nutcracker and the Four Realms 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A young girl is transported into a magical world of gingerbread soldiers and an army of mice.',
      duration: '1h 39m',
    },
    {
      Title: 'The Perfection',
      Year: 2018,
      Rate: 6.2,
      Type: 'Drama/Horror/Music',
      Poster: 'https://iili.io/Ye07VI.md.webp',
       page/The Perfection 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'When troubled musical prodigy Charlotte seeks out Elizabeth, the new star pupil of her former school, the encounter sends both musicians down a sinister path with shocking consequences.',
      duration: '1h 30m',
    },
    {
      Title: 'When I Get Home, My Wife Always Pretends to Be Dead.',
      Year: 2018,
      Rate: 6.3,
      Type: 'Comedy/Drama',
      Poster: 'https://iili.io/YelQwl.md.webp',
       page/When I Get Home 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A man posted questions to Yahoo Answers about his wife's eccentric behaviour, which became the basis for the story of the married couple.',
      duration: '1h 55m',
    },
    {
      Title: '47 Meters Down',
      Year: 2017,
      Rate: 5.6,
      Type: 'Adventure/Drama/Horror',
      Poster: 'https://iili.io/78nxaf.md.webp',
       page/47 Meters Down 
      Trailer: 'https://www.youtu.be/LBmBcASLdK8',
      synopsis:
        'Two sisters vacationing in Mexico are trapped in a shark cage at the bottom of the ocean. With less than an hour of oxygen left and great white sharks circling nearby, they must fight to survive.',
      duration: '1h 29m',
    },
    {
      Title: 'The 12th Man',
      Year: 2017,
      Rate: 7.3,
      Type: 'Drama/History/Thriller',
      Poster: 'https://iili.io/HC6m66Q.md.webp',
       page/The 12th Man 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'They were 12 saboteurs. The Nazis killed 11 of them. This is the true story of the one that got away.',
      duration: '2h 15m',
    },
    {
      Title: 'Split',
      Year: 2016,
      Rate: 7.3,
      Type: 'Horror/Thriller',
      Poster: 'https://iili.io/Hx9xre1.md.webp',
       page/Split 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.',
      duration: '1h 57m',
    },
    {
      Title: 'Survival Family',
      Year: 2016,
      Rate: 7.2,
      Type: 'Adventure/Comedy/Family',
      Poster: 'https://iili.io/HC6m4Mx.md.webp',
       page/Survival Family 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'TAfter a sudden worldwide power cut, a Tokyo family are caught up in the chaos as millions traverse the country in search of electricity.',
      duration: '1h 57m',
    },
    {
      Title: 'Forget Me Not',
      Year: 2015,
      Rate: 6.6,
      Type: 'Drama/Romance',
      Poster: 'https://iili.io/Hx9RW5Q.md.webp',
       page/Forget Me Not 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'This film tells the story of a high school student named Takashi (Murakami Nijiro) who falls in love at first sight with a girl along Azusa (Akari Hayami), and then they started dating. One day, Azusa made a strange confession by telling Takashi that everyone including his family will forget about him a few hours after the meeting.',
      duration: '1h 34m',
    },
    {
      Title: 'The Beauty Inside',
      Year: 2015,
      Rate: 7.3,
      Type: 'Drama/Fantasy/Romance',
      Poster: 'https://iili.io/HoORcUg.md.webp',
       page/The Beauty Inside 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A South Korean has a different person's body, changing every morning to a body borrowed for a day - man, woman, old, child and sometimes a foreigner. He works as furniture designer. He loves a girl. She loves him for the beauty inside.',
      duration: '2h 7m',
    },
    {
      Title: 'Hector and the Search for Happiness',
      Year: 2014,
      Rate: 6.9,
      Type: 'Adventure/Comedy/Drama',
      Poster: 'https://iili.io/Hohk3J4.md.webp',
       page/Hector and the Search for Happiness 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A psychiatrist searches the globe to find the secret of happiness.',
      duration: '1h 54m',
    },
    {
      Title: 'Starbuck',
      Year: 2011,
      Rate: 7.2,
      Type: 'Comedy/Drama/Romance',
      Poster: 'https://iili.io/HC6mv99.md.webp',
       page/Starbuck 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'As his lover announces her pregnancy, a fortysomething slacker receives other life-changing news: 142 people, all of them the result of artificial insemination, have filed a class action lawsuit against him, their biological father.',
      duration: '1h 49m',
    },
    {
      Title: 'Blue Valentine',
      Year: 2010,
      Rate: 7.3,
      Type: 'Drama/Romance',
      Poster: 'https://iili.io/HYrPMxt.md.webp',
       page/Blue Valentine 
      Trailer: 'https://www.youtu.be/aILx69WrRhQ',
      synopsis:
        'The relationship of a contemporary married couple, charting their evolution over a span of Years by cross-cutting between time periods.',
      duration: '1h 52m',
    },
    {
      Title: 'Revolutionary Road',
      Year: 2008,
      Rate: 7.3,
      Type: 'Drama/Romance',
      Poster: 'https://iili.io/HYr6fvp.md.webp',
       page/Revolutionary Road 
      Trailer: 'https://www.youtu.be/BLM1naCfME',
      synopsis:
        'A young couple living in a Connecticut suburb during the mid-1950s struggle to come to terms with their personal problems while trying to raise their two children.',
      duration: '1h 59m',
    },
    // Add more movies as desired
  ];
  