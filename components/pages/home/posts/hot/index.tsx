import SpecialPostItem from 'components/utils/post/item/special';
import PostsTypeBoard from 'components/utils/post/postsTypeBoard';
import feed from 'network/request/feed';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as S from './style';

function HotPosts() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const getHotPosts = async () => {
      try {
        const response: any = await feed.getHotPostsList();
        setList(response.data.list);
      } catch (e) {
        console.log(e);
      }
    };

    getHotPosts();
  }, []);
  return (
    <>
      <PostsTypeBoard>🔥HOT’</PostsTypeBoard>
      <S.HotPostsLayout>
        {list.map((idx) => (
          <Link key={idx.id} href={`/post/${idx.id}`}>
            <SpecialPostItem list={idx} />
          </Link>
        ))}
      </S.HotPostsLayout>
    </>
  );
}

export default HotPosts;
