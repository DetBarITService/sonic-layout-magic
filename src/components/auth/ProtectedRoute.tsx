
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Database } from '@/integrations/supabase/types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: Database['public']['Enums']['app_role'][];
  requiredPermissions?: Database['public']['Enums']['app_permission'][];
}

const ProtectedRoute = ({ children, requiredRoles, requiredPermissions }: ProtectedRouteProps) => {
  const { user, loading, hasRole, hasPermission } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Laden...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (requiredRoles && !requiredRoles.some(role => hasRole(role))) {
    return <Navigate to="/" replace />;
  }

  if (requiredPermissions && !requiredPermissions.some(permission => hasPermission(permission))) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
