import SignBoard from 'components/common/signBoard';
import feed from 'network/request/feed';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as S from './style';
import PostItem from 'components/utils/post/item';
import { PostData } from 'types/post.types';
import { HotPostsSkeletonItem } from 'components/utils/skeleton/hot/style';

function HotPosts() {
  const [list, setList] = useState<PostData[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getHotPosts = async () => {
      setLoaded(false);
      try {
        const response: any = await feed.getHotPostsList();
        setList(response.data.list);
        setLoaded(true);
      } catch (e) {
        console.log(e);
      }
    };

    getHotPosts();
  }, []);

  const loadingRendering = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(<HotPostsSkeletonItem key={i} />);
    }
    return result;
  };

  return (
    <>
      <SignBoard>🔥HOT’</SignBoard>
      <S.HotPostsLayout>
        {loaded ? (
          <>
            {list.map((currentValue) => (
              <Link key={currentValue.id} href={'/post/' + currentValue.id}>
                <PostItem shape='square' data={currentValue} />
              </Link>
            ))}
          </>
        ) : (
          <>{loadingRendering()}</>
        )}
      </S.HotPostsLayout>
    </>
  );
}

export default HotPosts;
