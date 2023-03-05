'use client';

import dynamic from 'next/dynamic';

const UpdatePostPage = dynamic(() => import('components/pages/post/update'), {
  ssr: false,
});

function UpdatePost({ params }: { params: { postId: string } }) {
  return <UpdatePostPage postId={params.postId} />;
}

export default UpdatePost;
