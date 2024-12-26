import { movieCategories as c } from '../movieCategories';
import type { Movie } from '../../types/movie';

export const classicDrama: Movie[] = [
  {
    id: 'drama-1',
    title: 'The Kid',
    year: 1921,
    genre: [c.DRAMA, c.COMEDY],
    description: 'A tramp cares for an abandoned child, but events put their relationship in jeopardy. Charlie Chaplin\'s first full-length film as a director.',
    rating: 4.7,
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80',
    downloadOptions: [
      { resolution: '720p', size: '800MB', url: '#' },
      { resolution: '1080p', size: '1.5GB', url: '#' }
    ],
    reviews: []
  },
  {
    id: 'drama-2',
    title: 'The Last Man on Earth',
    year: 1964,
    genre: [c.SCIFI, c.HORROR, c.DRAMA],
    description: 'Dr. Robert Morgan is the only survivor of a devastating world-wide plague that turns humans into vampire-like creatures.',
    rating: 4.2,
    posterUrl: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80',
    downloadOptions: [
      { resolution: '720p', size: '900MB', url: '#' },
      { resolution: '1080p', size: '1.7GB', url: '#' }
    ],
    reviews: []
  }
];