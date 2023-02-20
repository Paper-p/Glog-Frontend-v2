import * as S from './style';
import * as I from 'assets/svg';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@uiw/react-markdown-preview/markdown.css';
import PostComment from '../ui/comment';
import PostTags from '../ui/tags';
import PostInformation from '../ui/information';
import { useState } from 'react';
import feed from 'network/request/feed';
import { DetailPostData } from 'types/post.types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import DeleteCommentModal from 'components/modals/modal/deleteComment';
import { modalsAtomFamily } from 'atoms';
import { ReadPostPageSkeleton } from 'components/utils/skeleton';

function ReadPostPage({ postId }: { postId: string }) {
  const [postData, setPostData] = useState<DetailPostData>();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [deleteCommentModal] = useRecoilState(
    modalsAtomFamily('deleteCommentModal')
  );
  const queryClient = useQueryClient();
  const [loaded, setLoaded] = useState(false);
  const getPostByPostId = async () => {
    try {
      const res: any = await feed.getPostByPostId(postId);
      setPostData(res.data);
      setIsLiked(res.data.isLiked);
      setLoaded(true);
    } catch (e: any) {
      if (e.response.status === 404) {
        throw new Error('없는 게시물입니다');
      }
    }
  };

  useQuery({
    queryKey: 'post',
    queryFn: getPostByPostId,
    refetchOnWindowFocus: false,
  });

  const onPostLike = async () => {
    return await feed.postLike(String(postData?.id));
  };

  const { mutate: postLike } = useMutation(onPostLike, {
    onSettled: () => {
      queryClient.invalidateQueries('post');
    },
  });

  const onPostLikeCancle = async () => {
    return await feed.postLikeCancellation(String(postData?.id));
  };

  const { mutate: postLikeCancle } = useMutation(onPostLikeCancle, {
    onSettled: () => {
      queryClient.invalidateQueries('post');
    },
  });

  const onLikeIconClick = () => {
    if (postData?.isLiked) {
      postLikeCancle();
    } else {
      postLike();
    }
  };

  return (
    <>
      {deleteCommentModal && <DeleteCommentModal />}
      <S.PostPageLayout>
        {loaded ? (
          <>
            <S.Wrapper>
              <S.PostTitle>{postData?.title}</S.PostTitle>
              <S.LikeIconBox
                isLiked={postData?.isLiked}
                onClick={onLikeIconClick}
              >
                {postData?.isLiked ? (
                  <I.AfterPostLikedIcon />
                ) : (
                  <I.BeforePostLikedIcon />
                )}
              </S.LikeIconBox>
            </S.Wrapper>
            <PostTags tagList={postData?.tagList} />
            <PostInformation
              nickname={String(postData?.author.nickname)}
              profileImageUrl={String(postData?.author.profileImageUrl)}
              createdAt={postData?.createdAt}
              likeCount={String(postData?.likeCount)}
              hit={String(postData?.hit)}
            />
            <S.Thumbnail src={postData?.thumbnail} alt={'thumbnail image'} />
            <S.ReadMarkdown data-color-mode='dark'>
              <MarkdownPreview source={String(postData?.content)} />
            </S.ReadMarkdown>
            <PostComment comments={postData?.comments} postId={postId} />
          </>
        ) : (
          <ReadPostPageSkeleton />
        )}
      </S.PostPageLayout>
    </>
  );
}

export default ReadPostPage;
