import React from 'react';

type Props = {
  icon: string;
  className?: string;
};

function pickKey(iconRaw: string) {
  const i = iconRaw.toLowerCase();

  if (i.includes('thunder') || i.includes('storm') || i.includes('tstorm')) return 'storm';
  if (i.includes('sleet') || i.includes('hail')) return 'sleet';
  if (i.includes('rain') || i.includes('drizzle') || i.includes('shower')) return 'rain';
  if (i.includes('snow') || i.includes('flurr')) return 'snow';
  if (i.includes('fog') || i.includes('haze') || i.includes('mist') || i.includes('smoke')) return 'fog';
  if (i.includes('wind')) return 'wind';
  if (i.includes('partly') || (i.includes('cloud') && i.includes('day'))) return 'partly';
  if (i.includes('cloud')) return 'cloudy';
  if (i.includes('clear') || i.includes('sun')) return 'clear';
  return 'cloudy';
}

const WeatherIcon: React.FC<Props> = ({ icon, className = 'w-12 h-12 mx-auto my-2' }) => {
  const key = pickKey(icon);

  const common = 'stroke-current fill-none';
  const strokeWidth = 2;

  if (key === 'clear') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <circle cx="12" cy="12" r="5" className={common} strokeWidth={strokeWidth} />
        <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1" className={common} strokeWidth={strokeWidth} />
      </svg>
    );
  }

  if (key === 'partly') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        {/* Sun */}
        <circle cx="8" cy="8" r="3.5" className={common} strokeWidth={strokeWidth} />
        <path d="M8 1v2M8 21v2M1 8h2M13 8h2M3 3l1.4 1.4M12.6 12.6L14 14M12.6 3L14 4.4M3 13l1.4-1.4" className={common} strokeWidth={strokeWidth} />
        {/* Cloud */}
        <path d="M8 18h8a3 3 0 0 0 0-6 4.5 4.5 0 0 0-8.7 1" className={common} strokeWidth={strokeWidth} />
      </svg>
    );
  }

  if (key === 'cloudy') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M6 18h11a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5" className={common} strokeWidth={strokeWidth} />
      </svg>
    );
  }

  if (key === 'rain') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M6 14h10a3.5 3.5 0 0 0 0-7 5.5 5.5 0 0 0-10.5 1.4" className={common} strokeWidth={strokeWidth} />
        <path d="M8 19l-1 2M12 19l-1 2M16 19l-1 2" className={common} strokeWidth={strokeWidth} />
      </svg>
    );
  }

  if (key === 'sleet') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M6 14h10a3.5 3.5 0 0 0 0-7 5.5 5.5 0 0 0-10.5 1.4" className={common} strokeWidth={strokeWidth} />
        <path d="M8 19l-1 2M16 19l-1 2" className={common} strokeWidth={strokeWidth} />
        <path d="M12 18v3" className={common} strokeWidth={strokeWidth} />
      </svg>
    );
  }

  if (key === 'snow') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M6 14h10a3.5 3.5 0 0 0 0-7 5.5 5.5 0 0 0-10.5 1.4" className={common} strokeWidth={strokeWidth} />
        <path d="M12 18l-1.5 1.5M12 18l1.5 1.5M12 18l-1.5-1.5M12 18l1.5-1.5" className={common} strokeWidth={strokeWidth} />
      </svg>
    );
  }

  if (key === 'storm') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M6 14h10a3.5 3.5 0 0 0 0-7 5.5 5.5 0 0 0-10.5 1.4" className={common} strokeWidth={strokeWidth} />
        <path d="M10 16l-2 4h2l-1 3 4-5h-2l2-2z" className="fill-current" />
      </svg>
    );
  }

  if (key === 'fog') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M6 14h10a3.5 3.5 0 0 0 0-7 5.5 5.5 0 0 0-10.5 1.4" className={common} strokeWidth={strokeWidth} />
        <path d="M3 18h12M5 21h10" className={common} strokeWidth={strokeWidth} />
      </svg>
    );
  }

  if (key === 'wind') {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M3 12h10a3 3 0 1 0-3-3M3 16h13a3 3 0 1 1-3 3" className={common} strokeWidth={strokeWidth} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M6 18h11a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5" className={common} strokeWidth={strokeWidth} />
    </svg>
  );
};

export default WeatherIcon;