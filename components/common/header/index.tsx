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
  const [miniProfile, setMiniProfile] = useState<MiniProfileData>({
    nickname: '',
    profileImageUrl: '/default-profileImage.svg',
    userId: '',
  });
  const pathname = usePathname();

  const select = (currentPath: string) =>
    currentPath === pathname && { color: '#E0E0E0 !important' };

  useEffect(() => {
    const getUserMiniProfile = async () => {
      try {
        if (tokenService.getLocalAccessToken()) {
          const res: any = await user.getUserMiniProfile();
          setMiniProfile(res.data);
        }
      } catch (e: any) {
        if (e.response.status) {
          tokenService.removeUser();
        }
      }
    };

    getUserMiniProfile();
  }, [tokenService.getLocalAccessToken(), pathname]);

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <S.HeaderLayout>
        <S.Elements className='left-part'>
          <Link href={'/'}>
            <Logo width={90} height={25} />
          </Link>
          <S.Box>
            <Link href={'/'}>
              <p css={select('/')}>홈</p>
            </Link>
            <Link href={'/write'}>
              <p>게시물 작성</p>
            </Link>
          </S.Box>
        </S.Elements>
        <S.Elements>{pathname === '/' && <SearchBarSection />}</S.Elements>
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
      </S.HeaderLayout>
    )
  );
}

export default Header;
