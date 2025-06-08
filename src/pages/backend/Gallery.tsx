
import React from 'react';
import DashboardLayout from '@/components/backend/DashboardLayout';
import GalleryManager from '@/components/backend/GalleryManager';

const Gallery = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Bilder Gallery</h1>
          <p className="text-gray-300">
            Verwalten Sie Alben und Bilder für die Website-Gallery.
          </p>
        </div>

        <GalleryManager />
      </div>
    </DashboardLayout>
  );
};

export default Gallery;
