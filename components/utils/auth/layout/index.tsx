import * as s from './style';

interface AuthPageLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthPageLayoutProps) {
  return <s.AuthPageLayout>{children}</s.AuthPageLayout>;
}

export default AuthLayout;
