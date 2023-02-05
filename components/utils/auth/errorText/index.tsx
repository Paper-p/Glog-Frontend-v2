import React from 'react';
import * as S from './style';

interface AuthErrorTextProps {
  children: React.ReactNode;
  needMargin: boolean;
}

function AuthErrorText(props: AuthErrorTextProps) {
  return (
    <S.ErrorText needMargin={props.needMargin}>{props.children}</S.ErrorText>
  );
}

export default AuthErrorText;
