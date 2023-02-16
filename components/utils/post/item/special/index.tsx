import * as S from './style';
import { PostData } from 'types/post.types';
import PostItemInformation from '../information';

interface SpecialPostItemProps {
  data: PostData;
}

function SpecialPostItem({ data }: SpecialPostItemProps) {
  return (
    <S.SpecialPostItemLayout>
      <S.BackgroundImage src={data.thumbnail} />
      <S.InformationWrapper>
        <S.PaddingBox>
          <PostItemInformation data={data} />
        </S.PaddingBox>
      </S.InformationWrapper>
    </S.SpecialPostItemLayout>
  );
}

export default SpecialPostItem;
