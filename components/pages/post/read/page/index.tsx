import * as S from './style';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@uiw/react-markdown-preview/markdown.css';
import PostComment from '../ui/comment';
import PostTags from '../ui/tags';
import PostInformation from '../ui/information';
import { useState } from 'react';
import feed from 'network/request/feed';
import { DetailPostData } from 'types/post.types';
import { useQuery } from 'react-query';
import { deleteCommentModalAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import DeleteCommentModal from 'components/modals/modal/deleteComment';

function ReadPostPage({ postId }: { postId: string }) {
  const [postData, setPostData] = useState<DetailPostData>();
  const [deleteCommentModal] = useRecoilState(deleteCommentModalAtom);

  const getPostByPostId = async () => {
    try {
      const res: any = await feed.getPostByPostId(postId);
      setPostData(res.data);
    } catch (e: any) {
      if (e.response.status === 404) {
        // navigate to 404
      }
    }
  };

  const fetch = useQuery({
    queryKey: 'post',
    queryFn: getPostByPostId,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {deleteCommentModal && <DeleteCommentModal />}
      <S.PostPageLayout>
        <S.PostTitle>{postData?.title}</S.PostTitle>
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
      </S.PostPageLayout>
    </>
  );
}

export default ReadPostPage;
