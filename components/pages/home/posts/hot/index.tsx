import SpecialPostItem from 'components/utils/post/item/special';
import PostTypeBoard from 'components/utils/post/typeBoard';
import feed from 'network/request/feed';
import React from 'react';
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
      <PostTypeBoard>🔥HOT’</PostTypeBoard>
      <S.HotPostsLayout>
        {list.map((idx) => (
          <React.Fragment key={idx.id}>
            <SpecialPostItem list={idx} />
          </React.Fragment>
        ))}
      </S.HotPostsLayout>
    </>
  );
}

export default HotPosts;
