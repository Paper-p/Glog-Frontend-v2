import RectanglePostItem from 'components/utils/post/item/ui/shape/rectangle';
import * as S from './style';
import SignBoard from 'components/common/signBoard';
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
      <SignBoard>💻 게시물’s</SignBoard>
      <S.NormalPostsLayout>
        {list.map((currentValue) => (
          <Link key={currentValue.id} href={'/post/' + currentValue.id}>
            <RectanglePostItem list={currentValue} />
          </Link>
        ))}
      </S.NormalPostsLayout>
    </>
  );
}

export default NormalPosts;
