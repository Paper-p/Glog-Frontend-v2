import * as S from './style';
import AuthInput from 'components/utils/auth/input';
import CommonButton from 'components/common/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthErrorText from 'components/utils/auth/errorText';
import { SignupData } from 'types/auth.types';
import { toast } from 'react-toastify';
import auth from 'network/request/auth';
import { useRouter } from 'next/navigation';
function SignupPage() {
  const [valueError, setValueError] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupData>();

  async function signup(params: SignupData) {
    const checkName = async () => {
      try {
        await auth.checkNicknameValidation(params.nickname);

        checkId();
      } catch {
        setError(
          'nickname',
          { message: '이미 존재하는 이름이에요.' },
          { shouldFocus: true }
        );
        setValueError(true);
      }
    };

    const checkId = async () => {
      try {
        await auth.checkUseridValidation(params.userId);

        createUser();
      } catch {
        setError(
          'userId',
          { message: '이미 존재하는 아이디에요' },
          { shouldFocus: true }
        );
        setValueError(true);
      }
    };

    const createUser = async () => {
      try {
        await auth.signup(params);

        toast.success('회원가입을 성공했어요', {
          autoClose: 2000,
        });

        router.push('/');
      } catch {
        setError(
          'confirmPassword',
          { message: '나중에 다시 시도해주세요' },
          { shouldFocus: true }
        );
        setValueError(true);
      }
    };

    checkName();
  }

  const onValid = async (data: SignupData) => {
    if (data.password === data.confirmPassword) {
      signup(data);
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
      <S.Gif src='public/signup.gif' />
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
