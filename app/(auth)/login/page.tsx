'use client';

import dynamic from 'next/dynamic';

const LoginPage = dynamic(() => import('components/pages/auth/login'), {
  ssr: false,
});

function Login() {
  return <LoginPage />;
}

export default Login;
