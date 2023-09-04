/**@jsxImportSource @emotion/react */

'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '../../utils/logo';
import * as S from './style';
import { css } from '@emotion/react';
import Link from 'next/link';
import tokenService from 'utils/tokenService';
import user from 'network/request/user';
import BeforeLoginSection from './section/beforeLogin';
import AfterLoginSection from './section/afterLogin';
import SearchBarSection from './section/searchBar';

interface MiniProfileData {
  nickname: string;
  profileImageUrl: string;
  userId: string;
}

function Header() {
  const [mount, setMount] = useState<boolean>(false);
  const [miniProfile, setMiniProfile] = useState<MiniProfileData>({
    nickname: '',
    profileImageUrl: '/default-profileImage.svg',
    userId: '',
  });
  const pathname = usePathname();

  const select = (currentPath: string) =>
    currentPath === pathname &&
    css`
      color: #e0e0e0 !important;
    `;

  useEffect(() => {
    const getUserMiniProfile = async () => {
      try {
        if (tokenService.getLocalAccessToken()) {
          const res: any = await user.getUserMiniProfile();
          setMiniProfile(res.data);
          setMount(true);
        }
      } catch (e: any) {
        if (e.response.status) {
          tokenService.removeUser();
        }
      }
    };

    getUserMiniProfile();
  }, [tokenService.getLocalAccessToken(), pathname]);

  useEffect(() => setMount(true), []);

  return (
    <S.HeaderLayout>
      <S.Elements className='left-part'>
        <Link href={'/'}>
          <Logo width={90} height={25} />
        </Link>
        <S.Box>
          <Link css={select('/')} href={'/'}>
            홈
          </Link>
          <Link css={select('/write')} href={'/write'}>
            게시물 작성
          </Link>
        </S.Box>
      </S.Elements>
      <S.Elements>{pathname === '/' && <SearchBarSection />}</S.Elements>

      {mount ? (
        <S.Elements className='right-part'>
          {tokenService.getLocalAccessToken() ? (
            <AfterLoginSection
              nickname={miniProfile?.nickname}
              profileImageUrl={miniProfile?.profileImageUrl}
            />
          ) : (
            <BeforeLoginSection />
          )}
        </S.Elements>
      ) : (
        <div />
      )}
    </S.HeaderLayout>
  );
}

export default Header;
