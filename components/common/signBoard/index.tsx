import React from 'react';
import * as S from './style';

interface SignBoardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function SignBoard(props: SignBoardProps) {
  const { ...rest } = props;
  return <S.SignBoard {...rest}>{props.children}</S.SignBoard>;
}

export default SignBoard;
