
import React from 'react';
import DashboardLayout from '@/components/backend/DashboardLayout';
import DashboardStats from '@/components/backend/DashboardStats';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';

const Dashboard = () => {
  const { profile, userRoles } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-300">
            Willkommen zurück, {profile?.display_name || profile?.username}!
          </p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Ihre Rollen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {userRoles.map((role, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 capitalize">
                      {role === 'user' ? 'Partyschnitzel' : role}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Letzte Aktivitäten</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-gray-300">
                  <div className="font-medium">Neuer Benutzer registriert</div>
                  <div className="text-xs text-gray-400">vor 2 Stunden</div>
                </div>
                <div className="text-sm text-gray-300">
                  <div className="font-medium">Live Stream gestartet</div>
                  <div className="text-xs text-gray-400">vor 4 Stunden</div>
                </div>
                <div className="text-sm text-gray-300">
                  <div className="font-medium">Neuer Track hochgeladen</div>
                  <div className="text-xs text-gray-400">vor 1 Tag</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
