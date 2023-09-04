import { LoginPage } from 'components/pages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: '아이디와 비밀번호로 로그인하세요.',
  title: { absolute: 'Glog | 로그인' },
  openGraph: {
    title: 'Glog | 로그인',
    description: '아이디와 비밀번호로 로그인하세요.',
  },
};

function Login() {
  return <LoginPage />;
}

export default Login;
