import { useEffect, useState } from 'react';
import type { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard';
import { movies } from '../../data/movies';

interface RelatedMoviesProps {
  movieId: string;
  genre: string;
}

export function RelatedMovies({ movieId, genre }: RelatedMoviesProps) {
  const [relatedMovies, setRelatedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    const related = movies
      .filter(movie => movie.id !== movieId && movie.genre.includes(genre))
      .slice(0, 4);
    setRelatedMovies(related);
  }, [movieId, genre]);

  if (relatedMovies.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Related Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}