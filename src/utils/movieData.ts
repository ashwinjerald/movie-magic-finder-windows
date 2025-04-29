import { MovieDetails, RecommendedMovie } from "@/types/movie";

// Top-rated movies dataset (expanded)
const moviesData: MovieDetails[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: ["Drama"],
    rating: 9.3,
    director: "Frank Darabont",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: ["Crime", "Drama"],
    rating: 9.2,
    director: "Francis Ford Coppola",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    director: "Christopher Nolan",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
  },
  {
    id: 4,
    title: "The Godfather Part II",
    year: 1974,
    genre: ["Crime", "Drama"],
    rating: 9.0,
    director: "Francis Ford Coppola",
    plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 5,
    title: "12 Angry Men",
    year: 1957,
    genre: ["Crime", "Drama"],
    rating: 9.0,
    director: "Sidney Lumet",
    plot: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
  },
  {
    id: 6,
    title: "Schindler's List",
    year: 1993,
    genre: ["Biography", "Drama", "History"],
    rating: 9.0,
    director: "Steven Spielberg",
    plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    id: 7,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    genre: ["Action", "Adventure", "Drama"],
    rating: 9.0,
    director: "Peter Jackson",
    plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 8,
    title: "Pulp Fiction",
    year: 1994,
    genre: ["Crime", "Drama"],
    rating: 8.9,
    director: "Quentin Tarantino",
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 9,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.8,
    director: "Christopher Nolan",
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
  },
  {
    id: 10,
    title: "Fight Club",
    year: 1999,
    genre: ["Drama"],
    rating: 8.8,
    director: "David Fincher",
    plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YzVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 11,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    rating: 8.8,
    director: "Robert Zemeckis",
    plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
  },
  {
    id: 12,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    rating: 8.7,
    director: "Lana Wachowski, Lilly Wachowski",
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    id: 13,
    title: "Goodfellas",
    year: 1990,
    genre: ["Biography", "Crime", "Drama"],
    rating: 8.7,
    director: "Martin Scorsese",
    plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    poster: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 14,
    title: "One Flew Over the Cuckoo's Nest",
    year: 1975,
    genre: ["Drama"],
    rating: 8.7,
    director: "Milos Forman",
    plot: "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
  },
  {
    id: 15,
    title: "Interstellar",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    director: "Christopher Nolan",
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    id: 16,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.6,
    director: "Jonathan Demme",
    plot: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    id: 17,
    title: "Saving Private Ryan",
    year: 1998,
    genre: ["Drama", "War"],
    rating: 8.6,
    director: "Steven Spielberg",
    plot: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg"
  },
  {
    id: 18,
    title: "City of God",
    year: 2002,
    genre: ["Crime", "Drama"],
    rating: 8.6,
    director: "Fernando Meirelles, Kátia Lund",
    plot: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    poster: "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 19,
    title: "Life Is Beautiful",
    year: 1997,
    genre: ["Comedy", "Drama", "Romance"],
    rating: 8.6,
    director: "Roberto Benigni",
    plot: "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    poster: "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
  },
  {
    id: 20,
    title: "Spirited Away",
    year: 2001,
    genre: ["Animation", "Adventure", "Family"],
    rating: 8.6,
    director: "Hayao Miyazaki",
    plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    id: 21,
    title: "Parasite",
    year: 2019,
    genre: ["Comedy", "Drama", "Thriller"],
    rating: 8.5,
    director: "Bong Joon Ho",
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
  },
  {
    id: 22,
    title: "Joker",
    year: 2019,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    director: "Todd Phillips",
    plot: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    id: 23,
    title: "Avengers: Endgame",
    year: 2019,
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.4,
    director: "Anthony Russo, Joe Russo",
    plot: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
  },
  {
    id: 24,
    title: "Whiplash",
    year: 2014,
    genre: ["Drama", "Music"],
    rating: 8.5,
    director: "Damien Chazelle",
    plot: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    id: 25,
    title: "A Clockwork Orange",
    year: 1971,
    genre: ["Crime", "Drama", "Sci-Fi"],
    rating: 8.3,
    director: "Stanley Kubrick",
    plot: "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_.jpg"
  },
  {
    id: 26,
    title: "Get Out",
    year: 2017,
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 7.7,
    director: "Jordan Peele",
    plot: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg"
  },
  {
    id: 27,
    title: "La La Land",
    year: 2016,
    genre: ["Comedy", "Drama", "Music"],
    rating: 8.0,
    director: "Damien Chazelle",
    plot: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg"
  },
  {
    id: 28,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genre: ["Drama", "Romance", "Sci-Fi"],
    rating: 8.3,
    director: "Michel Gondry",
    plot: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg"
  },
  {
    id: 29,
    title: "Blade Runner 2049",
    year: 2017,
    genre: ["Action", "Drama", "Mystery"],
    rating: 8.0,
    director: "Denis Villeneuve",
    plot: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg"
  },
  {
    id: 30,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: ["Adventure", "Comedy", "Crime"],
    rating: 8.1,
    director: "Wes Anderson",
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjMxMDIzMTE@._V1_.jpg"
  },
  {
    id: 31,
    title: "The Departed",
    year: 2006,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.5,
    director: "Martin Scorsese",
    plot: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg"
  },
  {
    id: 32,
    title: "Your Name",
    year: 2016,
    genre: ["Animation", "Drama", "Fantasy"],
    rating: 8.4,
    director: "Makoto Shinkai",
    plot: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    poster: "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_.jpg"
  },
  {
    id: 33,
    title: "1917",
    year: 2019,
    genre: ["Action", "Drama", "War"],
    rating: 8.2,
    director: "Sam Mendes",
    plot: "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    poster: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg"
  },
  {
    id: 34,
    title: "Drive",
    year: 2011,
    genre: ["Action", "Drama"],
    rating: 7.8,
    director: "Nicolas Winding Refn",
    plot: "A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver and finds himself in trouble when he helps out his neighbor.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_.jpg"
  },
  {
    id: 35,
    title: "Black Swan",
    year: 2010,
    genre: ["Drama", "Thriller"],
    rating: 8.0,
    director: "Darren Aronofsky",
    plot: "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's 'Swan Lake'.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_.jpg"
  },
  {
    id: 36,
    title: "The Lighthouse",
    year: 2019,
    genre: ["Drama", "Fantasy", "Horror"],
    rating: 7.4,
    director: "Robert Eggers",
    plot: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
    poster: "https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    id: 37,
    title: "Hereditary",
    year: 2018,
    genre: ["Drama", "Horror", "Mystery"],
    rating: 7.3,
    director: "Ari Aster",
    plot: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
    poster: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg"
  },
  {
    id: 38,
    title: "The Social Network",
    year: 2010,
    genre: ["Biography", "Drama"],
    rating: 7.7,
    director: "David Fincher",
    plot: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
    poster: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    id: 39,
    title: "Prisoners",
    year: 2013,
    genre: ["Crime", "Drama", "Mystery"],
    rating: 8.1,
    director: "Denis Villeneuve",
    plot: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg"
  },
  {
    id: 40,
    title: "No Country for Old Men",
    year: 2007,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.2,
    director: "Ethan Coen, Joel Coen",
    plot: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg"
  },
  {
    id: 41,
    title: "Oppenheimer",
    year: 2023,
    genre: ["Biography", "Drama", "History"],
    rating: 8.4,
    director: "Christopher Nolan",
    plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
  },
  {
    id: 42,
    title: "Barbie",
    year: 2023,
    genre: ["Adventure", "Comedy", "Fantasy"],
    rating: 7.0,
    director: "Greta Gerwig",
    plot: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    poster: "https://m.media-amazon.com/images/M/MV5BNjZmYTk1MTktMDZlZS00ZGY0LTliMGEtOGU4NjQ4NTMzZDVhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    id: 43,
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: ["Action", "Adventure", "Comedy"],
    rating: 7.9,
    director: "Daniel Kwan, Daniel Scheinert",
    plot: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    poster: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg"
  },
  {
    id: 44,
    title: "Top Gun: Maverick",
    year: 2022,
    genre: ["Action", "Drama"],
    rating: 8.3,
    director: "Joseph Kosinski",
    plot: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
    poster: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  },
  {
    id: 45,
    title: "The Batman",
    year: 2022,
    genre: ["Action", "Crime", "Drama"],
    rating: 7.8,
    director: "Matt Reeves",
    plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtYzk4YTMwZjFmNzlkXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"
  },
  {
    id: 46,
    title: "Dune",
    year: 2021,
    genre: ["Action", "Adventure", "Drama"],
    rating: 8.0,
    director: "Denis Villeneuve",
    plot: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    id: 47,
    title: "A Quiet Place",
    year: 2018,
    genre: ["Drama", "Horror", "Sci-Fi"],
    rating: 7.5,
    director: "John Krasinski",
    plot: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM
