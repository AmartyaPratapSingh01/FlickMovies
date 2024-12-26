export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string[];
  description: string;
  rating: number;
  posterUrl: string;
  downloadOptions: {
    resolution: string;
    size: string;
    url: string;
  }[];
  reviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}