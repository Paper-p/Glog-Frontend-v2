import React from 'react';
import * as S from './style';

interface AuthErrorTextProps {
  children: React.ReactNode;
}

function AuthErrorText({ children }: AuthErrorTextProps) {
  return <S.ErrorText>{children}</S.ErrorText>;
}

export default AuthErrorText;
