import * as S from './style';
import SignBoard from 'components/common/signBoard';
import feed from 'network/request/feed';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import PostItem from 'components/utils/post/item';

function NormalPosts() {
  const page = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);

  const getNormalPosts = async () => {
    try {
      const response: any = await feed.getNormalPostsList({
        page: page.current,
        size: 6,
      });
      setList((prevPosts) => [...prevPosts, ...response.data.list]);
      setHasNextPage(response.data.list.length === 6);
      setIsLoad(false);
      if (response.data.list.length) {
        page.current += 1;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting && !isLoad) {
        getNormalPosts();
      }
    });

    io.observe(observerTargetEl.current);
    return () => io.disconnect();
  }, [hasNextPage, getNormalPosts, isLoad]);
  return (
    <>
      <SignBoard>💻 게시물’s</SignBoard>
      <S.NormalPostsLayout>
        {list.map((currentValue) => (
          <Link key={currentValue.id} href={'/post/' + currentValue.id}>
            <PostItem shape='rectangle' data={currentValue} />
          </Link>
        ))}
        <div ref={observerTargetEl} />
      </S.NormalPostsLayout>
    </>
  );
}

export default NormalPosts;
