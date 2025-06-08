
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

interface SocialMediaLink {
  id: string;
  platform: string;
  url: string;
  icon_name: string;
  display_name: string;
  sort_order: number;
}

const iconMap = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
};

const SocialMediaLinks = () => {
  const { data: socialLinks = [] } = useQuery({
    queryKey: ['footer_social_links'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('social_media_links')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as SocialMediaLink[];
    }
  });

  if (socialLinks.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center space-x-6 mt-6">
      {socialLinks.map((link) => {
        const IconComponent = iconMap[link.icon_name as keyof typeof iconMap];
        
        if (!IconComponent) return null;
        
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors"
            title={link.display_name}
          >
            <IconComponent size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;
