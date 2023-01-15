import Logo from 'components/common/logo';
import React from 'react';
import * as S from './style';
import * as I from 'assets/svg';

function LoginPage() {
  return (
    <S.LoginPageLayout>
      <S.LoginBox>
        <S.LogoToCenter>
          <Logo width={335} height={96} />
        </S.LogoToCenter>
        <S.WelcomeText>다시 온걸 환영해요!</S.WelcomeText>
        <S.InputWrapper>
          <S.InputBox>
            <I.HumanIcon />
            <S.Input
              className='id-input'
              placeholder='아이디를 입력해주세요.'
            />
          </S.InputBox>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputBox>
            <I.LockIcon />
            <S.Input
              className='password-input'
              type='password'
              placeholder='비밀번호를 입력해주세요.'
            />
          </S.InputBox>
        </S.InputWrapper>
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginBox>
    </S.LoginPageLayout>
  );
}

export default LoginPage;
