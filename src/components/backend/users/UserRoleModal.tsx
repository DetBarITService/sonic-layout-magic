
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { Settings } from 'lucide-react';
import { useUsers } from '@/hooks/useUsers';
import { Database } from '@/integrations/supabase/types';

type UserRole = Database['public']['Enums']['app_role'];

interface UserRoleModalProps {
  userId: string;
  currentRoles: UserRole[];
}

const UserRoleModal = ({ userId, currentRoles }: UserRoleModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<UserRole[]>(currentRoles);
  const { updateUserRoles, isUpdatingRoles } = useUsers();

  const availableRoles: { value: UserRole; label: string; description: string }[] = [
    { 
      value: 'administrator', 
      label: 'Administrator', 
      description: 'Vollzugriff auf alle Funktionen'
    },
    { 
      value: 'moderator', 
      label: 'Moderator', 
      description: 'Kann Inhalte moderieren und Medien hochladen'
    },
    { 
      value: 'user', 
      label: 'Benutzer', 
      description: 'Grundlegende Benutzerberechtigung'
    },
  ];

  const handleRoleChange = (role: UserRole, checked: boolean) => {
    if (checked) {
      setSelectedRoles([...selectedRoles, role]);
    } else {
      setSelectedRoles(selectedRoles.filter(r => r !== role));
    }
  };

  const handleSave = () => {
    updateUserRoles({ userId, roles: selectedRoles });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
          <Settings className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-white/20 text-white">
        <DialogHeader>
          <DialogTitle>Benutzerrollen verwalten</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-300">
            Wählen Sie die Rollen für diesen Benutzer aus:
          </p>
          {availableRoles.map((role) => (
            <div key={role.value} className="flex items-start space-x-3">
              <Checkbox
                id={role.value}
                checked={selectedRoles.includes(role.value)}
                onCheckedChange={(checked) => handleRoleChange(role.value, checked as boolean)}
              />
              <div className="flex-1">
                <label htmlFor={role.value} className="text-sm font-medium cursor-pointer">
                  {role.label}
                </label>
                <p className="text-xs text-gray-400">{role.description}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Abbrechen
            </Button>
            <Button 
              onClick={handleSave}
              disabled={isUpdatingRoles}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {isUpdatingRoles ? 'Speichere...' : 'Speichern'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserRoleModal;
