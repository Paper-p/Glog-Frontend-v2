import React from 'react';
import * as S from './style';

interface PostsTypeBoardProps {
  children: React.ReactNode;
}

function PostsTypeBoard({ children }: PostsTypeBoardProps) {
  return <S.PostsTypeBoard>{children}</S.PostsTypeBoard>;
}

export default PostsTypeBoard;
