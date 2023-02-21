import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { css } from '@emotion/react';

function BeforeLoginSection() {
  const pathname = usePathname();

  const select = (currentPath: string) =>
    currentPath === pathname && { color: '#E0E0E0 !important' };

  return (
    <React.Fragment>
      <Link href={'/login'}>
        <p css={select('/login')}>로그인</p>
      </Link>
      <Link href={'/signup'}>
        <p css={select('/signup')}>회원가입</p>
      </Link>
    </React.Fragment>
  );
}

export default BeforeLoginSection;
