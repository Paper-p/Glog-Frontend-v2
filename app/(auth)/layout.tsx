'use client';

import AuthLayout from 'components/utils/auth/layout';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthPageLayout({ children }: AuthLayoutProps) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default AuthPageLayout;
