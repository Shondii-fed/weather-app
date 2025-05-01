import React from 'react';

interface Props {
    unit: 'metric' | 'imperial';
    onToggle: (unit: 'metric' | 'imperial') => void;
}

const UnitToggle: React.FC<Props> = ({ unit, onToggle }) => {
    return (
        <div className="flex items-center gap-2 mt-4">
            <button
                onClick={() => onToggle('metric')}
                className={`px-4 py-2 rounded ${unit === 'metric' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
            >
                Celsius
            </button>
            <button
                onClick={() => onToggle('imperial')}
                className={`px-4 py-2 rounded ${unit === 'imperial' ? 'bg-red-600 text-white' : 'bg-white border'}`}
            >
                Fahrenheit
            </button>
        </div>
    );
};

export default UnitToggle;