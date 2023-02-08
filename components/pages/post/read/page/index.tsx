import * as S from './style';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@uiw/react-markdown-preview/markdown.css';
import PostComment from '../ui/comment';
import PostTags from '../ui/tags';
import PostInformation from '../ui/information';
import { DetailPostData } from 'types/post.types';
import { useEffect, useState } from 'react';

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

function ReadPostPage(postData: any) {
  const [data, setData] = useState<DetailPostData>();

  useEffect(() => {
    if (postData) {
      console.log(postData);

      setData(postData.postData);
    }
  }, [postData]);

  return (
    <S.PostPageLayout>
      <S.PostTitle>{data?.title}</S.PostTitle>
      <PostTags />
      <PostInformation />
      <S.Thumbnail src='https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1208x347:1210x345)/origin-imgresizer.eurosport.com/2023/01/12/3524154-71830248-2560-1440.jpg' />
      <S.ReadMarkdown data-color-mode='dark'>
        <MarkdownPreview source={source} />
      </S.ReadMarkdown>
      <PostComment />
    </S.PostPageLayout>
  );
}

export default ReadPostPage;
