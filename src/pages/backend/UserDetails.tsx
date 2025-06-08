
import React from 'react';
import DashboardLayout from '@/components/backend/DashboardLayout';
import UserDetailsComponent from '@/components/backend/users/UserDetails';

const UserDetailsPage = () => {
  return (
    <DashboardLayout>
      <UserDetailsComponent />
    </DashboardLayout>
  );
};

export default UserDetailsPage;
