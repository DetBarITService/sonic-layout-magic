
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface GalleryImage {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  thumbnail_url: string | null;
}

const FeaturedGallery = () => {
  const { data: featuredImages = [] } = useQuery({
    queryKey: ['featured_gallery_images'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gallery_images')
        .select(`
          *,
          albums!inner(is_public)
        `)
        .eq('albums.is_public', true)
        .eq('is_featured', true)
        .order('sort_order', { ascending: true })
        .limit(6);
      
      if (error) throw error;
      return data as any[];
    }
  });

  if (featuredImages.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Gallery Highlights</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Die besten Momente aus meinen Events und Shows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredImages.map((image) => (
            <Card 
              key={image.id} 
              className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={image.thumbnail_url || image.image_url}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    {image.description && (
                      <p className="text-gray-200 text-sm mt-1">{image.description}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
              Alle Bilder ansehen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
