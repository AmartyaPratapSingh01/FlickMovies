import { Star, Download, Clock, Calendar } from 'lucide-react';
import type { Movie } from '../../types/movie';
import { ReviewList } from './ReviewList';
import { RelatedMovies } from './RelatedMovies';

interface MovieDetailsProps {
  movie: Movie;
  onDownload: (resolution: string) => void;
}

export function MovieDetails({ movie, onDownload }: MovieDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-lg">{movie.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {movie.year}
            </div>
            <div>{movie.genre.join(', ')}</div>
          </div>

          <p className="text-gray-700 mb-6">{movie.description}</p>

          <div className="space-y-3">
            {movie.downloadOptions.map(option => (
              <button
                key={option.resolution}
                onClick={() => onDownload(option.resolution)}
                className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <div className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  <span>{option.resolution}</span>
                </div>
                <span className="text-gray-600">{option.size}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ReviewList reviews={movie.reviews} />
      </div>

      <div className="mt-8">
        <RelatedMovies movieId={movie.id} genre={movie.genre[0]} />
      </div>
    </div>
  );
}