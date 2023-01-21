import * as S from './style';
import * as I from 'assets/svg';
import { PostData } from 'types/post.types';

interface SpecialPostItemProps {
  list: PostData;
}

function SpecialPostItem({ list }: SpecialPostItemProps) {
  return (
    <S.SpecialPostItemLayout>
      <S.BackgroundImage src={list.thumbnail} />
      <S.InformationWrapper>
        <S.PostInformation>
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
        </S.PostInformation>
      </S.InformationWrapper>
    </S.SpecialPostItemLayout>
  );
}

export default SpecialPostItem;
