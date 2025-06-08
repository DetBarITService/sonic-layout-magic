
import React from 'react';

const AnimatedLogo = () => {
  return (
    <div className="text-2xl font-bold">
      <span 
        className="text-white animate-pulse inline-block"
        style={{ 
          animationDuration: '2s',
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
        }}
      >
        DJ
      </span>
      <span 
        className="text-pink-500 animate-bounce inline-block mx-1" 
        style={{ 
          animationDelay: '0.2s',
          animationDuration: '1.5s',
          filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))'
        }}
      >
        Mike
      </span>
      <span 
        className="text-purple-400 animate-pulse inline-block" 
        style={{ 
          animationDelay: '0.4s',
          animationDuration: '2.5s',
          filter: 'drop-shadow(0 0 8px rgba(196, 181, 253, 0.5))'
        }}
      >
        Morino
      </span>
    </div>
  );
};

export default AnimatedLogo;
