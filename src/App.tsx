import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import UnitToggle from './components/UnitToggle';
import { fetchWeatherByCity, fetchWeatherByCoords } from './api/weather';
import { getBackgroundClass } from './utils/getBackgroundClass';

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [hasSearched, setHasSearched] = useState(false);
  const [currentCity, setCurrentCity] = useState<string | null>(null);
  const backgroundClass = weather ? getBackgroundClass(weather.weather[0].main) : 'bg-gray-100';

  useEffect(() => {
    if (!hasSearched && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const data = await fetchWeatherByCoords(
              position.coords.latitude,
              position.coords.longitude,
              unit
            );
            setWeather(data);
          } catch {
            setError('Could not fetch weather for your location.');
          }
        },
        () => setError('Location access denied.')
      );
    }
  }, [unit, hasSearched]);

  useEffect(() => {
    if (hasSearched && currentCity) {
      const fetchCityWeather = async () => {
      try {
        const data = await fetchWeatherByCity(currentCity, unit);
        setWeather(data);
      } catch {
        setError('Could not update weather for selected city');
      }  
    };
    fetchCityWeather();
  }
}, [unit]);

  const handleSearch = async (city: string) => {
    try {
      setError('');
      const data = await fetchWeatherByCity(city, unit);
      setWeather(data);
      setHasSearched(true);
      setCurrentCity(city);
    } catch {
      setError('City not found. Try another one.');
      setWeather(null);
    }
  };

  return (
    <div className={`min-h-screen ${backgroundClass} transition-colors duration-1000 flex flex-col items-center justify-center p-4`}>
      <h1 className="text-4xl font-bold mb-4 drop-shadow-[2px_2px_2px_white]">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <UnitToggle unit={unit} onToggle={setUnit} />
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {weather && <WeatherCard data={weather} unit={unit} />}
    </div>
  );
};

export default App;
