
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await resetPassword(email);

    if (error) {
      toast({
        title: "Fehler beim Zurücksetzen",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "E-Mail gesendet",
        description: "Bitte überprüfen Sie Ihre E-Mail für weitere Anweisungen.",
      });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">E-Mail</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
          placeholder="ihre@email.com"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        {loading ? 'Senden...' : 'Passwort zurücksetzen'}
      </Button>

      <div className="text-center">
        <Link
          to="/auth/login"
          className="text-sm text-purple-300 hover:text-purple-200"
        >
          Zurück zur Anmeldung
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
