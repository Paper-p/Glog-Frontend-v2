import * as S from './style';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@uiw/react-markdown-preview/markdown.css';
import PostComment from '../ui/comment';
import PostTags from '../ui/tags';
import PostInformation from '../ui/information';

const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

function ReadPostPage() {
  return (
    <S.PostPageLayout>
      <S.PostTitle>asd</S.PostTitle>
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
