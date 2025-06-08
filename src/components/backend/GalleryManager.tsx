
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react';

interface Album {
  id: string;
  name: string;
  description: string | null;
  cover_image_url: string | null;
  is_public: boolean;
  created_at: string;
}

interface GalleryImage {
  id: string;
  album_id: string | null;
  title: string;
  description: string | null;
  image_url: string;
  thumbnail_url: string | null;
  is_featured: boolean;
  sort_order: number;
}

const GalleryManager = () => {
  const [activeTab, setActiveTab] = useState<'albums' | 'images'>('albums');
  const [showCreateAlbum, setShowCreateAlbum] = useState(false);
  const [showCreateImage, setShowCreateImage] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<string>('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch albums
  const { data: albums = [], isLoading: albumsLoading } = useQuery({
    queryKey: ['albums'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('albums')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Album[];
    }
  });

  // Fetch images
  const { data: images = [], isLoading: imagesLoading } = useQuery({
    queryKey: ['gallery_images', selectedAlbum],
    queryFn: async () => {
      const query = supabase
        .from('gallery_images')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (selectedAlbum) {
        query.eq('album_id', selectedAlbum);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data as GalleryImage[];
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Gallery Management</h2>
        <div className="flex space-x-2">
          <Button
            variant={activeTab === 'albums' ? 'default' : 'outline'}
            onClick={() => setActiveTab('albums')}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Alben
          </Button>
          <Button
            variant={activeTab === 'images' ? 'default' : 'outline'}
            onClick={() => setActiveTab('images')}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Bilder
          </Button>
        </div>
      </div>

      {activeTab === 'albums' && (
        <AlbumsTab 
          albums={albums}
          albumsLoading={albumsLoading}
          showCreateAlbum={showCreateAlbum}
          setShowCreateAlbum={setShowCreateAlbum}
        />
      )}

      {activeTab === 'images' && (
        <ImagesTab
          images={images}
          imagesLoading={imagesLoading}
          albums={albums}
          selectedAlbum={selectedAlbum}
          setSelectedAlbum={setSelectedAlbum}
          showCreateImage={showCreateImage}
          setShowCreateImage={setShowCreateImage}
        />
      )}
    </div>
  );
};

interface AlbumsTabProps {
  albums: Album[];
  albumsLoading: boolean;
  showCreateAlbum: boolean;
  setShowCreateAlbum: (show: boolean) => void;
}

const AlbumsTab = ({ albums, albumsLoading, showCreateAlbum, setShowCreateAlbum }: AlbumsTabProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cover_image_url: '',
    is_public: true
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createAlbumMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase
        .from('albums')
        .insert([{ ...data, created_by: (await supabase.auth.getUser()).data.user?.id }]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['albums'] });
      setShowCreateAlbum(false);
      setFormData({ name: '', description: '', cover_image_url: '', is_public: true });
      toast({ title: 'Album erfolgreich erstellt!' });
    },
    onError: (error) => {
      toast({ title: 'Fehler beim Erstellen des Albums', description: error.message, variant: 'destructive' });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createAlbumMutation.mutate(formData);
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={() => setShowCreateAlbum(true)}
        className="bg-green-600 hover:bg-green-700"
      >
        <Plus className="w-4 h-4 mr-2" />
        Neues Album
      </Button>

      {showCreateAlbum && (
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Neues Album erstellen</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Album Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
                required
              />
              <Textarea
                placeholder="Beschreibung (optional)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
              />
              <Input
                placeholder="Cover Bild URL (optional)"
                value={formData.cover_image_url}
                onChange={(e) => setFormData({ ...formData, cover_image_url: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.is_public}
                  onChange={(e) => setFormData({ ...formData, is_public: e.target.checked })}
                />
                <label className="text-white">Öffentlich sichtbar</label>
              </div>
              <div className="flex space-x-2">
                <Button type="submit" disabled={createAlbumMutation.isPending}>
                  Erstellen
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowCreateAlbum(false)}
                >
                  Abbrechen
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map((album) => (
          <Card key={album.id} className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              {album.cover_image_url && (
                <img
                  src={album.cover_image_url}
                  alt={album.name}
                  className="w-full h-32 object-cover rounded mb-2"
                />
              )}
              <h3 className="text-white font-semibold">{album.name}</h3>
              {album.description && (
                <p className="text-gray-300 text-sm">{album.description}</p>
              )}
              <div className="flex items-center justify-between mt-2">
                <span className={`text-xs px-2 py-1 rounded ${album.is_public ? 'bg-green-600' : 'bg-red-600'}`}>
                  {album.is_public ? 'Öffentlich' : 'Privat'}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

interface ImagesTabProps {
  images: GalleryImage[];
  imagesLoading: boolean;
  albums: Album[];
  selectedAlbum: string;
  setSelectedAlbum: (albumId: string) => void;
  showCreateImage: boolean;
  setShowCreateImage: (show: boolean) => void;
}

const ImagesTab = ({ 
  images, 
  imagesLoading, 
  albums, 
  selectedAlbum, 
  setSelectedAlbum, 
  showCreateImage, 
  setShowCreateImage 
}: ImagesTabProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    thumbnail_url: '',
    album_id: '',
    is_featured: false,
    sort_order: 0
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createImageMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase
        .from('gallery_images')
        .insert([{ 
          ...data, 
          album_id: data.album_id || null,
          uploaded_by: (await supabase.auth.getUser()).data.user?.id 
        }]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gallery_images'] });
      setShowCreateImage(false);
      setFormData({ title: '', description: '', image_url: '', thumbnail_url: '', album_id: '', is_featured: false, sort_order: 0 });
      toast({ title: 'Bild erfolgreich hinzugefügt!' });
    },
    onError: (error) => {
      toast({ title: 'Fehler beim Hinzufügen des Bildes', description: error.message, variant: 'destructive' });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createImageMutation.mutate(formData);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <select
          value={selectedAlbum}
          onChange={(e) => setSelectedAlbum(e.target.value)}
          className="bg-white/10 border border-white/20 rounded px-3 py-2 text-white"
        >
          <option value="">Alle Bilder</option>
          {albums.map((album) => (
            <option key={album.id} value={album.id}>
              {album.name}
            </option>
          ))}
        </select>
        <Button
          onClick={() => setShowCreateImage(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Neues Bild
        </Button>
      </div>

      {showCreateImage && (
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Neues Bild hinzufügen</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Bildtitel"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
                required
              />
              <Textarea
                placeholder="Beschreibung (optional)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
              />
              <Input
                placeholder="Bild URL"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
                required
              />
              <Input
                placeholder="Thumbnail URL (optional)"
                value={formData.thumbnail_url}
                onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
              />
              <select
                value={formData.album_id}
                onChange={(e) => setFormData({ ...formData, album_id: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-white"
              >
                <option value="">Kein Album</option>
                {albums.map((album) => (
                  <option key={album.id} value={album.id}>
                    {album.name}
                  </option>
                ))}
              </select>
              <Input
                type="number"
                placeholder="Sortierung"
                value={formData.sort_order}
                onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                className="bg-white/10 border-white/20 text-white"
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                />
                <label className="text-white">Als Featured markieren</label>
              </div>
              <div className="flex space-x-2">
                <Button type="submit" disabled={createImageMutation.isPending}>
                  Hinzufügen
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowCreateImage(false)}
                >
                  Abbrechen
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <Card key={image.id} className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              <img
                src={image.thumbnail_url || image.image_url}
                alt={image.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="text-white font-semibold">{image.title}</h3>
              {image.description && (
                <p className="text-gray-300 text-sm">{image.description}</p>
              )}
              <div className="flex items-center justify-between mt-2">
                {image.is_featured && (
                  <span className="text-xs px-2 py-1 rounded bg-yellow-600">
                    Featured
                  </span>
                )}
                <span className="text-xs text-gray-400">
                  #{image.sort_order}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GalleryManager;
