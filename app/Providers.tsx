'use client';

import Header from 'components/common/header';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import GlobalStyle from 'styles/global';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ToastContainer />
        <GlobalStyle />
        <Header />
        {children}
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Providers;
