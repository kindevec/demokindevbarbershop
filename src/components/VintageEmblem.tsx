import React from 'react';

interface VintageEmblemProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const VintageEmblem: React.FC<VintageEmblemProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const dimensions = {
    sm: { box: 'w-8 h-8 sm:w-10 sm:h-10', svg: 40 },
    md: { box: 'w-12 h-12 sm:w-16 sm:h-16', svg: 64 },
    lg: { box: 'w-20 h-20 sm:w-24 sm:h-24', svg: 96 },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* SVG Emblem with Crossed Razor & Scissors */}
      <div className={`relative flex items-center justify-center shrink-0 ${dimensions.box} rounded-sm bg-[#1A1A1A] border border-[#DC143C]/60 shadow-[0_0_15px_rgba(220,20,60,0.25)] group transition-transform duration-300 hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Distressed Ring */}
          <circle cx="50" cy="50" r="46" stroke="#DC143C" strokeWidth="2.5" strokeDasharray="6 3" />
          <circle cx="50" cy="50" r="41" stroke="#B2B2B2" strokeWidth="1" strokeOpacity="0.5" />

          {/* Inner Badge Background Shield */}
          <path
            d="M50 12 L80 25 L80 60 C80 75 50 88 50 88 C50 88 20 75 20 60 L20 25 Z"
            fill="#121212"
            stroke="#DC143C"
            strokeWidth="1.5"
          />

          {/* Crossed Scissors (Left to Right) */}
          <g stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round">
            {/* Scissor Handle 1 */}
            <circle cx="30" cy="72" r="5" stroke="#DC143C" strokeWidth="2" fill="none" />
            <line x1="33" y1="68" x2="68" y2="30" />
            {/* Scissor Handle 2 */}
            <circle cx="70" cy="72" r="5" stroke="#DC143C" strokeWidth="2" fill="none" />
            <line x1="67" y1="68" x2="32" y2="30" />
            {/* Scissor Pivot Pin */}
            <circle cx="50" cy="49" r="2" fill="#DC143C" />
          </g>

          {/* Straight Razor Blade Overlaid Vertically */}
          <g transform="translate(0, -2)">
            {/* Razor Spine */}
            <path
              d="M48 24 L52 24 L53 58 L47 58 Z"
              fill="#DC143C"
            />
            {/* Razor Edge */}
            <path
              d="M52 24 L56 26 L55 54 L52 56 Z"
              fill="#E5E5E5"
            />
            {/* Handle Pivot */}
            <circle cx="50" cy="62" r="2.5" fill="#FFFFFF" />
            {/* Razor Handle tail */}
            <path
              d="M50 62 Q56 70 52 78"
              stroke="#B2B2B2"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Est. 2018 Stars */}
          <polygon points="34,36 35,38 37,38 35.5,39.5 36,41.5 34,40 32,41.5 32.5,39.5 31,38 33,38" fill="#DC143C" />
          <polygon points="66,36 67,38 69,38 67.5,39.5 68,41.5 66,40 64,41.5 64.5,39.5 63,38 65,38" fill="#DC143C" />
        </svg>

        {/* Vintage texture overlay line */}
        <div className="absolute inset-0 bg-[radial-gradient(#DC143C_1px,transparent_1px)] [background-size:8px_8px] opacity-10 pointer-events-none" />
      </div>

      {/* Industrial Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase font-sans leading-none flex items-center gap-1.5">
            IRON <span className="text-[#DC143C] font-bold">&</span> FADE
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#B2B2B2] uppercase font-mono mt-0.5">
            URBAN BARBERSHOP
          </span>
        </div>
      )}
    </div>
  );
};
