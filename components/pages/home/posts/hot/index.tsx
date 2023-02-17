import SquarePostItem from 'components/utils/post/item/ui/shape/square';
import SignBoard from 'components/common/signBoard';
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
      <SignBoard>🔥HOT’</SignBoard>
      <S.HotPostsLayout>
        {list.map((currentValue) => (
          <Link key={currentValue.id} href={'/post/' + currentValue.id}>
            <SquarePostItem data={currentValue} />
          </Link>
        ))}
      </S.HotPostsLayout>
    </>
  );
}

export default HotPosts;
