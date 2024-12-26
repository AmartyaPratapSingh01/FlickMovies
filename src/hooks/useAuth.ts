import { useState, useEffect } from 'react';
import type { User } from '../types/user';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    // Implement actual authentication logic here
    setUser({
      id: '1',
      email,
      username: email.split('@')[0],
      joinedDate: new Date().toISOString(),
      downloadHistory: []
    });
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    // Check for existing session
    setLoading(false);
  }, []);

  return { user, loading, login, logout };
}