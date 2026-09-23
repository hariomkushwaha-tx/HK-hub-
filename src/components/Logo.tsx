import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true,
  className = ''
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm tracking-tight',
    md: 'text-base tracking-tight',
    lg: 'text-lg tracking-tight',
    xl: 'text-xl tracking-tight'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Monogram Symbol */}
      <div className={`${iconSizes[size]} shrink-0 relative flex items-center justify-center`}>
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="hk-accent-primary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="hk-accent-glow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="hk-facet" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Precision Outer Shield / Hexagonal Aperture Frame */}
          <rect 
            x="2" 
            y="2" 
            width="36" 
            height="36" 
            rx="9" 
            fill="url(#hk-accent-glow)" 
            stroke="currentColor" 
            strokeOpacity="0.15" 
            strokeWidth="1.5" 
          />

          {/* Left Vertical Pillar of 'H' with Chevron facet */}
          <path 
            d="M10 11C10 9.89543 10.8954 9 12 9H13.5C14.3284 9 15 9.67157 15 10.5V29.5C15 30.3284 14.3284 31 13.5 31H12C10.8954 31 10 30.1046 10 29V11Z" 
            fill="url(#hk-accent-primary)" 
          />

          {/* Central Nexus Bridge */}
          <path 
            d="M14 18H20.5C21.3284 18 22 18.6716 22 19.5V20.5C22 21.3284 21.3284 22 20.5 22H14V18Z" 
            fill="url(#hk-facet)" 
          />

          {/* Dynamic Forward Chevron / 'K' Vector Wings */}
          <path 
            d="M21.5 18.5L27.6 10.4C28.1 9.7 29.1 9.6 29.7 10.1C30.3 10.6 30.4 11.6 29.9 12.2L24.5 19.3L30.2 27.8C30.7 28.5 30.5 29.5 29.8 30C29.2 30.5 28.2 30.3 27.7 29.6L21.5 20.5V18.5Z" 
            fill="url(#hk-accent-primary)" 
          />

          {/* Quantum Core Point */}
          <circle cx="20" cy="20" r="1.75" fill="#38bdf8" />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold text-slate-900 dark:text-slate-100 font-sans ${textSizes[size]}`}>
              HK VELORA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          </div>
        </div>
      )}
    </div>
  );
};
