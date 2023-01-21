import React from 'react';
import HotPosts from '../posts/hot';
import NormalPosts from '../posts/normal';
import * as S from './style';

function HomePage() {
  return (
    <S.HomePageLayout>
      <HotPosts />
      <NormalPosts />
    </S.HomePageLayout>
  );
}

export default HomePage;
