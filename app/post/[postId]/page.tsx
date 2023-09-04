'use client';

import { ReadPostPage } from 'components/pages';
import Head from './head';

function ReadPost({ params }: { params: { postId: string } }) {
  return (
    <>
      <Head />
      <ReadPostPage postId={params.postId} />;{' '}
    </>
  );
}

export default ReadPost;
