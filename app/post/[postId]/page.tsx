'use client';

import { ReadPostPage } from 'components/pages';
import { useRef } from 'react';
import { NEXT_PUBLIC_BASE_URL } from 'shared/config';
import tokenService from 'utils/tokenService';

async function getPost(postId: string) {
  const res = await fetch(`${NEXT_PUBLIC_BASE_URL}feed/${postId}`, {
    cache: 'no-store',
    headers: {
      Authorization: tokenService.getLocalAccessToken()
        ? tokenService.getLocalAccessToken()
        : '',
    },
  });
  const posts = await res.json();

  return posts;
}

function ReadPost({ params }: { params: { postId: string } }) {
  const data = useRef();
  getPost(params.postId).then((res) => (data.current = res));

  return <ReadPostPage postData={data.current} />;
}
export default ReadPost;
