import * as S from './style';
import SignBoard from 'components/common/signBoard';
import feed from 'network/request/feed';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import PostItem from 'components/utils/post/item';
import MainPageSkeleton from 'components/utils/skeleton/main';
import uuid from 'react-uuid';
import { useRecoilState } from 'recoil';
import { searchAtom } from 'atoms';
import { PostData } from 'types/post.types';

function NormalPosts() {
  const page = useRef<number>(0);
  const [search, setSearch] = useRecoilState(searchAtom);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<boolean>(true);
  const [list, setList] = useState<PostData[]>([]);
  const [searchResultNone, setSearchResultNone] = useState<boolean>(false);
  const [searchFailedText, setSearchFailedText] = useState<string>('');

  const getNormalPosts = useCallback(async () => {
    setLoaded(false);

    try {
      const res: any = await feed.getNormalPostsList({
        page: page.current,
        size: 6,
        keyword: search.keyword && search.keyword,
      });

      if (search.keyword && res.data.list.length < 1) {
        setSearchResultNone(true);
        setSearchFailedText(`"${search.keyword}"`);
      } else {
        setSearchResultNone(false);
        setSearchFailedText('');
      }

      setList((prevPosts) => [...prevPosts, ...res.data.list]);
      setHasNextPage(res.data.list.length === 6);
      setLoaded(true);

      if (res.data.list.length) {
        page.current += 1;
      }
    } catch (e: any) {
      throw new Error(e);
    }
  }, [search]);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loaded) {
        getNormalPosts();
      }
    });

    io.observe(observerTargetEl.current);
    return () => io.disconnect();
  }, [hasNextPage, getNormalPosts, loaded]);

  useEffect(() => {
    if (search.isSearchRequested) {
      page.current = 0;
      setList([]);
      getNormalPosts();
      setSearch((oldValue) => ({
        ...oldValue,
        isSearchRequested: false,
      }));
    }
  }, [search.isSearchRequested]);

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
      {searchResultNone && (
        <S.SearchResultIsNone>
          <S.SearchText>{searchFailedText}</S.SearchText>
          <p>에 대한 검색결과가 없습니다</p>
        </S.SearchResultIsNone>
      )}
      {!loaded && <MainPageSkeleton />}
    </>
  );
}

export default NormalPosts;
