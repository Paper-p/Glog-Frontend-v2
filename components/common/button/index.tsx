import React from 'react';
import * as S from './style';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function CommonButton(props: ButtonProps) {
  const { ...rest } = props;
  return <S.CommonButton {...rest}>{props.children}</S.CommonButton>;
}

export default CommonButton;
