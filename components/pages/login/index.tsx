import Logo from 'components/utils/logo';
import * as S from './style';
import AuthInput from 'components/utils/auth/input';
import CommonButton from 'components/common/button';

function LoginPage() {
  return (
    <S.LoginForm>
      <S.LogoToCenter>
        <Logo width={335} height={96} />
      </S.LogoToCenter>
      <S.WelcomeText>다시 온걸 환영해요!</S.WelcomeText>
      <AuthInput icon='human' needMargin={true} />
      <AuthInput
        icon='lock'
        placeholder='비밀번호를 입력해주세요'
        needMargin={true}
      />
      <CommonButton className='needMargin'>로그인</CommonButton>
    </S.LoginForm>
  );
}

export default LoginPage;
