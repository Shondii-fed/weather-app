import React from 'react';

interface UnitToggleProps {
  unit: 'C' | 'F';
  onToggle: () => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ unit, onToggle }) => {
  return (
    <div className="flex justify-center mt-4 mb-4 text-white font-semibold text-lg items-center gap-2">
      <button
        onClick={onToggle}
        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      >
        Switch to {unit === 'C' ? '°F' : '°C'}
      </button>
    </div>
  );
};

export default UnitToggle;