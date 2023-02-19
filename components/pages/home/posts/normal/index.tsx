import * as S from './style';
import SignBoard from 'components/common/signBoard';
import feed from 'network/request/feed';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import PostItem from 'components/utils/post/item';
import MainPageSkeleton from 'components/utils/skeleton/main';
import uuid from 'react-uuid';

function NormalPosts() {
  const page = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [list, setList] = useState<any[]>([]);

  const getNormalPosts = async () => {
    try {
      const response: any = await feed.getNormalPostsList({
        page: page.current,
        size: 6,
      });

      setList((prevPosts) => [...prevPosts, ...response.data.list]);
      setHasNextPage(response.data.list.length === 6);
      setLoaded(false);
      if (response.data.list.length) {
        page.current += 1;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loaded) {
        getNormalPosts();
      }
    });

    io.observe(observerTargetEl.current);
    return () => io.disconnect();
  }, [hasNextPage, getNormalPosts, loaded]);
  return (
    <>
      <SignBoard>💻 게시물’s</SignBoard>
      <S.NormalPostsLayout>
        {list.map((currentValue) => (
          <Link key={uuid()} href={'/post/' + currentValue.id}>
            <PostItem shape='rectangle' data={currentValue} />
          </Link>
        ))}
        <div ref={observerTargetEl} />
      </S.NormalPostsLayout>
      {loaded && <MainPageSkeleton />}
    </>
  );
}

export default NormalPosts;
