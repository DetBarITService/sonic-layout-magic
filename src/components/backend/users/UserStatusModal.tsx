
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserCheck } from 'lucide-react';
import { useUsers } from '@/hooks/useUsers';

interface UserStatusModalProps {
  userId: string;
  currentStatus: string;
}

const UserStatusModal = ({ userId, currentStatus }: UserStatusModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);
  const { updateUserStatus, isUpdatingStatus } = useUsers();

  const statusOptions = [
    { value: 'active', label: 'Aktiv', description: 'Benutzer kann sich anmelden und alle Funktionen nutzen' },
    { value: 'inactive', label: 'Inaktiv', description: 'Benutzer ist temporär deaktiviert' },
    { value: 'suspended', label: 'Gesperrt', description: 'Benutzer ist gesperrt und kann sich nicht anmelden' },
  ];

  const handleSave = () => {
    updateUserStatus({ userId, status: selectedStatus });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
          <UserCheck className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-white/20 text-white">
        <DialogHeader>
          <DialogTitle>Benutzerstatus ändern</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-300">
            Aktueller Status: <span className="font-medium">{currentStatus}</span>
          </p>
          <div className="space-y-2">
            <label className="text-sm font-medium">Neuer Status:</label>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    <div>
                      <div className="font-medium">{status.label}</div>
                      <div className="text-xs text-gray-400">{status.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Abbrechen
            </Button>
            <Button 
              onClick={handleSave}
              disabled={isUpdatingStatus || selectedStatus === currentStatus}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {isUpdatingStatus ? 'Speichere...' : 'Status ändern'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserStatusModal;
