
import { MovieDetails, RecommendedMovie } from "@/types/movie";

// Top-rated movies dataset (simplified)
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
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
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
];

// User preferences mock (will be replaced by user input in the real app)
let userPreferences = {
  genres: [] as string[],
  ratingThreshold: 8.5,
  yearRange: { start: 1970, end: 2025 }
};

// Get unique genres from the dataset
export const getUniqueGenres = (): string[] => {
  const allGenres = new Set<string>();
  moviesData.forEach(movie => {
    movie.genre.forEach(g => allGenres.add(g));
  });
  return Array.from(allGenres).sort();
};

// Get year range
export const getYearRange = (): { min: number; max: number } => {
  const years = moviesData.map(movie => movie.year);
  return {
    min: Math.min(...years),
    max: Math.max(...years)
  };
};

// Filter movies based on genre and rating
export const filterMovies = (
  genres: string[] = [], 
  minRating: number = 0,
  yearRange: { start: number; end: number } = { start: 1900, end: 2030 }
): MovieDetails[] => {
  if (!genres.length) {
    return moviesData.filter(
      movie => movie.rating >= minRating && 
      movie.year >= yearRange.start && 
      movie.year <= yearRange.end
    );
  }

  return moviesData.filter(movie => {
    // Check if any of the movie's genres match the selected genres
    const genreMatch = movie.genre.some(g => genres.includes(g));
    const ratingMatch = movie.rating >= minRating;
    const yearMatch = movie.year >= yearRange.start && movie.year <= yearRange.end;
    
    return genreMatch && ratingMatch && yearMatch;
  });
};

// Update user preferences
export const updatePreferences = (
  genres: string[] = [], 
  rating: number = 8.5,
  years: { start: number; end: number } = { start: 1970, end: 2025 }
) => {
  userPreferences = {
    genres,
    ratingThreshold: rating,
    yearRange: years
  };
};

// Get all movies
export const getAllMovies = (): MovieDetails[] => {
  return moviesData;
};

// Get movie by ID
export const getMovieById = (id: number): MovieDetails | undefined => {
  return moviesData.find(movie => movie.id === id);
};

// Collaborative filtering recommendation system
// This is a simplified version that recommends movies based on genre similarity
export const getRecommendations = (
  movie: MovieDetails, 
  count: number = 5
): RecommendedMovie[] => {
  // Get all other movies (excluding the selected one)
  const otherMovies = moviesData.filter(m => m.id !== movie.id);
  
  // Calculate similarity scores
  const moviesWithScores = otherMovies.map(otherMovie => {
    // Genre similarity (count common genres)
    const commonGenres = movie.genre.filter(g => otherMovie.genre.includes(g));
    const genreScore = commonGenres.length / Math.max(movie.genre.length, otherMovie.genre.length);
    
    // Rating similarity (normalized distance)
    const ratingDiff = Math.abs(movie.rating - otherMovie.rating) / 10;
    const ratingScore = 1 - ratingDiff;
    
    // Year similarity (normalized distance within 30 years)
    const yearDiff = Math.abs(movie.year - otherMovie.year) / 30;
    const yearScore = 1 - Math.min(1, yearDiff);
    
    // Combined score (weighted)
    const score = genreScore * 0.6 + ratingScore * 0.3 + yearScore * 0.1;
    
    return {
      ...otherMovie,
      similarityScore: parseFloat(score.toFixed(2))
    };
  });
  
  // Sort by similarity score and return the top 'count' movies
  return moviesWithScores
    .sort((a, b) => b.similarityScore - a.similarityScore)
    .slice(0, count);
};

// Search movies by title
export const searchMovies = (query: string): MovieDetails[] => {
  if (!query || query.trim() === "") return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return moviesData.filter(movie => 
    movie.title.toLowerCase().includes(normalizedQuery)
  );
};
