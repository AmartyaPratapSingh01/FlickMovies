import { MovieGrid } from '../components/MovieGrid';
import { movies } from '../data/movies';

interface MoviesPageProps {
  onMovieSelect: (movieId: string) => void;
}

export function MoviesPage({ onMovieSelect }: MoviesPageProps) {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">All Movies</h1>
      <MovieGrid
        movies={movies}
        onMovieSelect={onMovieSelect}
      />
    </div>
  );
}