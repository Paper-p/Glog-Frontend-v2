'use client';

import Header from 'components/common/header';
import GlobalStyle from 'styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ko'>
      <head />
      <body>
        <ToastContainer />
        <GlobalStyle />
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
