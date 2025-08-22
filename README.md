# 🌤️ Weather App

A modern weather app built with **Vite + React + TypeScript + Tailwind CSS**. It displays current weather and a 7-day forecast for any searched city or your current location, with animated icons, dynamic backgrounds, and unit toggling between Celsius and Fahrenheit.

---

## 🚀 Features

- 🔍 Search for weather by city
- 📍 Get weather based on your geolocation
- 🌡️ Toggle between Celsius (°C) and Fahrenheit (°F)
- 🧊 Animated weather icons
- 🌄 Background changes dynamically based on weather

---

## 📁 File Structure

weather-app/
├── src/
│   ├── api/
│   │   └── weather.ts
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── UnitToggle.tsx
│   │   └── WeatherCard.tsx
│   ├── utils/
│   │   ├── getBackgroundClass.tsx
│   │   └── getWeatherIcon.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- npm or yarn
- An API key from [OpenWeather](https://openweathermap.org/api)

---

### 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/weather-app.git
cd weather-app

# Install dependencies
npm install

# Set up your .env file
cp .env.example .env
# Then add your OpenWeather API key in the .env file:
# VITE_WEATHER_API_KEY=your_api_key_here

# Screenshots
![Weather App showing 15 day Forecast for New York City](<public/screenshots/Weather App.png>)

# Netlify Link
[text](https://sdweathertracker.netlify.app/)