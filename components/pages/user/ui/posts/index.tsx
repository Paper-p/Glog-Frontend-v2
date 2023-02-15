import SignBoard from 'components/common/signBoard';
import * as S from './style';
import { FeedListData } from 'types/user.type';
import SpecialPostItem from 'components/utils/postItem/special';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import feed from 'network/request/feed';

interface UserPostsSectionProps {
  userPosts: FeedListData[] | undefined;
  nickname: string;
  isMine: boolean;
}

type ActiveSignBoardType = '일반 게시물' | '좋아요 게시물';

function UserPostsSection(props: UserPostsSectionProps) {
  const [activeSignBoard, setActiveSignBoard] =
    useState<ActiveSignBoardType>('일반 게시물');

  const [posts, setPosts] = useState<FeedListData[] | undefined>();

  const getPostsUserLiked = async () => {
    try {
      const res: any = await feed.getPostsUserLiked();
      setPosts(res.data.list);
    } catch (e: any) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    if (activeSignBoard === '일반 게시물') {
      setPosts(props.userPosts);
    }

    if (activeSignBoard === '좋아요 게시물') {
      getPostsUserLiked();
    }
  }, [activeSignBoard]);

  useEffect(() => {
    setPosts(props.userPosts);
  }, [props]);

  return (
    <S.UserPostsSection>
      <S.SignBoardBox>
        {props.isMine ? (
          <>
            <SignBoard
              onClick={() => setActiveSignBoard('일반 게시물')}
              className={
                activeSignBoard === '일반 게시물' ? 'is-active' : 'deactivation'
              }
            >
              💻 내 게시물’s
            </SignBoard>
            <SignBoard
              onClick={() => setActiveSignBoard('좋아요 게시물')}
              className={
                activeSignBoard === '좋아요 게시물'
                  ? 'is-active'
                  : 'deactivation'
              }
            >
              👍 좋아요 한 게시물
            </SignBoard>
          </>
        ) : (
          <SignBoard>💻 {props.nickname}님의 게시물’s</SignBoard>
        )}
      </S.SignBoardBox>
      <S.PostList>
        {posts?.map((currentValue) => (
          <Link key={currentValue.id} href={'/post/' + currentValue.id}>
            <SpecialPostItem list={currentValue} />
          </Link>
        ))}
      </S.PostList>
    </S.UserPostsSection>
  );
}

export default UserPostsSection;
