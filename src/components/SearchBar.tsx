import React, { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (city.trim()) onSearch(city);
        setCity('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className="p-2 border rounded w-full"
            />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Search</button>
        </form>
    );
};

export default SearchBar;