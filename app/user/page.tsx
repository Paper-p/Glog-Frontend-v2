'use client';

import { UserPage } from 'components/pages';

function User({ params }: { params: { userId: string } }) {
  return <UserPage userId={params.userId} />;
}

export default User;
