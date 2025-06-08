
import React from 'react';
import { Play, Download, ExternalLink } from 'lucide-react';

const Music = () => {
  const tracks = [
    {
      title: "Spielsalle Nights Mix",
      description: "A journey through different eras of electronic music",
      image: "/lovable-uploads/0ac40b27-9dfe-43d0-aa3c-685cacd955fa.png",
      duration: "62:45",
      plays: "12.5k"
    },
    {
      title: "German Techno Legacy",
      description: "The roots of German electronic music",
      image: "/lovable-uploads/0ac40b27-9dfe-43d0-aa3c-685cacd955fa.png",
      duration: "45:30",
      plays: "8.2k"
    },
    {
      title: "Live Stream Sessions",
      description: "Best moments from live streaming",
      image: "/lovable-uploads/0ac40b27-9dfe-43d0-aa3c-685cacd955fa.png",
      duration: "78:15",
      plays: "15.1k"
    }
  ];

  return (
    <section id="music" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-pink-500">Music</span>
          </h2>
          <p className="text-xl text-gray-400">Explore my latest mixes, tracks, and collaborations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tracks.map((track, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="relative group">
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors">
                    <Play className="text-white" size={24} />
                  </button>
                </div>
                <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                  {track.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
                <p className="text-gray-400 mb-4">{track.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{track.plays} plays</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-1 flex-1">
                    <Play size={16} />
                    <span>Listen Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              SoundCloud
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Spotify
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              YouTube Music
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
