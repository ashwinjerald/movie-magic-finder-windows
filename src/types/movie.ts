
export interface MovieDetails {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  plot: string;
  poster: string;
}

export interface RecommendedMovie extends MovieDetails {
  similarityScore: number;
}

export interface MovieFilterParams {
  genres: string[];
  minRating: number;
  yearRange: {
    start: number;
    end: number;
  };
  page?: number;
  pageSize?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalPages: number;
  currentPage: number;
  totalResults?: number;
}

