export const getBackgroundClass = (main: string) => {
    switch (main.toLowerCase()) {
      case 'clear': return 'bg-gradient-to-br from-yellow-200 to-blue-400';
      case 'rain': return 'bg-gradient-to-br from-blue-800 to-gray-600';
      case 'clouds': return 'bg-gradient-to-br from-gray-300 to-gray-500';
      case 'snow': return 'bg-gradient-to-br from-white to-blue-100';
      case 'thunderstorm': return 'bg-gradient-to-br from-yellow-900 to-gray-800';
      case 'mist':
      case 'fog': return 'bg-gradient-to-br from-gray-200 to-gray-400';
      default: return 'bg-gradient-to-br from-sky-200 to-sky-500';
    }
  };
  