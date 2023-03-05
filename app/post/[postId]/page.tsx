'use client';

import dynamic from 'next/dynamic';

const ReadPostPage = dynamic(() => import('components/pages/post/read/page'), {
  ssr: false,
});

function ReadPost({ params }: { params: { postId: string } }) {
  return <ReadPostPage postId={params.postId} />;
}

export default ReadPost;
