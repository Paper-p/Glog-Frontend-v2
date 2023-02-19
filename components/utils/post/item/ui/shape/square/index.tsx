import * as S from './style';
import { PostData } from 'types/post.types';
import PostItemInformation from '../../information';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SquarePostItemProps {
  data: PostData;
  isMine?: boolean;
}

function SquarePostItem({ data, isMine }: SquarePostItemProps) {
  const router = useRouter();

  return (
    <S.SquarePostItemLayout>
      <S.BackgroundImage
        src={data?.thumbnail}
        onClick={() => router.push('/post/' + data?.id)}
      />
      <S.InformationWrapper>
        <S.PaddingBox>
          <PostItemInformation data={data} isMine={isMine} />
        </S.PaddingBox>
      </S.InformationWrapper>
    </S.SquarePostItemLayout>
  );
}

export default SquarePostItem;
