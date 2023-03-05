'use client';

import dynamic from 'next/dynamic';

const SignupPage = dynamic(() => import('components/pages/auth/signup'), {
  ssr: false,
});

function Signup() {
  return <SignupPage />;
}

export default Signup;
