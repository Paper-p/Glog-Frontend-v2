import { postingTempalteValueAtom } from 'atoms';
import CommonButton from 'components/common/button';
import PostingTemplate from 'components/utils/post/template';
import feed from 'network/request/feed';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './style';

interface TagType {
  id: number;
  name: string;
}

function UpdatePostPage({ postId }: { postId: string }) {
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [_, setPostingTemplateValue] = useRecoilState(postingTempalteValueAtom);

  useEffect(() => {
    const getPostByPostId = async () => {
      try {
        const res: any = await feed.getPostByPostId(postId);

        setIsOwner(res.data.isMine);

        const list: TagType[] = [];
        res.data.tagList.map((item: string, index: number) => {
          const tag = {
            id: index,
            name: item,
          };
          list.push(tag);
        });

        const data = {
          id: res.data.id,
          title: res.data.title,
          content: res.data.content,
          thumbnail: res.data.thumbnail,
          tags: list,
        };

        setPostingTemplateValue(data);
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
