import React, { useState } from 'react';
import { Film, User } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { MovieDetails } from './components/movie/MovieDetails';
import { LoginModal } from './components/auth/LoginModal';
import { ContactSection } from './components/contact/ContactSection';
import { ThemeToggle } from './components/ThemeToggle';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { useAuth } from './hooks/useAuth';
import { useDownloadTracking } from './hooks/useDownloadTracking';
import { movies } from './data/movies';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'movies'>('home');
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const { user, login, logout } = useAuth();
  const { trackDownload } = useDownloadTracking(user?.id);

  const handleDownload = (movieId: string, resolution: string) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    trackDownload(movieId, resolution);
  };

  const selectedMovieData = selectedMovie
    ? movies.find(m => m.id === selectedMovie)
    : null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Film className="h-8 w-8 text-blue-500" />
                <h1 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Public Domain Cinema
                </h1>
              </div>
              <nav className="hidden md:flex space-x-4">
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === 'home'
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setCurrentPage('movies')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === 'movies'
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  Movies
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <SearchBar onSearch={() => {}} />
              <ThemeToggle />
              {user ? (
                <button
                  onClick={logout}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <User className="h-5 w-5 mr-1" />
                  {user.username}
                </button>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <User className="h-5 w-5 mr-1" />
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedMovieData ? (
          <>
            <button
              onClick={() => setSelectedMovie(null)}
              className="mb-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              ← Back to Movies
            </button>
            <MovieDetails
              movie={selectedMovieData}
              onDownload={(resolution) => handleDownload(selectedMovieData.id, resolution)}
            />
          </>
        ) : (
          currentPage === 'home' ? (
            <HomePage onMovieSelect={setSelectedMovie} />
          ) : (
            <MoviesPage onMovieSelect={setSelectedMovie} />
          )
        )}
      </main>

      <ContactSection />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={login}
        />
      )}

      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            All movies available here are in the public domain or legally licensed for free distribution.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;