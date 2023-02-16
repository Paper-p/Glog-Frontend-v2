import { PostData } from 'types/post.types';
import * as S from './style';
import * as I from 'assets/svg';

interface ItemInformationProps {
  list: PostData;
}

function PostItemInformation({ list }: ItemInformationProps) {
  return (
    <>
      <S.PostTitle>{list.title}</S.PostTitle>
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
    </>
  );
}

export default PostItemInformation;
