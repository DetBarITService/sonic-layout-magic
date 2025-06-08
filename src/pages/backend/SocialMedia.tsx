
import React from 'react';
import DashboardLayout from '@/components/backend/DashboardLayout';
import SocialMediaManager from '@/components/backend/SocialMediaManager';

const SocialMedia = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Social Media Links</h1>
          <p className="text-gray-300">
            Verwalten Sie die Social Media Links im Footer der Website.
          </p>
        </div>

        <SocialMediaManager />
      </div>
    </DashboardLayout>
  );
};

export default SocialMedia;
