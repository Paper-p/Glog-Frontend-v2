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
import { useRouter } from 'next/navigation';
import PostLike from '../ui/like';

function ReadPostPage({ postId }: { postId: string }) {
  const [postData, setPostData] = useState<DetailPostData>();
  const [deleteCommentModal] = useRecoilState(
    modalsAtomFamily('deleteCommentModal')
  );
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const getPostByPostId = async () => {
    try {
      const res: any = await feed.getPostByPostId(postId);
      setPostData(res.data);
      setLoaded(true);
    } catch (e: any) {
      if (e.response.status === 404) {
        router.replace('/not-found?type=게시물');
      }
    }
  };

  useQuery({
    queryKey: 'post',
    queryFn: getPostByPostId,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {deleteCommentModal && <DeleteCommentModal />}
      <S.PostPageLayout>
        {loaded ? (
          <>
            <PostLike
              isLiked={Boolean(postData?.isLiked)}
              id={String(postData?.id)}
            >
              <S.PostTitle>{postData?.title}</S.PostTitle>
            </PostLike>
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
