import React from 'react';
import * as S from './style';

interface SignBoardProps {
  children: React.ReactNode;
}

function SignBoard({ children }: SignBoardProps) {
  return <S.SignBoard>{children}</S.SignBoard>;
}

export default SignBoard;
