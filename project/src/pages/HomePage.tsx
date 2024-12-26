import { MovieCarousel } from '../components/home/MovieCarousel';
import { movies } from '../data/movies';

interface HomePageProps {
  onMovieSelect: (movieId: string) => void;
}

export function HomePage({ onMovieSelect }: HomePageProps) {
  return (
    <div>
      <MovieCarousel
        movies={movies}
        onMovieSelect={onMovieSelect}
      />
    </div>
  );
}