import React from 'react';
import { WeatherData } from '../api/weather';
import { Player } from '@lottiefiles/react-lottie-player';

const weatherAnimations: Record<string, string> = {
  clear: '/animations/clear.json',
  rain: '/animations/rain.json',
  snow: '/animations/snow.json',
  cloudy: '/animations/cloudy.json',
  storm: '/animations/storm.json',
};

interface WeatherDisplayProps {
  weather: WeatherData | null;
  unit: 'C' | 'F';
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather, unit }) => {
  if (!weather) return null;

  const currentDay = weather.days[0];
  const temp = unit === 'C' ? currentDay.temp : currentDay.temp * 9/5 + 32;
  const tempMax = unit === 'C' ? currentDay.tempmax : currentDay.tempmax * 9/5 + 32;
  const tempMin = unit === 'C' ? currentDay.tempmin : currentDay.tempmin * 9/5 + 32;

  const condition = currentDay.conditions.toLowerCase();
  let iconKey = 'clear';
  if (condition.includes('rain')) iconKey = 'rain';
  else if (condition.includes('cloud')) iconKey = 'cloudy';
  else if (condition.includes('snow')) iconKey = 'snow';
  else if (condition.includes('storm')) iconKey = 'storm';

  return (
    <div
      className={`bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-md mt-6 max-w-md mx-auto text-center`}
    >
      <h2 className="text-2xl font-bold">{weather.resolvedAddress}</h2>
      <p className="text-lg mt-2">{currentDay.conditions}</p>

      <div className="flex justify-center items-center mt-4">
        <Player
          autoplay
          loop
          src={weatherAnimations[iconKey]}
          style={{ height: 100, width: 100 }}
        />
        <div className="ml-4 text-4xl font-bold">
          {Math.round(temp)}°{unit}
        </div>
      </div>

      <div className="flex justify-around mt-4 text-sm text-gray-700 font-semibold">
        <p>High: {Math.round(tempMax)}°{unit}</p>
        <p>Low: {Math.round(tempMin)}°{unit}</p>
        <p>Humidity: {currentDay.humidity}%</p>
      </div>

      <p className="mt-2 text-sm ">Wind: {currentDay.windspeed} km/h</p>
    </div>
  );
};

export default WeatherDisplay;