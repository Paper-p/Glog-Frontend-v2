'use client';

import Header from 'ui/components/common/header';

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ko'>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
