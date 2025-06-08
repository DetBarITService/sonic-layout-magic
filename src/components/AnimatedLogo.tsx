
import React from 'react';

const AnimatedLogo = () => {
  return (
    <div className="text-2xl font-bold">
      <span className="text-white animate-pulse">DJ</span>
      <span className="text-pink-500 animate-bounce" style={{ animationDelay: '0.1s' }}>Mike</span>
      <span className="text-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }}>Morino</span>
    </div>
  );
};

export default AnimatedLogo;
