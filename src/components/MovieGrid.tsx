
import { MovieDetails, RecommendedMovie } from "@/types/movie";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: (MovieDetails | RecommendedMovie)[];
  onMovieSelect: (movie: MovieDetails) => void;
  showSimilarityScore?: boolean;
}

const MovieGrid = ({ 
  movies, 
  onMovieSelect, 
  showSimilarityScore = false 
}: MovieGridProps) => {
  if (!movies.length) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-400">No movies found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-6">
      {movies.map((movie) => {
        const hasScore = "similarityScore" in movie && showSimilarityScore;
        return (
          <MovieCard 
            key={movie.id}
            movie={movie}
            onClick={() => onMovieSelect(movie)}
            showScore={hasScore}
            score={hasScore ? (movie as RecommendedMovie).similarityScore : undefined}
          />
        );
      })}
    </div>
  );
};

export default MovieGrid;
