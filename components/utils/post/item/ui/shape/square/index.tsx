import * as S from './style';
import { PostData } from 'types/post.types';
import PostItemInformation from '../../information';
import Link from 'next/link';

interface SquarePostItemProps {
  data: PostData;
  isMine?: boolean;
}

function SquarePostItem({ data }: SquarePostItemProps) {
  return (
    <S.SquarePostItemLayout>
      <Link href={'/post/' + data.id}>
        <S.BackgroundImage src={data?.thumbnail} />
      </Link>
      <S.InformationWrapper>
        <S.PaddingBox>
          <PostItemInformation data={data} />
        </S.PaddingBox>
      </S.InformationWrapper>
    </S.SquarePostItemLayout>
  );
}

export default SquarePostItem;
