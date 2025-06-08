
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold">
              <span className="text-white">DJ</span>
              <span className="text-pink-500">Mike</span>
              <span className="text-purple-400">Morino</span>
            </span>
          </div>
          
          <p className="text-gray-400 mb-4">
            © 2024 DJ Mike Morino. All rights reserved. Made with ❤️ in Barcelona.
          </p>
          
          <div className="flex justify-center space-x-2 text-sm text-gray-500">
            <span>🎵</span>
            <span>🎧</span>
            <span>🎤</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
