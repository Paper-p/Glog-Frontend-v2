'use client';

import { ReadPostPage } from 'components/pages';

function ReadPost({ params }: { params: { postId: string } }) {
  return <ReadPostPage postId={params.postId} />;
}

export default ReadPost;
