import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
import Providers from './Providers';

const Header = dynamic(() => import('components/common/header'), {
  ssr: false,
});

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='ko'>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
