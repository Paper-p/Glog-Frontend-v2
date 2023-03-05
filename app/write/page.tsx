'use client';

import dynamic from 'next/dynamic';

const WritePostPage = dynamic(() => import('components/pages/post/create'), {
  ssr: false,
});

function WritePost() {
  return <WritePostPage />;
}

export default WritePost;
