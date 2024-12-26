interface FilterBarProps {
  onGenreChange: (genre: string) => void;
  onYearChange: (year: string) => void;
  onSortChange: (sort: string) => void;
}

export function FilterBar({ onGenreChange, onYearChange, onSortChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        onChange={(e) => onGenreChange(e.target.value)}
        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Genres</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
      </select>

      <select
        onChange={(e) => onYearChange(e.target.value)}
        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Years</option>
        <option value="1920">1920s</option>
        <option value="1930">1930s</option>
        <option value="1940">1940s</option>
        <option value="1950">1950s</option>
      </select>

      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="popular">Most Popular</option>
        <option value="recent">Most Recent</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  );
}