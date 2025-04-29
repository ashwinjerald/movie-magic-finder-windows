
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import FilterPanel from "@/components/FilterPanel";
import MovieGrid from "@/components/MovieGrid";
import MovieDetails from "@/components/MovieDetails";
import { getAllMovies, filterMovies, searchMovies, getRecommendations } from "@/utils/movieData";
import { MovieDetails as MovieDetailsType, MovieFilterParams, RecommendedMovie } from "@/types/movie";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [movies, setMovies] = useState<MovieDetailsType[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MovieDetailsType[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetailsType | null>(null);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [recommendedMovies, setRecommendedMovies] = useState<RecommendedMovie[]>([]);
  const [showingRecommendations, setShowingRecommendations] = useState(false);
  const { toast } = useToast();

  // Initialize with all movies
  useEffect(() => {
    const allMovies = getAllMovies();
    setMovies(allMovies);
    setFilteredMovies(allMovies);
  }, []);

  const handleMovieSelect = (movie: MovieDetailsType) => {
    setSelectedMovie(movie);
    setShowMovieDetails(true);
  };

  const handleCloseMovieDetails = () => {
    setShowMovieDetails(false);
  };

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      // If search query is empty, reset to showing filtered movies or all movies
      setFilteredMovies(movies);
      setShowingRecommendations(false);
      return;
    }

    const results = searchMovies(query);
    setFilteredMovies(results);
    setShowingRecommendations(false);
    
    toast({
      title: `Found ${results.length} movies matching "${query}"`,
      duration: 2000,
    });
  };

  const handleApplyFilters = (filters: MovieFilterParams) => {
    const filtered = filterMovies(
      filters.genres,
      filters.minRating,
      filters.yearRange
    );
    
    setFilteredMovies(filtered);
    setShowingRecommendations(false);
    
    toast({
      title: `Showing ${filtered.length} movies matching your filters`,
      duration: 2000,
    });
  };

  const handleGetRecommendations = (movie: MovieDetailsType) => {
    const recommendations = getRecommendations(movie, 10);
    setRecommendedMovies(recommendations);
    setShowingRecommendations(true);
    setShowMovieDetails(false);
    
    toast({
      title: `Showing movies similar to "${movie.title}"`,
      description: "Based on genre, rating, and release year",
      duration: 3000,
    });
    
    // Scroll to recommendations section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header onSearch={handleSearch} />
      
      <main className="container mx-auto px-4 py-6">
        {showingRecommendations && recommendedMovies.length > 0 && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                Movies Similar to "{selectedMovie?.title}"
              </h2>
              <button 
                onClick={() => {
                  setShowingRecommendations(false);
                  setFilteredMovies(movies);
                }}
                className="text-sm text-gray-400 hover:text-white"
              >
                Back to All Movies
              </button>
            </div>
            <MovieGrid 
              movies={recommendedMovies} 
              onMovieSelect={handleMovieSelect}
              showSimilarityScore={true} 
            />
            <hr className="border-gray-800 my-8" />
          </>
        )}

        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:w-1/4 lg:w-1/5 mb-6 md:mb-0">
            <FilterPanel onApplyFilters={handleApplyFilters} />
          </div>
          
          <div className="md:w-3/4 lg:w-4/5">
            <h2 className="text-2xl font-bold mb-4">
              {showingRecommendations ? "All Movies" : "Popular Movies"}
            </h2>
            <MovieGrid 
              movies={filteredMovies} 
              onMovieSelect={handleMovieSelect} 
            />
          </div>
        </div>

        {/* Movie details modal */}
        <MovieDetails 
          movie={selectedMovie}
          isOpen={showMovieDetails}
          onClose={handleCloseMovieDetails}
          onGetRecommendations={handleGetRecommendations}
        />
      </main>
      
      <footer className="py-6 bg-[#0B0B0B] text-center text-gray-400">
        <p>MovieMagicFinder © {new Date().getFullYear()} - Made with React & TypeScript</p>
      </footer>
    </div>
  );
};

export default Index;
