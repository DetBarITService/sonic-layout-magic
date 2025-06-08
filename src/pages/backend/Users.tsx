
import React from 'react';
import DashboardLayout from '@/components/backend/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Users = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Benutzer verwalten</h1>
          <p className="text-gray-300">
            Verwalten Sie alle registrierten Benutzer und deren Rollen.
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Benutzerliste</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-300">
              Benutzerverwaltung wird in Kürze verfügbar sein...
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Users;
