import React from 'react';
import * as S from './style';
import * as I from 'assets/svg';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  icon: 'human' | 'lock';
  needMargin: boolean;
}

function AuthInput(props: InputProps) {
  const { ...rest } = props;

  return (
    <S.InputWrapper needMargin={props.needMargin}>
      <S.InputBox>
        {props.icon === 'human' && <I.HumanIcon />}
        {props.icon === 'lock' && <I.LockIcon />}
        <S.Input className={props.icon} {...rest} />
      </S.InputBox>
    </S.InputWrapper>
  );
}

export default AuthInput;
