'use client';

import { UserPage } from 'components/pages';
import Head from './head';

function User({ params }: { params: { nickname: string } }) {
  return (
    <>
      <Head />
      <UserPage nickname={params.nickname} />;{' '}
    </>
  );
}

export default User;
