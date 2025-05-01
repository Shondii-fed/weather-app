import React from 'react';
import { getWeatherIcon } from '../utils/getWeatherIcon';

interface Props {
    data: any;
    unit: 'metric' | 'imperial';
}

const WeatherCard: React.FC<Props> = ({ data, unit }) => {
    const tempSymbol = unit === 'metric' ? '°C' : '°F';

    return (
        <div className="bg-white rounded shadow p-6 mt-6 text-center">
            <h2 className="text-2xl font-semibold">{data.name}</h2>

            <div className="flex flex-col items-center my-4">
                {getWeatherIcon(data.weather[0].main)}
                <p className="text-lg capitalize mt-2 text-gray-700">
                    {data.weather[0].description}
                </p>
            </div>

            <p className="text-4xl mt-2">{Math.round(data.main.temp)}{tempSymbol}</p>
            <p className="text-sm text-gray-500">Feels like: {Math.round(data.main.feels_like)}{tempSymbol}</p>
            <p className="text-sm text-gray-500">Humidity: {data.main.humidity}%</p>
        </div>
    );
};

export default WeatherCard;