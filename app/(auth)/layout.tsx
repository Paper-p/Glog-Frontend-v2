'use client';

import dynamic from 'next/dynamic';

const AuthLayout = dynamic(() => import('components/utils/auth/layout'), {
  ssr: false,
});

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthPageLayout({ children }: AuthLayoutProps) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default AuthPageLayout;
