'use client';

import dynamic from 'next/dynamic';

const UserPage = dynamic(() => import('components/pages/user/page'), {
  ssr: false,
});

function User({ params }: { params: { nickname: string } }) {
  return <UserPage nickname={params.nickname} />;
}

export default User;
