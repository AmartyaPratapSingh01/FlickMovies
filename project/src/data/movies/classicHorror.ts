import { movieCategories as c } from '../movieCategories';
import type { Movie } from '../../types/movie';

export const classicHorror: Movie[] = [
  {
    id: 'horror-1',
    title: 'Nosferatu',
    year: 1922,
    genre: [c.HORROR],
    description: 'Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter\'s wife.',
    rating: 4.8,
    posterUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80',
    downloadOptions: [
      { resolution: '720p', size: '850MB', url: '#' },
      { resolution: '1080p', size: '1.6GB', url: '#' }
    ],
    reviews: []
  }
];