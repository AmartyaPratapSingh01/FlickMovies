import { useState } from 'react';
import { Filter } from 'lucide-react';

interface AdvancedFiltersProps {
  onFilterChange: (filters: {
    minRating: number;
    maxYear: number;
    minYear: number;
    genres: string[];
  }) => void;
}

export function AdvancedFilters({ onFilterChange }: AdvancedFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    minRating: 0,
    maxYear: new Date().getFullYear(),
    minYear: 1900,
    genres: [] as string[]
  });

  const handleChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 hover:text-gray-900"
      >
        <Filter className="h-4 w-4 mr-2" />
        Advanced Filters
      </button>

      {isOpen && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Minimum Rating
              </label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={filters.minRating}
                onChange={(e) => handleChange('minRating', parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-600">{filters.minRating}</span>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Year Range</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={filters.minYear}
                  onChange={(e) => handleChange('minYear', parseInt(e.target.value))}
                  className="w-full px-2 py-1 border rounded"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  value={filters.maxYear}
                  onChange={(e) => handleChange('maxYear', parseInt(e.target.value))}
                  className="w-full px-2 py-1 border rounded"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}