import * as S from './style';
import { PostData } from 'types/post.types';
import PostItemInformation from '../information';

interface SpecialPostItemProps {
  list: PostData;
}

function SpecialPostItem({ list }: SpecialPostItemProps) {
  return (
    <S.SpecialPostItemLayout>
      <S.BackgroundImage src={list.thumbnail} />
      <S.InformationWrapper>
        <S.PaddingBox>
          <PostItemInformation list={list} />
        </S.PaddingBox>
      </S.InformationWrapper>
    </S.SpecialPostItemLayout>
  );
}

export default SpecialPostItem;
