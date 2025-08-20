export const getWeatherBackground = (condition: string) => {
  const weather = condition.toLowerCase();
  
  if (weather.includes('rain')) return 'from-gray-400 to-blue-600';
  if (weather.includes('cloud')) return 'from-gray-300 to-gray-500';
  if (weather.includes('snow')) return 'from-white to-blue-300';
  if (weather.includes('clear')) return 'from-yellow-400 to-blue-400';
  if (weather.includes('storm')) return 'from-gray-700 to-black';
  
  return 'from-blue-300 to-blue-600';
};