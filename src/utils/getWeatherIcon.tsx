import { WiDaySunny, WiRain, WiCloud, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

export const getWeatherIcon = (main: string) => {
    switch (main.toLowerCase()) {
        case 'clear': return <WiDaySunny className="text-yellow-400 animate-pulse" size={72} />;
        case 'rain': return <WiRain className="text-blue-500 animate-bounce" size={72} />;
        case 'clouds': return <WiCloud className="text-gray-400 animate-fade-in" size={72} />;
        case 'snow': return <WiSnow className="text-white animate-fade-in" size={72} />;
        case 'thunderstorm': return <WiThunderstorm className="text-yellow-300 animate-wiggle" size={72} />;
        case 'fog':
        case 'mist': return <WiFog className="text-gray-300 animate-pulse" size={72} />;
        default: return <WiDaySunny className="text-yellow-300" size={72} />;
    }
};