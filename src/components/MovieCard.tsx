
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";
import { MovieDetails } from "@/types/movie";

interface MovieCardProps {
  movie: MovieDetails;
  onClick?: () => void;
  showScore?: boolean;
  score?: number;
}

const MovieCard = ({ movie, onClick, showScore, score }: MovieCardProps) => {
  return (
    <Card 
      className="overflow-hidden transition-transform hover:scale-105 cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative pb-[150%]">
        <img 
          src={movie.poster} 
          alt={`${movie.title} poster`} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {showScore && score !== undefined && (
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm">
            {score * 100}% Match
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent py-3 px-3">
          <h3 className="text-white font-semibold line-clamp-2">{movie.title}</h3>
        </div>
      </div>
      <CardContent className="p-3 flex-grow flex flex-col justify-between bg-black/80">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-sm">{movie.year}</span>
            <div className="flex items-center">
              <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-white text-sm">{movie.rating}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {movie.genre.slice(0, 2).map((g, i) => (
              <Badge key={i} variant="outline" className="text-xs bg-transparent">
                {g}
              </Badge>
            ))}
            {movie.genre.length > 2 && (
              <Badge variant="outline" className="text-xs bg-transparent">
                +{movie.genre.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
