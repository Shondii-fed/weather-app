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
    const response = await fetch(
      `/.netlify/functions/weather?location=${encodeURIComponent(location)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data: WeatherData = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
