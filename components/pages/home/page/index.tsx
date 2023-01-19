import React from 'react';
import HotPosts from '../posts/hot';
import * as S from './style';

function HomePage() {
  return (
    <S.HomePageLayout>
      <HotPosts />
    </S.HomePageLayout>
  );
}

export default HomePage;
