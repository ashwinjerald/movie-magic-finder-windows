
import { useState, useEffect } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getUniqueGenres, getYearRange } from "@/utils/movieData";
import { MovieFilterParams } from "@/types/movie";

interface FilterPanelProps {
  onApplyFilters: (filters: MovieFilterParams) => void;
}

const FilterPanel = ({ onApplyFilters }: FilterPanelProps) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(7.0);
  const [yearRange, setYearRange] = useState<[number, number]>([1950, 2023]);
  const [availableGenres, setAvailableGenres] = useState<string[]>([]);
  const [yearBoundaries, setYearBoundaries] = useState({ min: 1950, max: 2023 });
  
  useEffect(() => {
    // Get available genres
    const genres = getUniqueGenres();
    setAvailableGenres(genres);
    
    // Get year range
    const range = getYearRange();
    setYearBoundaries(range);
    setYearRange([range.min, range.max]);
  }, []);

  const handleGenreChange = (genre: string, checked: boolean) => {
    if (checked) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      setSelectedGenres(selectedGenres.filter(g => g !== genre));
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      genres: selectedGenres,
      minRating: minRating,
      yearRange: {
        start: yearRange[0],
        end: yearRange[1]
      }
    });
  };

  return (
    <div className="bg-[#1a1a1a] rounded-md p-4 mb-6">
      <h3 className="text-xl font-bold text-white mb-4">Filter Movies</h3>
      
      <Accordion type="single" collapsible defaultValue="genres" className="w-full">
        <AccordionItem value="genres">
          <AccordionTrigger className="text-white">Genres</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              {availableGenres.map(genre => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`genre-${genre}`} 
                    checked={selectedGenres.includes(genre)}
                    onCheckedChange={(checked) => handleGenreChange(genre, checked === true)}
                  />
                  <Label htmlFor={`genre-${genre}`} className="text-gray-300">
                    {genre}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="rating">
          <AccordionTrigger className="text-white">Minimum Rating</AccordionTrigger>
          <AccordionContent>
            <div className="px-2">
              <div className="mb-2 flex justify-between">
                <span className="text-gray-300 text-sm">Rating: {minRating.toFixed(1)}</span>
              </div>
              <Slider 
                min={0}
                max={10}
                step={0.1}
                defaultValue={[minRating]}
                value={[minRating]} 
                onValueChange={(value) => setMinRating(value[0])}
              />
              <div className="mt-2 flex justify-between text-xs text-gray-400">
                <span>0</span>
                <span>10</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="year">
          <AccordionTrigger className="text-white">Year Range</AccordionTrigger>
          <AccordionContent>
            <div className="px-2">
              <div className="mb-2 flex justify-between">
                <span className="text-gray-300 text-sm">
                  From {yearRange[0]} to {yearRange[1]}
                </span>
              </div>
              <Slider 
                min={yearBoundaries.min}
                max={yearBoundaries.max}
                step={1}
                value={yearRange} 
                onValueChange={(value) => setYearRange([value[0], value[1]])}
              />
              <div className="mt-2 flex justify-between text-xs text-gray-400">
                <span>{yearBoundaries.min}</span>
                <span>{yearBoundaries.max}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button 
        className="w-full mt-6 bg-[#E50914] hover:bg-[#E50914]/90 text-white"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default FilterPanel;
