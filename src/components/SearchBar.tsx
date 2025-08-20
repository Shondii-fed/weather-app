import { useState, FormEvent } from 'react';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city.trim() !== '') {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-4 gap-2 bg-white/30 backdrop-blur-md rounded-xl p-2 shadow-md">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent w-64 bg-white text-gray-800 placeholder-gray-500 transition-colors duration-200 shadow-sm hover:bg-white/80 focus:bg-white/80 transition-all"
      />
      <button
        type="submit"
        className="p-2 text-white rounded-r-md hover:bg-blue-600 transition-colors duration-200 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;