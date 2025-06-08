
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Album {
  id: string;
  name: string;
  description: string | null;
  cover_image_url: string | null;
}

interface GalleryImage {
  id: string;
  album_id: string | null;
  title: string;
  description: string | null;
  image_url: string;
  thumbnail_url: string | null;
  is_featured: boolean;
}

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Fetch albums
  const { data: albums = [] } = useQuery({
    queryKey: ['public_albums'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('albums')
        .select('*')
        .eq('is_public', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Album[];
    }
  });

  // Fetch images
  const { data: images = [] } = useQuery({
    queryKey: ['public_gallery_images', selectedAlbum],
    queryFn: async () => {
      const query = supabase
        .from('gallery_images')
        .select(`
          *,
          albums!inner(is_public)
        `)
        .eq('albums.is_public', true)
        .order('sort_order', { ascending: true });
      
      if (selectedAlbum) {
        query.eq('album_id', selectedAlbum);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data as any[];
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bilder Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Entdecken Sie die besten Momente aus meinen Events und Shows
            </p>
          </div>

          {/* Album Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={selectedAlbum === '' ? 'default' : 'outline'}
              onClick={() => setSelectedAlbum('')}
              className={selectedAlbum === '' ? 'bg-purple-600 hover:bg-purple-700' : ''}
            >
              Alle Bilder
            </Button>
            {albums.map((album) => (
              <Button
                key={album.id}
                variant={selectedAlbum === album.id ? 'default' : 'outline'}
                onClick={() => setSelectedAlbum(album.id)}
                className={selectedAlbum === album.id ? 'bg-purple-600 hover:bg-purple-700' : ''}
              >
                {album.name}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <Card 
                key={image.id} 
                className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image.thumbnail_url || image.image_url}
                      alt={image.title}
                      className="w-full h-64 object-cover"
                    />
                    {image.is_featured && (
                      <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1">{image.title}</h3>
                    {image.description && (
                      <p className="text-gray-300 text-sm">{image.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {images.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">
                {selectedAlbum ? 'Keine Bilder in diesem Album gefunden.' : 'Keine Bilder gefunden.'}
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="text-gray-300 mt-2">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
