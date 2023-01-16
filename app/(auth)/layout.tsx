'use client';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default AuthLayout;
