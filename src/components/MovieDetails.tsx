
import { Dialog, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarIcon, X } from "lucide-react";
import { MovieDetails as MovieDetailsType } from "@/types/movie";

interface MovieDetailsProps {
  movie: MovieDetailsType | null;
  isOpen: boolean;
  onClose: () => void;
  onGetRecommendations: (movie: MovieDetailsType) => void;
}

const MovieDetails = ({ 
  movie, 
  isOpen, 
  onClose,
  onGetRecommendations 
}: MovieDetailsProps) => {
  if (!movie) return null;

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-3xl h-auto p-0 bg-[#121212] text-white overflow-hidden">
        <div className="relative">
          <img 
            src={movie.poster} 
            alt={movie.title}
            className="w-full h-64 object-cover object-top"
          />
          <Button 
            variant="outline" 
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#121212] to-transparent h-16" />
        </div>
        
        <DialogHeader className="px-6 pt-2 pb-0">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <div className="flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="font-semibold">{movie.rating}</span>
            </div>
          </div>
          <DialogDescription className="text-gray-300 flex flex-wrap items-center gap-2 mt-1">
            <span className="font-medium">{movie.year}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span>Dir: {movie.director}</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="px-6 py-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genre.map((genre, index) => (
              <Badge key={index} className="bg-[#E50914]/90 text-white border-none">
                {genre}
              </Badge>
            ))}
          </div>
          <p className="text-gray-300 mb-6">{movie.plot}</p>
          <Button 
            className="w-full bg-[#E50914] hover:bg-[#E50914]/90 text-white"
            onClick={() => onGetRecommendations(movie)}
          >
            Find Similar Movies
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetails;
