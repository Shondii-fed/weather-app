const API_KEY = import.meta.env.VITE_VISUAL_CROSSING_KEY;

export interface WeatherData {
    resolvedAddress: string;
    days: Array<{
        datetime: string;
        tempmax: number;
        tempmin: number;
        temp: number;
        humidity: number;
        conditions: string;
        icon: string;
        precip: number;
        windspeed: number;
    }>;
}

export const fetchWeather = async (location: string): Promise<WeatherData> => {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&include=days`);

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data: WeatherData = await response.json();
        return data;
    }   catch (error) {
        console.error(error);
        throw error;
    }
};