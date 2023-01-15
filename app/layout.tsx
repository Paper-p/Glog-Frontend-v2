'use client';

import Header from 'components/common/header';
import GlobalStyle from 'styles/global';

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ko'>
      <head />
      <body>
        <GlobalStyle />
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
