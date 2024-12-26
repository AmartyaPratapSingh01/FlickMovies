import { Download, Star } from 'lucide-react';
import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{movie.rating}</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-2">
          {movie.year} • {movie.genre.join(', ')}
        </div>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {movie.description}
        </p>
        <div className="flex justify-between items-center">
          <button className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Download className="h-4 w-4 mr-1" />
            Download
          </button>
          <span className="text-sm text-gray-500">
            {movie.downloadOptions[0].resolution}
          </span>
        </div>
      </div>
    </div>
  );
}