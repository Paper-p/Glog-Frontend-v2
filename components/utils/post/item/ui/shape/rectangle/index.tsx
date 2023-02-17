import * as S from './style';
import { PostData } from 'types/post.types';
import PostItemInformation from '../../information';

interface RectanglePostItemProps {
  data: PostData;
}

function RectanglePostItem({ data }: RectanglePostItemProps) {
  return (
    <S.RectanglePostItemLayout backgroundImage={String(data?.thumbnail)}>
      <S.PaddingBox>
        <PostItemInformation data={data} />
      </S.PaddingBox>
    </S.RectanglePostItemLayout>
  );
}

export default RectanglePostItem;
