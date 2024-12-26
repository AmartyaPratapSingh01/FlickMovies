export const movies = [
  {
    id: '1',
    title: 'Night of the Living Dead',
    year: 1968,
    genre: ['Horror', 'Thriller'],
    description: 'A group of people hide from bloodthirsty zombies in a farmhouse.',
    rating: 4.5,
    posterUrl: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80',
    downloadOptions: [
      { resolution: '720p', size: '800MB', url: '#' },
      { resolution: '1080p', size: '1.5GB', url: '#' }
    ],
    reviews: [
      {
        id: 'r1',
        user: 'ClassicFilmBuff',
        rating: 5,
        comment: 'A timeless classic that defined the zombie genre.',
        date: '2024-03-15'
      }
    ]
  },
  {
    id: '2',
    title: 'The General',
    year: 1926,
    genre: ['Comedy', 'Action'],
    description: 'A Confederate railroad engineer pursues his stolen train during the American Civil War.',
    rating: 4.8,
    posterUrl: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80',
    downloadOptions: [
      { resolution: '720p', size: '700MB', url: '#' },
      { resolution: '1080p', size: '1.2GB', url: '#' }
    ],
    reviews: [
      {
        id: 'r2',
        user: 'SilentEraFan',
        rating: 5,
        comment: 'Buster Keaton at his finest. Amazing stunts and comedy.',
        date: '2024-03-14'
      }
    ]
  }
];