
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react';

interface SocialMediaLink {
  id: string;
  platform: string;
  url: string;
  icon_name: string;
  display_name: string;
  is_active: boolean;
  sort_order: number;
}

const SocialMediaManager = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [editingLink, setEditingLink] = useState<SocialMediaLink | null>(null);
  const [formData, setFormData] = useState({
    platform: '',
    url: '',
    icon_name: '',
    display_name: '',
    is_active: true,
    sort_order: 0
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch social media links
  const { data: socialLinks = [], isLoading } = useQuery({
    queryKey: ['social_media_links'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('social_media_links')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as SocialMediaLink[];
    }
  });

  const createLinkMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase
        .from('social_media_links')
        .insert([data]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['social_media_links'] });
      setShowCreate(false);
      resetForm();
      toast({ title: 'Social Media Link erfolgreich erstellt!' });
    },
    onError: (error) => {
      toast({ title: 'Fehler beim Erstellen', description: error.message, variant: 'destructive' });
    }
  });

  const updateLinkMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof formData }) => {
      const { error } = await supabase
        .from('social_media_links')
        .update(data)
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['social_media_links'] });
      setEditingLink(null);
      resetForm();
      toast({ title: 'Social Media Link erfolgreich aktualisiert!' });
    },
    onError: (error) => {
      toast({ title: 'Fehler beim Aktualisieren', description: error.message, variant: 'destructive' });
    }
  });

  const deleteLinkMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('social_media_links')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['social_media_links'] });
      toast({ title: 'Social Media Link erfolgreich gelöscht!' });
    },
    onError: (error) => {
      toast({ title: 'Fehler beim Löschen', description: error.message, variant: 'destructive' });
    }
  });

  const resetForm = () => {
    setFormData({
      platform: '',
      url: '',
      icon_name: '',
      display_name: '',
      is_active: true,
      sort_order: 0
    });
  };

  const handleEdit = (link: SocialMediaLink) => {
    setEditingLink(link);
    setFormData({
      platform: link.platform,
      url: link.url,
      icon_name: link.icon_name,
      display_name: link.display_name,
      is_active: link.is_active,
      sort_order: link.sort_order
    });
    setShowCreate(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingLink) {
      updateLinkMutation.mutate({ id: editingLink.id, data: formData });
    } else {
      createLinkMutation.mutate(formData);
    }
  };

  const handleCancel = () => {
    setShowCreate(false);
    setEditingLink(null);
    resetForm();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Social Media Links</h2>
        <Button
          onClick={() => setShowCreate(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Neuer Link
        </Button>
      </div>

      {showCreate && (
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">
              {editingLink ? 'Link bearbeiten' : 'Neuer Social Media Link'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Platform (z.B. instagram)"
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
                required
              />
              <Input
                placeholder="URL"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
                required
              />
              <Input
                placeholder="Icon Name (Lucide Icon, z.B. instagram)"
                value={formData.icon_name}
                onChange={(e) => setFormData({ ...formData, icon_name: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
                required
              />
              <Input
                placeholder="Anzeigename"
                value={formData.display_name}
                onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
                required
              />
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
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                />
                <label className="text-white">Aktiv</label>
              </div>
              <div className="flex space-x-2">
                <Button type="submit" disabled={createLinkMutation.isPending || updateLinkMutation.isPending}>
                  {editingLink ? 'Aktualisieren' : 'Erstellen'}
                </Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Abbrechen
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.map((link) => (
          <Card key={link.id} className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">{link.display_name}</h3>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEdit(link)}
                    className="text-white hover:bg-white/10"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => deleteLinkMutation.mutate(link.id)}
                    className="text-red-400 hover:bg-red-400/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-2">{link.platform}</p>
              <div className="flex items-center justify-between">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 flex items-center text-sm"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Link öffnen
                </a>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded ${link.is_active ? 'bg-green-600' : 'bg-red-600'}`}>
                    {link.is_active ? 'Aktiv' : 'Inaktiv'}
                  </span>
                  <span className="text-xs text-gray-400">#{link.sort_order}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaManager;
