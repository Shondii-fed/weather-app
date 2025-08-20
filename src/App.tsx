import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import UnitToggle from './components/UnitToggle';
import { fetchWeather, WeatherData } from './api/weather';
import { getWeatherBackground } from './utils/getWeatherBackground';

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch weather. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await fetchWeather(`${latitude},${longitude}`);
          setWeather(data);
        } catch (err) {
          console.error(err);
          setError('Failed to fetch weather for your location.');
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Unable to retrieve your location.');
        setLoading(false);
      }
    );
  };

  const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <div
      className={`min-h-screen p-4 bg-gradient-to-b ${weather 
      ? getWeatherBackground(weather.days[0].conditions) : 'from-blue-300 to-blue-600'}`}
    >
      <h1 className="text-4xl font-bold text-center">Weather App</h1>

      {/* Search + Current Location */}
      <div className="flex justify-center mt-4 gap-2 items-center margin-top-4">
        <SearchBar onSearch={handleSearch} />
        <button
          onClick={handleCurrentLocation}
          className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
        >
          Current Location
        </button>
      </div>

      {/* Unit toggle */}
      <UnitToggle unit={unit} onToggle={toggleUnit} />

      {/* Loading / Error */}
      {loading && <p className="text-center text-white mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {/* Weather display */}
      {weather && (
        <>
          <WeatherDisplay weather={weather} unit={unit} />
          <Forecast weather={weather} unit={unit} />
        </>
      )}
    </div>
  );
};

export default App;