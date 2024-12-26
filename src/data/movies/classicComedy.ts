import { movieCategories as c } from '../movieCategories';
import type { Movie } from '../../types/movie';

export const classicComedy: Movie[] = [
  {
    id: 'comedy-1',
    title: 'His Girl Friday',
    year: 1940,
    genre: [c.COMEDY, c.ROMANCE],
    description: 'A newspaper editor uses every trick in the book to keep his ace reporter ex-wife from remarrying.',
    rating: 4.6,
    posterUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',
    downloadOptions: [
      { resolution: '720p', size: '900MB', url: '#' },
      { resolution: '1080p', size: '1.7GB', url: '#' }
    ],
    reviews: []
  }
];