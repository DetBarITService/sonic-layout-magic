
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">DJ</span>
                <span className="text-pink-500">Mike</span>
                <span className="text-purple-400">Morino</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              DJ & Twitch Streamer aus Barcelona
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-pink-400 transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-pink-400 transition-colors">About</Link>
              <Link to="/live" className="block text-gray-400 hover:text-pink-400 transition-colors">Live</Link>
              <Link to="/music" className="block text-gray-400 hover:text-pink-400 transition-colors">Music</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-pink-400 transition-colors">Contact</Link>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/impressum" className="block text-gray-400 hover:text-pink-400 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="block text-gray-400 hover:text-pink-400 transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-white/10">
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
