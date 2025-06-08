
import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { useToast } from '@/hooks/use-toast';

type UserManagementView = Database['public']['Views']['user_management_view']['Row'];
type UserRole = Database['public']['Enums']['app_role'];

export const useUsers = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_management_view')
        .select('*')
        .order('registered_at', { ascending: false });
      
      if (error) throw error;
      return data as UserManagementView[];
    },
  });

  const updateUserRolesMutation = useMutation({
    mutationFn: async ({ userId, roles }: { userId: string; roles: UserRole[] }) => {
      const { error } = await supabase.rpc('update_user_roles', {
        target_user_id: userId,
        new_roles: roles
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({
        title: "Erfolg",
        description: "Benutzerrollen wurden aktualisiert",
      });
    },
    onError: (error) => {
      toast({
        title: "Fehler",
        description: "Fehler beim Aktualisieren der Rollen: " + error.message,
        variant: "destructive",
      });
    },
  });

  const updateUserStatusMutation = useMutation({
    mutationFn: async ({ userId, status }: { userId: string; status: string }) => {
      const { error } = await supabase.rpc('update_user_status', {
        target_user_id: userId,
        new_status: status
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast({
        title: "Erfolg",
        description: "Benutzerstatus wurde aktualisiert",
      });
    },
    onError: (error) => {
      toast({
        title: "Fehler",
        description: "Fehler beim Aktualisieren des Status: " + error.message,
        variant: "destructive",
      });
    },
  });

  return {
    users,
    isLoading,
    error,
    updateUserRoles: updateUserRolesMutation.mutate,
    updateUserStatus: updateUserStatusMutation.mutate,
    isUpdatingRoles: updateUserRolesMutation.isPending,
    isUpdatingStatus: updateUserStatusMutation.isPending,
  };
};

export const useUserDetails = (userId: string) => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_management_view')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) throw error;
      return data as UserManagementView;
    },
    enabled: !!userId,
  });

  const { data: auditLog, isLoading: isLoadingAudit } = useQuery({
    queryKey: ['audit-log', userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_audit_log')
        .select('*')
        .eq('target_user_id', userId)
        .order('performed_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!userId,
  });

  return {
    user,
    auditLog,
    isLoading,
    isLoadingAudit,
  };
};
