import CommonButton from 'components/common/button';
import PostingTemplate from 'components/utils/post/template';
import feed from 'network/request/feed';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as S from './style';

function UpdatePostPage({ postId }: { postId: string }) {
  const [isOwner, setIsOwner] = useState<boolean>(false);
  useEffect(() => {
    const getPostByPostId = async () => {
      try {
        const res: any = await feed.getPostByPostId(postId);
        setIsOwner(res.data.isMine);
      } catch (e: any) {
        console.log(e);
      }
    };

    getPostByPostId();
  }, []);

  return (
    <>
      {isOwner ? (
        <PostingTemplate postingType='update' />
      ) : (
        <S.IsNotOwnerSection>
          <div>
            <S.Icon>🧐</S.Icon>
            <S.Text>다른 사람의 게시물은 수정할 수 없어요 </S.Text>
            <Link href={'/'}>
              <CommonButton>돌아가기</CommonButton>
            </Link>
          </div>
        </S.IsNotOwnerSection>
      )}
    </>
  );
}

export default UpdatePostPage;
