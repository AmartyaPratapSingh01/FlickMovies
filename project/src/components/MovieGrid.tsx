import { useState } from 'react';
import { MovieCard } from './MovieCard';
import { movieCategories } from '../data/movieCategories';
import type { Movie } from '../types/movie';

interface MovieGridProps {
  movies: Movie[];
  onMovieSelect: (movieId: string) => void;
}

export function MovieGrid({ movies, onMovieSelect }: MovieGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredMovies = selectedCategory
    ? movies.filter(movie => movie.genre.includes(selectedCategory))
    : movies;

  return (
    <div>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${!selectedCategory 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
            }`}
        >
          All
        </button>
        {Object.values(movieCategories).map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
              ${selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMovies.map(movie => (
          <div
            key={movie.id}
            onClick={() => onMovieSelect(movie.id)}
            className="cursor-pointer"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}