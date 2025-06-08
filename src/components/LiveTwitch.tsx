
import React from 'react';
import { ExternalLink, Users, MessageCircle, Star, Zap } from 'lucide-react';

const LiveTwitch = () => {
  return (
    <section id="live" className="py-16 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live on <span className="text-purple-400">Twitch</span>
          </h2>
          <p className="text-xl text-gray-400">Join me for live 72 sets, music production sessions, and interactive streaming</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-2xl p-1">
              <div className="bg-black/50 rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/0ac40b27-9dfe-43d0-aa3c-685cacd955fa.png" 
                  alt="Live Stream"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-400 font-semibold">LIVE</span>
                  </div>
                  <p className="text-gray-300">Electronic Music Session - Deep House Vibes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Interactive DJ Experience</h3>
            
            <p className="text-gray-300 leading-relaxed mb-8">
              Experience a like never before with my live Twitch streams. 
              Where you can interact and help create our wild musical
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Users className="text-purple-400" size={20} />
                <span>Request your favorite tracks live</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <MessageCircle className="text-pink-400" size={20} />
                <span>Chat and interact with the community</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Star className="text-yellow-400" size={20} />
                <span>Watch live music creation</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Zap className="text-blue-400" size={20} />
                <span>See exclusive live programs</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mt-8">
              <ExternalLink size={20} />
              <span>Watch on Twitch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTwitch;
