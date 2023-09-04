import { NotFoundPage } from 'components/pages';
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';

export const metadata: Metadata = {
  description: '잘못된 접근입니다.',
  title: { absolute: 'Glog | NotFound' },
  openGraph: {
    title: 'Glog | NotFound',
    description: '잘못된 접근입니다.',
  },
};

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
