export interface User {
  id: string;
  email: string;
  username: string;
  joinedDate: string;
  downloadHistory: {
    movieId: string;
    downloadDate: string;
    resolution: string;
  }[];
}