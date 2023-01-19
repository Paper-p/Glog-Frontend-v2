import React from 'react';
import * as S from './style';

interface PostTypeBoardProps {
  children: React.ReactNode;
}

function PostTypeBoard({ children }: PostTypeBoardProps) {
  return <S.PostPostTypeBoard>{children}</S.PostPostTypeBoard>;
}

export default PostTypeBoard;
