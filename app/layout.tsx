'use client';

import Header from 'components/common/header';
import GlobalStyle from 'styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  const queryClient = new QueryClient();

  return (
    <html lang='ko'>
      <head />
      <body>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <ToastContainer />
            <GlobalStyle />
            <Header />
            {children}
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
