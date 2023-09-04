import { HomePage } from 'components/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: '유저들 간의 진솔한 대화를 위한 커뮤니티 서비스입니다.',
  title: { absolute: 'Glog | 홈' },
  openGraph: {
    title: 'Glog | 홈',
    description: '유저들 간의 진솔한 대화를 위한 커뮤니티 서비스입니다.',
    url: 'https://glog.kro.kr',
  },
};

function Home() {
  return <HomePage />;
}

export default Home;
