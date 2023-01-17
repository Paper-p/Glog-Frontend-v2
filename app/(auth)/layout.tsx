'use client';

import AuthPageLayout from 'components/utils/auth/layout';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthPageLayout({ children }: AuthLayoutProps) {
  return <AuthPageLayout>{children}</AuthPageLayout>;
}

export default AuthPageLayout;
