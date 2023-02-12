import * as S from './style';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@uiw/react-markdown-preview/markdown.css';
import PostComment from '../ui/comment';
import PostTags from '../ui/tags';
import PostInformation from '../ui/information';
import { useEffect, useState } from 'react';
import feed from 'network/request/feed';
import { DetailPostData } from 'types/post.types';

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

function ReadPostPage({ postId }: { postId: string }) {
  const [postData, setPostData] = useState<DetailPostData>();

  useEffect(() => {
    const getPostByPostId = async () => {
      try {
        const res: any = await feed.getPostByPostId(Number(postId));
        setPostData(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getPostByPostId();
  }, []);
  return (
    <S.PostPageLayout>
      <S.PostTitle>{postData?.title}</S.PostTitle>
      <PostTags tagList={postData?.tagList} />
      <PostInformation
        nickname={String(postData?.author.nickname)}
        profileImageUrl={String(postData?.author.profileImageUrl)}
        createdAt={postData?.createdAt}
        likeCount={Number(postData?.likeCount)}
        hit={Number(postData?.hit)}
      />
      <S.Thumbnail src={postData?.thumbnail} />
      <S.ReadMarkdown data-color-mode='dark'>
        <MarkdownPreview source={String(postData?.content)} />
      </S.ReadMarkdown>
      <PostComment comments={postData?.comments} />
    </S.PostPageLayout>
  );
}

export default ReadPostPage;
