'use client';

import { UpdatePostPage } from 'components/pages';

function UpdatePost({ params }: { params: { postId: string } }) {
  return <UpdatePostPage postId={params.postId} />;
}

export default UpdatePost;
