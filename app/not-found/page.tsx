'use client';

import { NotFoundPage } from 'components/pages';
import { useSearchParams } from 'next/navigation';
import Head from './head';

function NotFound() {
  const searchParams = useSearchParams();
  const type404 = ['유저', '게시물'];

  if (type404.includes(String(searchParams.get('type')))) {
    return (
      <>
        <Head />
        <NotFoundPage notFoundType={searchParams.get('type')} />
      </>
    );
  } else {
    return (
      <>
        <Head />
        <NotFoundPage notFoundType={'페이지'} />
      </>
    );
  }
}

export default NotFound;
