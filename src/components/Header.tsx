
import { Film } from "lucide-react";
import SearchBar from "./SearchBar";
import { getMovieStats } from "@/utils/movieData";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const stats = getMovieStats();
  
  return (
    <header className="py-4 px-4 sm:px-6 md:px-8 bg-[#121212] sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <Film className="h-8 w-8 text-[#E50914] mr-2" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">
              MovieMagic<span className="text-[#E50914]">Finder</span>
            </h1>
            <p className="text-xs text-gray-400">
              {stats.totalMovies} movies | {stats.genreCount} genres | {stats.yearRange.min}-{stats.yearRange.max}
            </p>
          </div>
        </div>
        <div className="w-full max-w-md">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </header>
  );
};

export default Header;
