import { WritePostPage } from 'components/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: '커뮤니티에 글을 출판하세요.',
  title: { absolute: 'Glog | 글쓰기' },
  openGraph: {
    title: 'Glog | 글쓰기',
    description: '커뮤니티에 글을 출판하세요.',
    url: 'https://glog.kro.kr/write',
  },
};

function WritePost() {
  return <WritePostPage />;
}

export default WritePost;
