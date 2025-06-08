
import React from 'react';

const SoundVisualizer = () => {
  return (
    <div className="flex items-end space-x-1 h-8">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bg-gradient-to-t from-pink-500 to-purple-400 rounded-t-sm animate-pulse"
          style={{
            width: '3px',
            height: `${Math.random() * 20 + 10}px`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${0.5 + Math.random() * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};

export default SoundVisualizer;
