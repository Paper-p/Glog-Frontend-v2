import { UserPage } from 'components/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: '유저의 공간을 둘러보세요.',
  title: { absolute: 'Glog | 유저페이지' },
  openGraph: {
    title: 'Glog | 유저페이지',
    description: '유저의 공간을 둘러보세요.',
  },
};

function User({ params }: { params: { nickname: string } }) {
  return <UserPage nickname={params.nickname} />;
}

export default User;
