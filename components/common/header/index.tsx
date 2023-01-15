import React, { useState } from 'react';
import Logo from '../logo';
import * as S from './style';

function Header() {
  const [logged, _] = useState<boolean>(true);

  return (
    <S.HeaderLayout>
      <S.Elements className='left-part'>
        <Logo width={90} height={25} />
        <S.Box>
          <p>홈</p>
          <p>게시물 작성</p>
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
            <p>로그인</p>
            <p>회원가입</p>
          </React.Fragment>
        )}
      </S.Elements>
    </S.HeaderLayout>
  );
}

export default Header;
