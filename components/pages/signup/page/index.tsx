import * as S from './style';
import * as I from 'assets/svg';

function SignupPage() {
  return (
    <S.SignupPageLayout>
      <S.SectionLayout>
        <S.SignupBox>
          <S.Gif src='/images/Signup.gif' />
          <S.InputWrapper>
            <S.InputBox>
              <I.HumanIcon />
              <S.Input />
            </S.InputBox>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputBox>
              <I.HumanIcon />
              <S.Input />
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
          <S.LoginButton>회원가입</S.LoginButton>
          <S.Reference>
            비밀번호는 8자리 이상 및 기호를 포함해주세요.
          </S.Reference>
        </S.SignupBox>
      </S.SectionLayout>
    </S.SignupPageLayout>
  );
}

export default SignupPage;
