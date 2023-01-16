import React from 'react';
import * as S from './style';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function AuthButton(props: ButtonProps) {
  const { ...rest } = props;
  return <S.AuthButton {...rest}>{props.children}</S.AuthButton>;
}

export default AuthButton;
