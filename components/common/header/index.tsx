import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '../../utils/logo';
import * as S from './style';
import { css } from '@emotion/react';
import Link from 'next/link';
import tokenService from 'utils/tokenService';
import user from 'network/request/user';

const DEFAULT_PROFILE_IMAGE_URL =
  'https://glog-bucket.s3.ap-northeast-2.amazonaws.com/glog-bucket/person-circle.svg';

interface MiniProfileData {
  nickname: string;
  profileImageUrl: string;
  userId: string;
}

function Header() {
  const [miniProfile, setMiniProfile] = useState<MiniProfileData>({
    nickname: '',
    profileImageUrl: DEFAULT_PROFILE_IMAGE_URL,
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
          <Link href={'/write'}>
            <p>게시물 작성</p>
          </Link>
        </S.Box>
      </S.Elements>
      <S.Elements className='right-part'>
        {tokenService.getLocalAccessToken() ? (
          <React.Fragment>
            <p>{miniProfile?.nickname}</p>
            <Link href={'/user/' + miniProfile?.nickname}>
              <S.UserProfileImage src={miniProfile?.profileImageUrl} />
            </Link>
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
