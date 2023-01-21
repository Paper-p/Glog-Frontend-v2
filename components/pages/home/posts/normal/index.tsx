import NormalPostItem from 'components/utils/post/item/normal';
import * as S from './style';
import PostTypeBoard from 'components/utils/post/typeBoard';
import feed from 'network/request/feed';
import { useState, useEffect } from 'react';
import React from 'react';

function NormalPosts() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const getHotPosts = async () => {
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

    getHotPosts();
  }, []);
  return (
    <>
      <PostTypeBoard>💻 게시물’s</PostTypeBoard>
      <S.NormalPostsLayout>
        {list.map((idx) => (
          <React.Fragment key={idx.id}>
            <NormalPostItem list={idx} />
          </React.Fragment>
        ))}
      </S.NormalPostsLayout>
    </>
  );
}

export default NormalPosts;
