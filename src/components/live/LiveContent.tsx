
import React from 'react';
import { ExternalLink, Users, MessageCircle, Star, Zap, Radio } from 'lucide-react';

const LiveContent = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
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
                  <p className="text-sm text-gray-500 mt-1">1.2k Zuschauer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Interaktive DJ Experience</h2>
            
            <p className="text-gray-300 leading-relaxed mb-8">
              Erlebe ein nie dagewesenes Erlebnis mit meinen Live-Twitch-Streams. 
              Hier kannst du interagieren und dabei helfen, unsere wilde musikalische Reise zu gestalten.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Users className="text-purple-400" size={20} />
                <span>Fordere deine Lieblings-Tracks live an</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <MessageCircle className="text-pink-400" size={20} />
                <span>Chatte und interagiere mit der Community</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Star className="text-yellow-400" size={20} />
                <span>Schaue bei der Live-Musikproduktion zu</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Zap className="text-blue-400" size={20} />
                <span>Erlebe exklusive Live-Programme</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Radio className="text-green-400" size={20} />
                <span>72-Stunden DJ-Sets und mehr</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mt-8">
              <ExternalLink size={20} />
              <span>Auf Twitch anschauen</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Stream Schedule</h3>
            <div className="space-y-2 text-gray-300">
              <p>Mo-Fr: 20:00 - 24:00 CET</p>
              <p>Sa-So: 18:00 - 02:00 CET</p>
              <p className="text-pink-400">Live jetzt!</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Community</h3>
            <div className="space-y-2 text-gray-300">
              <p>2.5k Follower</p>
              <p>500+ aktive Chatmitglieder</p>
              <p className="text-purple-400">Discord Community</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Highlights</h3>
            <div className="space-y-2 text-gray-300">
              <p>72h Non-Stop Set</p>
              <p>Live Remixing Sessions</p>
              <p className="text-green-400">Equipment Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveContent;
