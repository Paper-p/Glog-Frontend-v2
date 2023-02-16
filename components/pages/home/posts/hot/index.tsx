import SpecialPostItem from 'components/utils/post/item/special';
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
            <SpecialPostItem list={currentValue} />
          </Link>
        ))}
      </S.HotPostsLayout>
    </>
  );
}

export default HotPosts;
