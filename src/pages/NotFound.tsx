
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
          Looks like this page got lost in the mix. Let's get you back to the music!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2">
              <Home size={20} />
              <span>Back to Home</span>
            </button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
