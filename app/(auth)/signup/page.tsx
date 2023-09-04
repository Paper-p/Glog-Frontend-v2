import { SignupPage } from 'components/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Glog에 회원가입하고 Glog를 즐기세요!',
  title: { absolute: 'Glog | 회원가입' },
  openGraph: {
    title: 'Glog | 회원가입',
    description: 'Glog에 회원가입하고 Glog를 즐기세요!',
  },
};

function Signup() {
  return <SignupPage />;
}

export default Signup;
