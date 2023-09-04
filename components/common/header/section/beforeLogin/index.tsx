/**@jsxImportSource @emotion/react */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { css } from '@emotion/react';

function BeforeLoginSection() {
  const pathname = usePathname();

  const select = (currentPath: string) =>
    currentPath === pathname &&
    css`
      color: #e0e0e0 !important;
    `;

  return (
    <React.Fragment>
      <Link css={select('/login')} href={'/login'}>
        로그인
      </Link>
      <Link css={select('/signup')} href={'/signup'}>
        회원가입
      </Link>
    </React.Fragment>
  );
}

export default BeforeLoginSection;
