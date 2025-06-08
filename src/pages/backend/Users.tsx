
import React from 'react';
import DashboardLayout from '@/components/backend/DashboardLayout';
import UserList from '@/components/backend/users/UserList';

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

        <UserList />
      </div>
    </DashboardLayout>
  );
};

export default Users;
