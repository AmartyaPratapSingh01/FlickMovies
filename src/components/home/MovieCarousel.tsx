import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Movie } from '../../types/movie';

interface MovieCarouselProps {
  movies: Movie[];
  onMovieSelect: (movieId: string) => void;
}

export function MovieCarousel({ movies, onMovieSelect }: MovieCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 2 >= movies.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 2 < 0 ? movies.length - 2 : prev - 2));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const visibleMovies = [
    movies[currentIndex],
    movies[currentIndex + 1]
  ].filter(Boolean);

  return (
    <div className="relative overflow-hidden bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="flex gap-6 transition-transform duration-500 ease-in-out">
            {visibleMovies.map((movie) => (
              <div
                key={movie.id}
                className="w-1/2 cursor-pointer"
                onClick={() => onMovieSelect(movie.id)}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{movie.title}</h3>
                    <div className="flex items-center text-sm mb-2">
                      <span className="mr-2">{movie.year}</span>
                      <span>•</span>
                      <span className="ml-2">{movie.genre.join(', ')}</span>
                    </div>
                    <p className="line-clamp-2 text-gray-200">{movie.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            disabled={isTransitioning}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: Math.ceil(movies.length / 2) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * 2)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentIndex / 2) === i
                    ? 'bg-white'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}