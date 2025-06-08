
import React from 'react';

const LiveIndicator = () => {
  return (
    <div className="flex items-center justify-center space-x-3 mb-8">
      <div className="relative">
        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      </div>
      <span className="text-red-400 text-lg font-semibold tracking-wide">LIVE STREAMING NOW</span>
    </div>
  );
};

export default LiveIndicator;
