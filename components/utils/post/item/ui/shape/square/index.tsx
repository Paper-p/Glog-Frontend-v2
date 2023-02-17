import * as S from './style';
import { PostData } from 'types/post.types';
import PostItemInformation from '../../information';

interface SquarePostItemProps {
  data: PostData;
}

function SquarePostItem({ data }: SquarePostItemProps) {
  return (
    <S.SquarePostItemLayout>
      <S.BackgroundImage src={data?.thumbnail} />
      <S.InformationWrapper>
        <S.PaddingBox>
          <PostItemInformation data={data} />
        </S.PaddingBox>
      </S.InformationWrapper>
    </S.SquarePostItemLayout>
  );
}

export default SquarePostItem;
