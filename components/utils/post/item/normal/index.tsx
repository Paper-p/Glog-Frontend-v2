import React from 'react';
import * as S from './style';
import * as I from 'assets/svg';
import { PostData } from 'types/post.types';

interface NormalItemProps {
  list: PostData;
}

function NormalPostItem({ list }: NormalItemProps) {
  return (
    <S.NormalPostItemLayout backgroundImage={String(list.thumbnail)}>
      <S.PaddingBox>
        <S.PostTitle>{list.title} </S.PostTitle>
        <S.PostContent>{list.previewContent}</S.PostContent>
        <S.PostStatBar>
          <S.StatWrapper>
            <I.Like />
            <S.Stat>{list.likeCount}</S.Stat>
          </S.StatWrapper>
          <S.StatWrapper>
            <I.Hit />
            <S.Stat>{list.hit}</S.Stat>
          </S.StatWrapper>
        </S.PostStatBar>
      </S.PaddingBox>
    </S.NormalPostItemLayout>
  );
}

export default NormalPostItem;
