import { useState, useEffect } from 'react';
import type { User } from '../types/user';

export function useDownloadTracking(userId: string | undefined) {
  const [downloads, setDownloads] = useState<User['downloadHistory']>([]);

  const trackDownload = (movieId: string, resolution: string) => {
    if (!userId) return;

    const newDownload = {
      movieId,
      downloadDate: new Date().toISOString(),
      resolution
    };

    setDownloads(prev => [...prev, newDownload]);
    // In a real app, this would be saved to a backend
  };

  useEffect(() => {
    if (!userId) return;
    // In a real app, this would fetch download history from a backend
  }, [userId]);

  return { downloads, trackDownload };
}