import Logo from 'components/utils/logo';
import * as S from './style';
import AuthInput from 'components/utils/auth/input';
import CommonButton from 'components/common/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthErrorText from 'components/utils/auth/error';
import { LoginData } from 'types/auth.types';

function LoginPage() {
  const [valueError, setValueError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginData>();

  const onValid = async (data: LoginData) => {
    console.log('Login with data');
  };

  const inValid = (error: any) => {
    error && setValueError(true);
  };

  return (
    <S.LoginForm onSubmit={handleSubmit(onValid, inValid)}>
      <S.LogoToCenter>
        <Logo width={335} height={96} />
      </S.LogoToCenter>
      <S.WelcomeText>다시 온걸 환영해요!</S.WelcomeText>
      <AuthInput
        icon='human'
        error={valueError}
        needMargin={true}
        register={register('userId', {
          required: '아이디는 필수입력입니다.',
        })}
        placeholder='아이디를 입력해주세요'
      />
      <AuthErrorText needMargin={true}>{errors.userId?.message}</AuthErrorText>
      <AuthInput
        icon='lock'
        error={valueError}
        needMargin={true}
        register={register('password', {
          required: '비밀번호는 필수입력입니다.',
        })}
        placeholder='비밀번호를 입력해주세요'
      />
      <AuthErrorText needMargin={true}>
        {errors.password?.message}
      </AuthErrorText>
      <CommonButton className='needMargin'>로그인</CommonButton>
    </S.LoginForm>
  );
}

export default LoginPage;
