'use client';

import * as S from './style';

function NotFoundPage({ notFoundType }: { notFoundType: string | null }) {
  return (
    <S.NotFoundSectionLayout>
      <S.MainText>404 Not Found</S.MainText>
      <S.SubText>{notFoundType}를 찾을 수 없어요.</S.SubText>
    </S.NotFoundSectionLayout>
  );
}

export default NotFoundPage;
