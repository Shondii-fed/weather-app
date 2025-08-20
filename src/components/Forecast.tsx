// src/components/Forecast.tsx
import React from 'react';
import { WeatherData } from '../api/weather';
import WeatherIcon from './WeatherIcon';

interface ForecastProps {
  weather: WeatherData | null;
  unit: 'C' | 'F';
}

const Forecast: React.FC<ForecastProps> = ({ weather, unit }) => {
  if (!weather) return null;

  return (
    <div className="mt-6 max-w-full mx-auto p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-center text-white mb-4">15-Day Forecast</h2>

      <div className="flex gap-4 scroll snap-x snap-mandatory overflow-x-auto">
        {weather.days.slice(0, 15).map((day) => {
          const tempMax = unit === 'C' ? day.tempmax : day.tempmax * 9/5 + 32;
          const tempMin = unit === 'C' ? day.tempmin : day.tempmin * 9/5 + 32;
          const date = new Date(day.datetime).toLocaleDateString(undefined, {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          });

          return (
            <div
              key={day.datetime}
              className="bg-white/30 backdrop-blur-md rounded-xl p-4 text-center shadow-md snap-start snap-always flex flex-col items-center"
            >
              <p className="font-semibold">{date}</p>

              {/* Inline, reliable icon */}
              <WeatherIcon icon={day.icon} className="w-12 h-12 mx-auto my-2 text-white flex justify-center" />

              <p className="text-sm">{day.conditions}</p>
              <p className="text-sm">High: {Math.round(tempMax)}°{unit}</p>
              <p className="text-sm">Low: {Math.round(tempMin)}°{unit}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;