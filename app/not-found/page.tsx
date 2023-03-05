'use client';

import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

const NotFoundPage = dynamic(() => import('components/pages/notFound'), {
  ssr: false,
});

function NotFound() {
  const searchParams = useSearchParams();
  const type404 = ['유저', '게시물'];

  if (type404.includes(String(searchParams.get('type')))) {
    return <NotFoundPage notFoundType={searchParams.get('type')} />;
  } else {
    return <NotFoundPage notFoundType={'페이지'} />;
  }
}

export default NotFound;
