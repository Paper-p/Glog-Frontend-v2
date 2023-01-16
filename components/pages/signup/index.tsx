import * as S from './style';
import AuthInput from 'components/utils/auth/input';
import CommonButton from 'components/common/button';

function SignupPage() {
  return (
    <S.SignupForm>
      <S.Gif src='/images/Signup.gif' />
      <AuthInput icon='human' needMargin={true} />
      <AuthInput icon='human' needMargin={true} />
      <AuthInput icon='lock' needMargin={true} />
      <AuthInput icon='lock' needMargin={true} />
      <CommonButton>회원가입</CommonButton>
      <S.Reference>비밀번호는 8자리 이상 및 기호를 포함해주세요.</S.Reference>
    </S.SignupForm>
  );
}

export default SignupPage;
