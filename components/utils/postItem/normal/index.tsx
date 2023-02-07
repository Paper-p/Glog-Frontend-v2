import * as S from './style';
import { PostData } from 'types/post.types';
import PostItemInformation from '../information';

interface NormalItemProps {
  list: PostData;
}

function NormalPostItem({ list }: NormalItemProps) {
  return (
    <S.NormalPostItemLayout backgroundImage={String(list.thumbnail)}>
      <S.PaddingBox>
        <PostItemInformation list={list} />
      </S.PaddingBox>
    </S.NormalPostItemLayout>
  );
}

export default NormalPostItem;
