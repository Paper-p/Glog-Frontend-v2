import { UpdatePostPage } from 'components/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: '출판된 글을 수정하세요',
  title: { absolute: 'Glog | 수정하기' },
  openGraph: {
    title: 'Glog | 수정하기',
    description: '출판된 글을 수정하세요',
  },
};

function UpdatePost({ params }: { params: { postId: string } }) {
  return <UpdatePostPage postId={params.postId} />;
}

export default UpdatePost;
