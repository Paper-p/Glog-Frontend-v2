import NormalPostItem from 'components/utils/post/item/normal';
import * as S from './style';
import PostsTypeBoard from 'components/utils/post/postsTypeBoard';
import feed from 'network/request/feed';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function NormalPosts() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const getNormalPosts = async () => {
      try {
        const response: any = await feed.getNormalPostsList({
          page: 0,
          size: 5,
        });
        setList(response.data.list);
      } catch (e) {
        console.log(e);
      }
    };

    getNormalPosts();
  }, []);
  return (
    <>
      <PostsTypeBoard>💻 게시물’s</PostsTypeBoard>
      <S.NormalPostsLayout>
        {list.map((idx) => (
          <Link key={idx.id} href={`/post/${idx.id}`}>
            <NormalPostItem list={idx} />
          </Link>
        ))}
      </S.NormalPostsLayout>
    </>
  );
}

export default NormalPosts;
