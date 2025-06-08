
import React from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
  return (
    <AuthLayout 
      title="Registrieren" 
      subtitle="Werden Sie Teil der Community"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
