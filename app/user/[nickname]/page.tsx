'use client';

import { UserPage } from 'components/pages';

function User({ params }: { params: { nickname: string } }) {
  return <UserPage nickname={params.nickname} />;
}

export default User;
