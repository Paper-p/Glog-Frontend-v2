import SpecialPostItem from 'components/utils/post/item/special';
import PostTypeBoard from 'components/utils/post/typeBoard';
import React from 'react';
import * as S from './style';

function HotPosts() {
  return (
    <>
      <PostTypeBoard>🔥HOT’</PostTypeBoard>
      <S.HotPostsLayout>
        <SpecialPostItem />
        <SpecialPostItem />
        <SpecialPostItem />
        <SpecialPostItem />
      </S.HotPostsLayout>
    </>
  );
}

export default HotPosts;
