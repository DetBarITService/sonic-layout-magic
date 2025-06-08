
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Users, BarChart3, MessageCircle, Upload, Settings, LogOut, Home, Image, Share2 } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { signOut, hasPermission, profile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/backend/dashboard',
      icon: BarChart3,
      permission: 'view_dashboard' as const,
    },
    {
      name: 'Benutzer verwalten',
      path: '/backend/users',
      icon: Users,
      permission: 'manage_users' as const,
    },
    {
      name: 'Gallery verwalten',
      path: '/backend/gallery',
      icon: Image,
      permission: 'manage_content' as const,
    },
    {
      name: 'Social Media',
      path: '/backend/social-media',
      icon: Share2,
      permission: 'manage_content' as const,
    },
    {
      name: 'Inhalte verwalten',
      path: '/backend/content',
      icon: Settings,
      permission: 'manage_content' as const,
    },
    {
      name: 'Kommentare moderieren',
      path: '/backend/moderation',
      icon: MessageCircle,
      permission: 'moderate_comments' as const,
    },
    {
      name: 'Medien hochladen',
      path: '/backend/media',
      icon: Upload,
      permission: 'upload_media' as const,
    },
  ];

  const filteredMenuItems = menuItems.filter(item => hasPermission(item.permission));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black/20 backdrop-blur-md border-r border-white/10 min-h-screen">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-8">Backend</h1>
            
            <nav className="space-y-2">
              <Link to="/">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-white/10"
                >
                  <Home className="mr-3 h-4 w-4" />
                  Zur Website
                </Button>
              </Link>
              
              {filteredMenuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${
                        isActive 
                          ? 'bg-purple-600 text-white' 
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-sm text-gray-300 mb-4">
              Angemeldet als: {profile?.display_name || profile?.username}
            </div>
            <Button
              variant="ghost"
              onClick={handleSignOut}
              className="w-full justify-start text-white hover:bg-red-600/20"
            >
              <LogOut className="mr-3 h-4 w-4" />
              Abmelden
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
