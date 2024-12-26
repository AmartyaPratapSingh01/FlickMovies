import { classicDrama } from './classicDrama';
import { classicHorror } from './classicHorror';
import { classicComedy } from './classicComedy';
import type { Movie } from '../../types/movie';

// Combine all movie collections
export const movies: Movie[] = [
  ...classicDrama,
  ...classicHorror,
  ...classicComedy,
  // Add more movie collections here
];