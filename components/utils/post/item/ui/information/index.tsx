import { PostData } from 'types/post.types';
import * as S from './style';
import * as I from 'assets/svg';

interface ItemInformationProps {
  data: PostData;
}

function PostItemInformation({ data }: ItemInformationProps) {
  return (
    <>
      <S.PostTitle>{data?.title}</S.PostTitle>
      <S.PostContent>{data?.previewContent}</S.PostContent>
      <S.PostStatBar>
        <S.StatWrapper>
          <I.Like />
          <S.Stat>{data?.likeCount}</S.Stat>
        </S.StatWrapper>
        <S.StatWrapper>
          <I.Hit />
          <S.Stat>{data?.hit}</S.Stat>
        </S.StatWrapper>
      </S.PostStatBar>
    </>
  );
}

export default PostItemInformation;
