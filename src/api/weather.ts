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

export const fetchWeather = async (location: string) => {
  try {
    const response = await fetch(`/.netlify/functions/weather?location=${encodeURIComponent(location)}`);

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};