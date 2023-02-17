'use client';

import { UpdatePostPage } from 'components/pages';

function User({ params }: { params: { postId: string } }) {
  return <UpdatePostPage postId={params.postId} />;
}

export default User;
