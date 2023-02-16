import * as S from './style';
import { PostData } from 'types/post.types';
import PostItemInformation from '../information';

interface NormalItemProps {
  data: PostData;
}

function NormalPostItem({ data }: NormalItemProps) {
  return (
    <S.NormalPostItemLayout backgroundImage={String(data.thumbnail)}>
      <S.PaddingBox>
        <PostItemInformation data={data} />
      </S.PaddingBox>
    </S.NormalPostItemLayout>
  );
}

export default NormalPostItem;
