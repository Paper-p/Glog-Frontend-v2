'use client';

import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('components/pages/home/page'), {
  ssr: false,
});

function Home() {
  return <HomePage />;
}

export default Home;
