const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeatherByCity(city: string, units: 'metric' | 'imperial') {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=${units}`);
    if (!response.ok) throw new Error('City not found');
    return response.json();
}

export async function fetchWeatherByCoords(lat: number, lon: number, units: 'metric' | 'imperial') {
    const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`);
    if (!response.ok) throw new Error('Location not found');
    return response.json();
}