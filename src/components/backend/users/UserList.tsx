
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, Search, Filter } from 'lucide-react';
import { useUsers } from '@/hooks/useUsers';
import UserRoleModal from './UserRoleModal';
import UserStatusModal from './UserStatusModal';

const UserList = () => {
  const { users, isLoading } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  const filteredUsers = users?.filter(user => {
    const matchesSearch = !searchTerm || 
      user.display_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.primary_email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesRole = roleFilter === 'all' || user.roles?.includes(roleFilter as any);
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'inactive': return 'secondary';
      case 'suspended': return 'destructive';
      default: return 'outline';
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case 'administrator': return 'destructive';
      case 'moderator': return 'default';
      case 'user': return 'secondary';
      default: return 'outline';
    }
  };

  if (isLoading) {
    return <div className="text-white">Lade Benutzer...</div>;
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span>Benutzer filtern</span>
            <Filter className="w-5 h-5" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Benutzer suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Status filtern" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Status</SelectItem>
                <SelectItem value="active">Aktiv</SelectItem>
                <SelectItem value="inactive">Inaktiv</SelectItem>
                <SelectItem value="suspended">Gesperrt</SelectItem>
              </SelectContent>
            </Select>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Rolle filtern" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Rollen</SelectItem>
                <SelectItem value="administrator">Administrator</SelectItem>
                <SelectItem value="moderator">Moderator</SelectItem>
                <SelectItem value="user">Benutzer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white">
            Benutzerliste ({filteredUsers?.length || 0} Benutzer)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-300">Benutzer</TableHead>
                <TableHead className="text-gray-300">E-Mail</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Rollen</TableHead>
                <TableHead className="text-gray-300">Registriert</TableHead>
                <TableHead className="text-gray-300">Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers?.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="text-white">
                      <div className="font-medium">
                        {user.display_name || user.username || 'Unbekannt'}
                      </div>
                      <div className="text-sm text-gray-400">
                        @{user.username || 'kein-username'}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {user.primary_email || 'Keine E-Mail'}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(user.status || 'active')}>
                      {user.status || 'active'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-x-1">
                      {user.roles?.map((role, index) => (
                        <Badge key={index} variant={getRoleBadgeVariant(role)}>
                          {role === 'user' ? 'Benutzer' : role}
                        </Badge>
                      )) || <Badge variant="outline">Keine Rollen</Badge>}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {user.registered_at ? new Date(user.registered_at).toLocaleDateString('de-DE') : 'Unbekannt'}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Link to={`/backend/users/${user.id}`}>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <UserRoleModal userId={user.id!} currentRoles={user.roles || []} />
                      <UserStatusModal userId={user.id!} currentStatus={user.status || 'active'} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserList;
