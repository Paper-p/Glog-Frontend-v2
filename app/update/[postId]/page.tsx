'use client';

import { UpdatePostPage } from 'components/pages';
import Head from './head';

function UpdatePost({ params }: { params: { postId: string } }) {
  return (
    <>
      <Head />
      <UpdatePostPage postId={params.postId} />;
    </>
  );
}

export default UpdatePost;
