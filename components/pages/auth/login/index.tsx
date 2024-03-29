'use client';

import Logo from 'components/utils/logo';
import * as S from './style';
import AuthInput from 'components/utils/auth/input';
import CommonButton from 'components/common/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthErrorText from 'components/utils/auth/errorText';
import { LoginData } from 'types/auth.types';
import tokenService from 'utils/tokenService';
import { toast } from 'react-toastify';
import auth from 'network/request/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function LoginPage() {
  const [valueError, setValueError] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginData>();

  const onValid = async (data: LoginData) => {
    try {
      const response: any = await auth.signin(data);
      toast.success('로그인에 성공했어요', {
        autoClose: 2000,
      });
      tokenService.setUser(response.data);
      router.replace('/');
    } catch {
      setError(
        'userId',
        { message: '아이디 혹은 비밀번호를 다시 확인해주세요' },
        { shouldFocus: true }
      );
      setValueError(true);
    }
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
      <S.GoSignUpText>
        <Link href={'/signup'}>아이디가 아직 없나요?</Link>
      </S.GoSignUpText>
    </S.LoginForm>
  );
}

export default LoginPage;
