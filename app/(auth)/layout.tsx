'use client';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <>{children}</>;
}

export default AuthLayout;
