
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Mail, Phone, Calendar, Clock, User, Settings, Activity } from 'lucide-react';
import { useUserDetails } from '@/hooks/useUsers';
import UserRoleModal from './UserRoleModal';
import UserStatusModal from './UserStatusModal';

const UserDetails = () => {
  const { userId } = useParams<{ userId: string }>();
  const { user, auditLog, isLoading, isLoadingAudit } = useUserDetails(userId!);

  if (isLoading) {
    return <div className="text-white">Lade Benutzerdetails...</div>;
  }

  if (!user) {
    return <div className="text-white">Benutzer nicht gefunden</div>;
  }

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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/backend/users">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Liste
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-white">Benutzerdetails</h1>
        </div>
        <div className="flex space-x-2">
          <UserRoleModal userId={user.id!} currentRoles={user.roles || []} />
          <UserStatusModal userId={user.id!} currentStatus={user.status || 'active'} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grundinformationen */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <User className="w-5 h-5 mr-2" />
              Grundinformationen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm">Anzeigename</label>
              <p className="text-white font-medium">
                {user.display_name || 'Nicht angegeben'}
              </p>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Benutzername</label>
              <p className="text-white font-medium">
                {user.username || 'Nicht angegeben'}
              </p>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Vor- und Nachname</label>
              <p className="text-white font-medium">
                {user.first_name || user.last_name 
                  ? `${user.first_name || ''} ${user.last_name || ''}`.trim()
                  : 'Nicht angegeben'
                }
              </p>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Bio</label>
              <p className="text-white">
                {user.bio || 'Keine Bio verfügbar'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Kontaktinformationen */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Kontaktinformationen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm">E-Mail (Auth)</label>
              <p className="text-white font-medium">
                {user.auth_email || 'Nicht verfügbar'}
              </p>
              {user.email_confirmed_at && (
                <p className="text-green-400 text-xs">
                  Bestätigt am {new Date(user.email_confirmed_at).toLocaleDateString('de-DE')}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-300 text-sm">E-Mail (Profil)</label>
              <p className="text-white font-medium">
                {user.profile_email || 'Nicht angegeben'}
              </p>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Telefon</label>
              <p className="text-white font-medium">
                {user.phone || 'Nicht angegeben'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Status und Rollen */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Status und Rollen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm">Status</label>
              <div className="mt-1">
                <Badge variant={getStatusBadgeVariant(user.status || 'active')}>
                  {user.status || 'active'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Rollen</label>
              <div className="mt-1 space-x-1">
                {user.roles?.map((role, index) => (
                  <Badge key={index} variant={getRoleBadgeVariant(role)}>
                    {role === 'user' ? 'Benutzer' : role}
                  </Badge>
                )) || <Badge variant="outline">Keine Rollen</Badge>}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Zeitstempel */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Zeitstempel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-gray-300 text-sm">Registriert</label>
              <p className="text-white font-medium">
                {user.registered_at 
                  ? new Date(user.registered_at).toLocaleString('de-DE')
                  : 'Unbekannt'
                }
              </p>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Letzte Anmeldung</label>
              <p className="text-white font-medium">
                {user.last_sign_in_at 
                  ? new Date(user.last_sign_in_at).toLocaleString('de-DE')
                  : 'Nie angemeldet'
                }
              </p>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Profil erstellt</label>
              <p className="text-white font-medium">
                {user.profile_created_at 
                  ? new Date(user.profile_created_at).toLocaleString('de-DE')
                  : 'Unbekannt'
                }
              </p>
            </div>
            <div>
              <label className="text-gray-300 text-sm">Profil aktualisiert</label>
              <p className="text-white font-medium">
                {user.profile_updated_at 
                  ? new Date(user.profile_updated_at).toLocaleString('de-DE')
                  : 'Nie aktualisiert'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Aktivitätsprotokoll */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Aktivitätsprotokoll
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoadingAudit ? (
            <p className="text-gray-300">Lade Aktivitätsprotokoll...</p>
          ) : auditLog && auditLog.length > 0 ? (
            <div className="space-y-3">
              {auditLog.map((entry) => (
                <div key={entry.id} className="border-l-2 border-purple-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">{entry.action_type}</p>
                      {entry.action_details && (
                        <p className="text-gray-300 text-sm">
                          {JSON.stringify(entry.action_details)}
                        </p>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs">
                      {new Date(entry.performed_at).toLocaleString('de-DE')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-300">Keine Aktivitäten gefunden</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;
