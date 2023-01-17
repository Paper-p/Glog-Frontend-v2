import * as S from './style';
import AuthInput from 'components/utils/auth/input';
import CommonButton from 'components/common/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthErrorText from 'components/utils/auth/error';
import { SignupData } from 'types/auth.types';
import auth from 'network/request/auth';

function SignupPage() {
  const [valueError, setValueError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupData>();

  const checkNicknameValidation = async (nickname: string) => {
    const check = async () => {
      auth.checkNicknameValidation(nickname);
    };

    check().catch(() => {
      setError(
        'nickname',
        { message: '이미 존재하는 닉네임이에요.' },
        { shouldFocus: true }
      );
      setValueError(true);
    });
  };

  const checkUseridValidation = async (userId: string) => {
    const check = async () => {
      await auth.checkUseridValidation(userId);
    };

    check().catch(() => {
      setError(
        'userId',
        { message: '이미 존재하는 아이디에요.' },
        { shouldFocus: true }
      );
      setValueError(true);
    });
  };

  const onValid = async (data: SignupData) => {
    if (data.password === data.confirmPassword) {
      checkNicknameValidation(data.nickname).then(async () =>
        checkUseridValidation(data.userId).then(async () => {
          try {
            await auth.signup({
              nickname: data.nickname,
              userId: data.userId,
              password: data.password,
            });
          } catch {
            setValueError(true);
          }
        })
      );
    } else {
      setError(
        'confirmPassword',
        { message: '비밀번호가 일치하지 않습니다.' },
        { shouldFocus: true }
      );
      setValueError(true);
    }
  };

  const inValid = (error: any) => {
    error && setValueError(true);
  };

  return (
    <S.SignupForm onSubmit={handleSubmit(onValid, inValid)}>
      <S.Gif src='/images/Signup.gif' />
      <S.WelcomeText>당신의 시작을 환영해요!</S.WelcomeText>
      <AuthInput
        icon='human'
        needMargin={true}
        error={valueError}
        register={register('nickname', {
          required: '닉네임은 필수입력입니다.',
          minLength: {
            message: '닉네임 4자 이상이어야해요.',
            value: 4,
          },
          maxLength: {
            message: '닉네임 최대 20자 입니다.',
            value: 20,
          },
        })}
        placeholder='닉네임을 입력해주세요'
      />
      <AuthErrorText needMargin={true}>
        {errors.nickname?.message}
      </AuthErrorText>
      <AuthInput
        icon='human'
        needMargin={true}
        error={valueError}
        register={register('userId', {
          required: '아이디는 필수입력입니다.',
          minLength: {
            message: '아이디는 4자 이상이어야해요.',
            value: 4,
          },
          maxLength: {
            message: '아이디는 최대 20자 입니다.',
            value: 20,
          },
        })}
        placeholder='아이디를 입력해주세요'
      />
      <AuthErrorText needMargin={true}>{errors.userId?.message}</AuthErrorText>
      <AuthInput
        icon='lock'
        needMargin={true}
        error={valueError}
        register={register('password', {
          required: '비밀번호는 필수입력입니다.',
          minLength: {
            message: '비밀번호는 8자 이상이어야해요.',
            value: 8,
          },
          maxLength: {
            message: '비밀번호는 최대 20자 입니다.',
            value: 20,
          },
          pattern: {
            message: '잘못된 비밀번호 형식이에요.',
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          },
        })}
        placeholder='비밀번호를 입력해주세요'
      />
      <AuthErrorText needMargin={true}>
        {errors.password?.message}
      </AuthErrorText>
      <AuthInput
        icon='lock'
        needMargin={true}
        error={valueError}
        register={register('confirmPassword', {
          required: '비밀번호 확인은 필수입력입니다.',
        })}
        placeholder='사용하실 비밀번호를 한번 더 입력해주세요.'
      />
      <AuthErrorText needMargin={true}>
        {errors.confirmPassword?.message}
      </AuthErrorText>
      <CommonButton className='needMargin'>회원가입</CommonButton>
      <S.Reference>비밀번호는 8자리 이상 및 기호를 포함해주세요.</S.Reference>
    </S.SignupForm>
  );
}

export default SignupPage;
