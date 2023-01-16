import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '../logo';
import * as S from './style';
import { css } from '@emotion/react';
import Link from 'next/link';

function Header() {
  const [logged, _] = useState<boolean>(false);
  const pathname = usePathname();

  const select = (currentPath: string) =>
    currentPath === pathname && { color: '#E0E0E0 !important' };

  return (
    <S.HeaderLayout>
      <S.Elements className='left-part'>
        <Link href={'/'}>
          <Logo width={90} height={25} />
        </Link>
        <S.Box>
          <Link href={'/'}>
            <p css={select('/')}>홈</p>
          </Link>
          <Link href={'/posting'}>
            <p>게시물 작성</p>
          </Link>
        </S.Box>
      </S.Elements>
      <S.Elements className='right-part'>
        {logged ? (
          <React.Fragment>
            <p>오종진님</p>
            <S.UserProfileImage src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt361d06c667f47dac/60dad6580401cb0ebfa74b50/dbf90410e8ce567dd5ea7b1d2e6972627d587f4b.jpg' />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link href={'/login'}>
              <p css={select('/login')}>로그인</p>
            </Link>
            <Link href={'/signup'}>
              <p css={select('/signup')}>회원가입</p>
            </Link>
          </React.Fragment>
        )}
      </S.Elements>
    </S.HeaderLayout>
  );
}

export default Header;
