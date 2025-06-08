
import React from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <AuthLayout 
      title="Anmelden" 
      subtitle="Willkommen zurück bei DJ Mike Morino"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
