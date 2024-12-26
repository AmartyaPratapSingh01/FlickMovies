import { Star } from 'lucide-react';
import type { Movie } from '../../types/movie';

interface ReviewListProps {
  reviews: Movie['reviews'];
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="font-medium">{review.user}</span>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm">{review.rating}</span>
                </div>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}