import { ReadPostPage } from 'components/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: '출판된 글을 수정하세요',
  title: { absolute: 'Glog | 게시글' },
  openGraph: {
    title: 'Glog | 게시글',
    description: '글쓴이의 글을 확인하고 댓글과 좋아요를 남겨요',
  },
};

function ReadPost({ params }: { params: { postId: string } }) {
  return <ReadPostPage postId={params.postId} />;
}

export default ReadPost;
